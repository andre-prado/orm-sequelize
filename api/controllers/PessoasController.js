const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } 
    catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    try {
      const { id } = req.params;

      const umaPessoa = await database.Pessoas.findOne({where: {id: id}});
      return res.status(200).json(umaPessoa);
    } 
    catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUmaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    }
    catch(err) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUmaPessoa(req, res) {
    const novosDados = req.body;
    const { id } = req.params;

    try {
      await database.Pessoas.update(
      novosDados,
      {
        where:
        {
          id: id
        }
      });
      return res.status(204).json();
    }
    catch(err) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaUmaPessoa(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({where: {id: id }});
      return res.status(202).json();
    }
    catch(err) {
      return res.status(500).json(error.message);
    }
  }
}


module.exports = PessoaController;