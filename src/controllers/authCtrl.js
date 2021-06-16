import { getConnection, querys, sql } from "../database/";


export const Login = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let role='  ';

    if (username.trim() == '' || password.trim() == '') {
        return res.status(400).json({ msg: "Por favor ingrese todos los datos" });
      }
      try {
        const pool = await getConnection();
        const res = await pool.request().query("SELECT * FROM users WHERE username='jesus' AND password='password1'")
        console.log(res)
        // .input('username', sql.VarChar, username )
        // .input('password', sql.VarChar, password )
        // .query(querys.getUser, (err, rows, fields)=>{
        //       pool.end();
        //       if (err) throw err;  
        //       res.status(200).json(rows);
        //   })
        
        // .query(querys.getUser,(err, rows, fields)=>{
        //     pool.end();
        //     if (err) throw err;  
        //     res.json(rows); 
        // });
      } catch (error) {
        if (!error.statusCode) res.status(500).json('Error sql')
        next(error);
      }
  };


export const verifyAccount = (req, res, next) => {
    const token = req.params.token;
    Account.findOne({
      accountVerifyToken: token,
      accountVerifyTokenExpiration: { $gt: Date.now() },
    })
      .then((account) => {
        if (!account) {
          const error = new Error(
            "Token in the url is tempered, don't try to fool me!"
          );
          error.statusCode = 403;
          throw error;
        }
        account.isVerified = true;
        account.accountVerifyToken = undefined;
        account.accountVerifyTokenExpiration = undefined;
        return account.save();
      })
      .then((account) => {
        res.json({ message: "Account verified successfully." });
      })
      .catch((err) => {
        if (!err.statusCode) err.statusCode = 500;
        next(err);
      });
  };