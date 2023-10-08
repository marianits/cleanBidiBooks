import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
import axios from 'axios';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {

      const { lineItems, book, userId } = req.body;

      if (!lineItems.length) {
        return res.status(400).json({ error: 'Bad Request!' })
      }

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/checkout/success?bookId=${book._id}`,
        cancel_url: req.headers.origin,
      })

      await axios.post('http://localhost:3000/api/compras', { libroId: book._id, usuarioId: userId });

      return res.status(201).json({ session })

      // If using HTML forms you can redirect here
      // return res.redirect(303, session.url)
    } catch (e) {
      return res.status(e.statusCode || 500).json({ message: e.message })
    }
  }

  res.setHeader('Allow', 'POST')
  res.status(405).end('Method Not Allowed')
}

export default handler