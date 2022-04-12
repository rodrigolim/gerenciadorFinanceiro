var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  tipo: { type: String, required: true},
  valor: { type: Number, required: "O valor é obrigatório"},
  descricao: { type: String, required: "O campo descrição é obrigatório"},
  observacao: String,
  data: { type: Date, default: Date.now },
  dataCadastro: { type: Date, default: Date.now },
  i_categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias'
  },
  i_usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true
  }
});

mongoose.model('movimentacoes', _model);
