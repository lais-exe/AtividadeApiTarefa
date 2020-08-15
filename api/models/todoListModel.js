const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Tarefa = new Schema ( {

  descricao: {
    type: String,
    required: "Favor informar uma descrição para tarefa"
  },

  status: {
    type: [{
      type: String,
      enum: ['Pendente', 'Em andamento', 'Completa'],
      required: "Informe o estado da tarefa, como: Pendente - Em andamento - Completa"
      }],
      
  },
  Created_date : {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tarefas', Tarefa)