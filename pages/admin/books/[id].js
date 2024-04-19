import { Button, Icon } from 'semantic-ui-react';
import { useEffect, useState, useRef } from 'react';
import { ReactReader } from "react-reader";

export default function Book({ book: { fileURL } }){
  const [location, setLocation] = useState(null);
  const [largeText, setLargeText] = useState(false);
  const rendition = useRef(undefined);
  useEffect(() => {
    rendition.current?.themes.fontSize(largeText ? '140%' : '100%')
  }, [largeText])
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: "100vh" }}>
      <Button icon basic color='orange' onClick={() => setLargeText(!largeText)}>
        <Icon name='font' size={largeText ? 'small' : 'large'}/>
      </Button>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={fileURL}
        getRendition={(_rendition) => {
          rendition.current = _rendition
          _rendition.hooks.content.register((contents) => {
            const body = contents.window.document.querySelector('body')
            if (body) {
              body.oncontextmenu = () => {
                return false
              }
            }
          })
          rendition.current.themes.fontSize(largeText ? '140%' : '100%')
        }}
      />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query 
  const res = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await res.json();
  return {
    props: {
      book
    }
  }
};
