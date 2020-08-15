const mongoose = require('mongoose');
const Tarefa = mongoose.model('Tarefas');

exports.criar = (req,res) => {
  const { descricao, status} = req.body
  let novaTarefa = new Tarefa({ descricao, status})
  novaTarefa.save((error, tarefa) =>{
    if(error){
      res.send(error);
    }
    res.send('Tarefa criada com sucesso');
  })
}

exports.listar = (req,res) =>{
  Tarefa.find({}, (error,tarefas) =>{
    if(error){
      res.send(error);
    }
    res.json(tarefas);
  })
}

exports.atualizar = (req,res) => {
  Tarefa.findOneAndUpdate({_id: req.params.id }, req.body,{new: true} ,(error, tarefa) =>{
    if(error){
      res.send(error);
    }
    let resposta = {
      mensagem: 'Tarefa atualizada com sucesso',
      data : tarefa
    }
    res.send(resposta);
  })
} 

exports.deletar = (req,res) => {
  Tarefa.remove({_id: req.params.id}, (error,tarefa) => {
    if(error){
      res.send(error);
    }
    let resposta = {
      mensagem: 'Tarefa apagada com sucesso',
      data: tarefa
    }
    res.send(resposta);
  })
} 
