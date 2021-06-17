import { getConnection, querys, sql } from "../database/";
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt  from'jsonwebtoken';


export const Login = async (req, res, next) => {
 // revisar si hay errores
 const errores = validationResult(req);
 if( !errores.isEmpty() ) {
     return res.status(400).json({errores: errores.array() })
 }

 // extraer el email y password
 const { email, password } = req.body;
 let userPassword;

 try {
  const pool = await getConnection();
  await pool.query(querys.findOne,[email], function (error, results, fields) {
    pool.end()
                let userEmail;
                
                if (error) throw error;
                let resul=JSON.parse(JSON.stringify(results));
                userEmail = resul[0].map(a=>a.email)
                userPassword = resul[0].map(a=>a.password)
                console.log(userPassword)
                    if(userEmail[0]) {
                        return res.status(400).json({ msg: 'El usuario ya existe' });
                    }
              
            })
            
  // Revisar el password
  const passCorrecto = await bcryptjs.compare(password, userPassword);
  if(!passCorrecto) {
      return res.status(400).json({msg: 'Password Incorrecto' })
  }

  // // Si todo es correcto Crear y firmar el JWT
  //  const payload = {
  //     usuario: {
  //         id: usuario.id
  //     }
  // };

  // // firmar el JWT
  // jwt.sign(payload, process.env.SECRETA, {
  //     expiresIn: 3600 // 1 hora
  // }, (error, token) => {
  //     if(error) throw error;

  //     // Mensaje de confirmación
  //     res.json({ token  });
  // });

} catch (error) {
  console.log(error);
}





  // const email = req.body.email;
  // const password = req.body.password;
  // if (email.trim() === '' || password.trim() === '') {
  //   return res.status(400).json({ msg: "Por favor ingrese todos los datos" });
  // }
  //     try {
  //       let role=[];
  //       const pool = await getConnection();
  //       await pool.query(querys.getUser,[email,password], function (error, results, fields) {
  //         if (error) throw error;
  //         let resul=JSON.parse(JSON.stringify(results))
  //         role = resul[0].map(a=>a.id_role)
  //         console.log(role[0])
  //         if(role[0]===1){
  //           res.redirect('/admin')
  //         }else if(role[0]===2){
  //           res.redirect('/seller')
  //         }else{
  //         res.status(404).json({ errores: "Verifique los datos" })
  //       }
  //       })
  //     } catch (error) {
  //       if (!error.statusCode) res.status(500).json({errores:"Error sql"})
  //       next(error);
  //     }
  
};


// export const verifyAccount = async (req, res, next) => {
//     const token = req.params.token;
//     const email = req.body.email;
//     const password = req.body.password;
//     if (email.trim() == '' || password.trim() == '') {
//         return res.status(400).json({ msg: "Por favor ingrese todos los datos" });
//       }
//       try {
//         let role=[]
//         const pool = await getConnection();
//         await pool.query(querys.getUser,[email,password], function (error, results, fields) {
//           if (error) throw error;
//           let resul=JSON.parse(JSON.stringify(results))
//           role = resul[0].map(a=>a.id_role)
//           console.log(role[0])
//           if(role[0]===1){
//             res.redirect('/admin')
//           }else if(role[0]===2){
//             res.redirect('/seller')
//           }else{
//           res.status(404).json({ msgError: "Verifique los datos" })
//         }
//         })
//       } catch (error) {
//         if (!error.statusCode) res.status(500).json({msgError:"Error sql"})
//         next(error);
//       }







//     Account.findOne({
//       accountVerifyToken: token,
//       accountVerifyTokenExpiration: { $gt: Date.now() },
//     })
//       .then((account) => {
//         if (!account) {
//           const error = new Error(
//             "Token in the url is tempered, don't try to fool me!"
//           );
//           error.statusCode = 403;
//           throw error;
//         }
//         account.isVerified = true;
//         account.accountVerifyToken = undefined;
//         account.accountVerifyTokenExpiration = undefined;
//         return account.save();
//       })
//       .then((account) => {
//         res.json({ message: "Account verified successfully." });
//       })
//       .catch((err) => {
//         if (!err.statusCode) err.statusCode = 500;
//         next(err);
//       });
//   };