//Javier
//llama a las funciones de la bdd
const Opinion = require('../models/opinion');

exports.getOpinions = async (req, res) => {
  try {
    const opinions = await Opinion.findAll();
    res.status(200).json(opinions);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener opiniones' });
  }
};

// Crear una nueva opinión
exports.createOpinion = async (req, res) => {
  const { id, score } = req.body;

  if (!id || !score) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const newOpinion = await Opinion.create({ id, score });
    res.status(201).json(newOpinion);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la opinión' });
  }
};
