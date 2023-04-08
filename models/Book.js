import { Schema, model, models } from 'mongoose'

const bookSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  fileURL: {
    type: String,
    required: [true, 'URL is required'],
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
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.Book || model('Book', bookSchema)