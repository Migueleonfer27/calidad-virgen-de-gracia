import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/proxy-pdf', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      console.error('❌ Error: Falta el parámetro URL');
      return res.status(400).json({ error: 'Falta el parámetro URL' });
    }

    console.log(`📥 Solicitando PDF desde: ${url}`);

    const response = await axios.get(url, {
      responseType: 'arraybuffer', // Para recibir el archivo en formato binario
      headers: {
        'User-Agent': 'Mozilla/5.0', // Evita bloqueos de ciertos servidores
        'Accept': 'application/pdf',
      },
    });

    console.log(`✅ PDF recibido, tamaño: ${response.data.length} bytes`);

    // Configurar la cabecera y enviar el PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.send(response.data);
    console.log()
  } catch (error) {
    console.error('❌ Error en el proxy:', error.message);
    res.status(500).json({ error: 'Error al obtener el PDF', details: error.message });
  }
});

export { router };
