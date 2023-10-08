import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { Button } from 'semantic-ui-react'
import Link from 'next/link';

export default function HomePage() {

  useEffect(() => {
    (async () => {
      const session = await getSession();
      console.log(session);
    })()
  }, [])

  return (
    <>
    <h3>Admin Dashboard</h3>

    <Link href={`/admin/generos`}>
      <Button color='purple'>Géneros</Button>
    </Link>
    <Link href={`/admin/autores`}>
      <Button color='purple'>Autores</Button>
    </Link>
    <Link href={`/admin/books`}>
      <Button color='purple'>Libros</Button>
    </Link>
    </>

  )
}
