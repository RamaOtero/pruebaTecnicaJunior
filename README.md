APIs:

Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/
Endpoint para uasr: `https://cataas.com/cat/says/{firstword}?fontSize=50&fontColor=red&json=true` 

Recupera un hecho aleatorio de gatos de la primera API

Recuperar la primera palabra del hecho

Muestra una imagen de un gato con la primera palabra.

*En las pruebas tecnicas es muy probable que no podamos iniciar con el paquete de vite
por lo tanto tenemos que inciar nuestro proyecto de react configurando y 
creando el enrutamiento de la app 

1- Creamos con -npm create vite@latest- un proyecto vanilla
sin instalar las dependencias

2- Instalamos el plugin de react de vite (Seguramente te dejen hacer esto)

-npm install @vitejs/plugin-react -E

3- Instalamos dependencias de react, react-dom

npm install react react-dom -E

4- Creamos la configuración de vite, (vite.config.js)

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})

5- En el main.js borro todo, es el archivo que esta enrutado al script
aca mismo hago el root:

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(<h1>Hello World</h1>)

Mas adelante el root.render va a renderizar la <App />
# pruebaTecnicaJunior
