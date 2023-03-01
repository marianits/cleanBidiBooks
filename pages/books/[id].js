import { useState } from 'react'
import { ReactReader } from "react-reader"

export default function Book({ book: { URL } }){
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={URL}
      />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query 
  const res = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await res.json()
  return {
    props: {
      book
    }
  }
};
