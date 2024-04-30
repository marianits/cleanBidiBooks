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
      <h3>Bienvenido admin!</h3>
    </>
  )
}
