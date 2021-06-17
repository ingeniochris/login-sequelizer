import { getConnection, querys, sql } from "../database/";
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt  from'jsonwebtoken';


export const CreateUser = async (req, res, next) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer email 
    const { email, fullname, password, confirmPassword } = req.body;

    try {
        // Revisar que el usuario registrado sea unico
        const pool = await getConnection();
            await pool.query(querys.findOne,[email], function (error, results, fields) {
                pool.end();
                let userEmail;
                if (error) throw error;
                let resul=JSON.parse(JSON.stringify(results));
                userEmail = resul[0].map(a=>a.email)
                console.log(userEmail)
                    if(userEmail[0]) {
                         res.status(400).json({ msg: 'El usuario ya existe' });
                    }
            })

            const salt = await bcryptjs.genSalt(10);
            let passwordEncryp = await bcryptjs.hash(password, salt );

            const payload = {password}
    
            // firmar el JWT y SAVE user
            jwt.sign(payload, process.env.SECRETA, {
                expiresIn: 3600 // 1 hora
            }, (error, token) => {
                if(error) throw error;
                
                pool.query(querys.addUser,[email, passwordEncryp, fullname, token ], function (error, results, fields) {
                    pool.end();
                    let userToken;
                    if (error) throw error;
                    let resul=JSON.parse(JSON.stringify(results));
                    userToken = resul[0].map(a=>a.token)
                    console.log('Usuario creado exito',userToken[0])
                    res.json(token)
                })
            });
         } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

 