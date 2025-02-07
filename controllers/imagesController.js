const path = require('path'); // Importa el módulo path

async function Cintillo(req, res) {
    const imagePath = path.join(__dirname, '..', 'public', 'CINTILLO.png');
res.sendFile(imagePath);
}

async function polsociales(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'pol-sociales.png');
    res.sendFile(imagePath);
}

async function admfinanciera(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'administracion-financiera.png');
    res.sendFile(imagePath);
}


module.exports = { Cintillo, polsociales, admfinanciera };