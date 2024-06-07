const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; // Información del usuario para futuros middlewares/controladores
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido' }); 
  }
}

module.exports = authMiddleware;
