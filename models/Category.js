import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.Category || model('Category', categorySchema)
