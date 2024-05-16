import { useRouter } from 'next/router'
import { Header, Icon, Segment } from 'semantic-ui-react'
import confetti from 'canvas-confetti';
import Link from 'next/link';

export default function Success () {
  const {
    query: { bookId }
  } = useRouter()

  const handleClick = () => {
    confetti()
  }
  return(
    <Segment placeholder textAlign='center'>
      <Header icon>
        <Icon name='birthday cake' onClick={handleClick}/>
        Muchas Gracias por tu compra!
      </Header>
      <p>Aqui tienes el enlace al libro:</p>
      <Link href={`/books/${bookId}`}>
        enlace
      </Link>
    </Segment>
  )
}
