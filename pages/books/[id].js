import { useEffect, useState, useRef } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { ReactReader } from "react-reader";
import { getSession } from 'next-auth/react';

export default function Book({ book: { fileURL }, compra }){
  const [location, setLocation] = useState(compra?.location);
  const [largeText, setLargeText] = useState(false);
  const [rendition, setRendition] = useState(undefined)
  const [selections, setSelections] = useState([]);
  const renderition = useRef(undefined);

  // Function for the font settings:
  useEffect(() => {
    renderition.current?.themes.fontSize(largeText ? '140%' : '100%')
  }, [largeText])

  useEffect(() => {
    if (rendition) {
      function setRenderSelection(cfiRange, contents) {
        if (rendition) {
          setSelections((list) =>
            list.concat({
              text: rendition.getRange(cfiRange).toString(),
              cfiRange,
            })
          )
          rendition.annotations.add(
            'highlight',
            cfiRange,
            {},
            undefined,
            'hl',
            { fill: 'orange', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
          )
          const selection = contents.window.getSelection()
          selection?.removeAllRanges()
        }
      }
      rendition.on('selected', setRenderSelection)
      return () => {
        rendition?.off('selected', setRenderSelection)
      }
    }
  }, [setSelections, rendition])

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
    fetch(`http://localhost:3000/api/compras/${compra._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: epubcifi }),
      })
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
          renderition.current = _rendition
          _rendition.hooks.content.register((contents) => {
            const body = contents.window.document.querySelector('body')
            if (body) {
              body.oncontextmenu = () => {
                return false
              }
            }
          })
          renderition.current.themes.fontSize(largeText ? '140%' : '100%')
          setRendition(_rendition)
        }}
      />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const session = await getSession(ctx);
  const res = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await res.json();
  const com = await fetch('http://localhost:3000/api/compras/getByBookUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: session?.user?.userId || '123',
      bookId: book._id
    })
  });
  const compra = await com.json();
  return {
    props: {
      book,
      compra
    }
  }
};