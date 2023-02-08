import { dbConnect } from 'utils/mongoose';
import Author from 'models/Author';

dbConnect();

export default async function handler(req, res) {

  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const authors = await Author.find();
        return res.status(200).json(authors)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'POST':
      try {
        const newAuthor = new Author(body);
        const savedAuthor = await newAuthor.save()
        return res.status(201).json(savedAuthor);
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    default:
      return res.status(400).json({ msg: 'this method is not supported '})
  }
};
