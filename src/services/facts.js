// Endpoint que nos devuelve un facto de gatos
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'


//Creamos la funcion la cual nos devuelve el facto, una mala practica es pasar los setstate
//estos mismos pertenecen al componente y es mala practica pasarlos como parametro
//IMPORTANTE que no tenga la dependencia de react
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}