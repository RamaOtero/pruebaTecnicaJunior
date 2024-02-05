import { useCatImage } from "./services/hooks/useCatImage";
import { useCatFact } from "./services/hooks/useCatFact";

// La idea del código es traer una imagen de gato que corresponda con la primer palabra de una api que nos devuelve un facto de gato

// Endpoint que nos devuelve el JSON de la imagen y ya tiene integrado la variable de firstword
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true`

export function App() {
  // Estado con el cual guardamos y seteamos el fact del gato a usar
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
 

  //El boton el cual cambia de facto
  const handleClick = async () => {
    refreshFact()
  };

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}

      {imageUrl && <img src={imageUrl} alt={`Image stracted using the first three words for ${fact}`} />}
    </main>
  );
}
