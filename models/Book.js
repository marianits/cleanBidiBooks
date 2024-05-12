import { Schema, model, models } from 'mongoose'

const bookSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  fileURL: {
    type: String,
    required: [true, 'fileURL is required'],
    trim: true
  },
  descripcion: {
    type: String,
    required: false,
    trim: true
  },
  imageURL: {
    type: String,
    required: false,
    trim: true
  },
  categorias: {
    type: Array,
    default: []
  },
  autores: [{
    id: { type: Schema.Types.ObjectId, ref: 'Author' },
    name: String
  }],
  stripeId: {
    type: String,
    required: false,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.Book || model('Book', bookSchema)