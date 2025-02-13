import jwt from 'jsonwebtoken';

export const ValidarSesion = (req, res, next) => {
    const token_usuario = req.headers['authorization'];
    console.log('Token recibido:', token_usuario);

    if (!token_usuario) {
      return res.status(403).json({ message: 'El token es requerido' });
    }

    jwt.verify(token_usuario, process.env.SECRET, (error, decoded) => {
      if (error) {
        console.error('Error en la verificación del token:', error.stack);
        return res.status(403).json({ message: 'El token no está autorizado auth.js' });
      }

      console.log('Token válido:', decoded);

      // Si el token es válido, puedes guardar la información decodificada en el objeto req para usarlo en las siguientes funciones.
      req.user = decoded;

      // Responder a Postman con el resultado de la validación solo si es necesario,
      // pero continuamos con el siguiente middleware o función.
      next();
    });
};
