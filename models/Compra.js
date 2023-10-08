import { Schema, model, models } from 'mongoose';

//It could be good to store the date of the compra

const compraSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  libroId: {
    type: Schema.Types.ObjectId,
    trim: true
  },
  fechaCompra: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.Compra || model('Compra', compraSchema)
