import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {
    (async () => {
      const session = await getSession();
    })()
  }, [])

  return (
    <div>HomePage</div>
  )
}
