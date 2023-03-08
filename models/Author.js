import { Schema, model, models } from 'mongoose';

const authorSchema = new Schema({
  nombre: {
		type: String,
		required: true,
		trim: true
	},
	apellidos: {
		type: String,
		required: true,
		trim: true
	},
	biografia: {
		type: String,
		trim: true
	},
  sitioWeb: {
    type: String,
    trim: true
  },
  redesSociales: {
    type: Map,
    of: String
   },
  fotoPerfil: {
    type: String,
    trim: true
  }
}, {
	timestamps: true,
	versionKey: false
})

export default models.Author || model('Author', authorSchema)

