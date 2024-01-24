import { useState, useEffect } from 'react'

// La idea del código es traer una imagen de gato que corresponda con la primer palabra de una api que nos devuelve un facto de gato

// Endpoint que nos devuelve un facto de gatos
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Endpoint que nos devuelve el JSON de la imagen y ya tiene integrado la variable de firstword
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true`

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  // Estado con el cual guardamos y seteamos el fact del gato a usar
  const [fact, setFact] = useState()

  const [imageUrl, setImageUrl] = useState()

  // MUY IMPORTANTE NO OLVIDAR LAS DEPENDENCIAS!
  // Dependencia array vacio [] lo que hará que se carge el fetch solo la primera vez cuando se renderiza el componente
  useEffect(() => {
    // Hacemos fetch del endpoint
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // Hacemos que la respuesta a ese fetch sea un JSON
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threefirstWord = fact.split(' ', 3).join(' ')
        console.log(threefirstWord)

        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img
        src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image stracted using the first
      three words for ${fact}`}
                   />}
    </main>
  )
}
