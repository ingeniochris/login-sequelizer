import jwt from 'jsonwebtoken';

export const AuthMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token) {
        return res.status(401).json({msg: 'No hay Token, permiso no válido'})
    }
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.email = cifrado.email;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no válido'});
    }
}