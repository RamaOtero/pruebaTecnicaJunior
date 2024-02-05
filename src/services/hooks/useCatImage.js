import { useEffect, useState } from "react";

//CUSTOM HOOK
//Es una caja negra, no nos interesa como funciona
//Ademas los custom hook nos permiten utilizar otros hooks

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // MUY IMPORTANTE NO OLVIDAR LAS DEPENDENCIAS!
  // Dependencia array vacio [] lo que hará que se carge el fetch solo la primera vez cuando se renderiza el componente
  
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split('', 3).join('');
    console.log(threeFirstWords)

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
