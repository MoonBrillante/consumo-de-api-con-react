# Consumo de API con React
Responsive página web, el ratón mueve las tarjetas mostrar efecto de animación, haga clic en la tarjeta para que pop-up el mensaje
y nav tiene función de búsqueda. 
[alt text](https://github.com/MoonBrillante/consumo-de-api-con-react/blob/main/consumo-de-api-con-react/pokeapi-demo.JPG)
## Usar(React + MUI + PoKéAPI)
## Instalación Vite, React, axios
```
npm create vite@latest
npm install
npm run dev
```
```
npm install axios
```
## Instalación MUI
Material UI is an open-source React component library that implements Google's Material Design.
```
npm install @mui/material@emotion/react@emotion/styled
npm install @mui/icons-material
```

## Crear Navbar Component
```
Crear una nueva carpeta de componentes en src, a continuación, crear una carpeta Navbar, crear un archivo,
el nombre index.jsx.  Navbar tiene functión de búsqueda.
```
```
Paso 1 - Import the Material-UI package.
Paso 2 - From MUI site copia nav codigo a Navbar/index.jsx.
Paso 3 - Cambiar navbar nombre lo que quiere.
```
## Card Component

Para crear una tarjeta, sólo tienes que elegir el componente de tarjeta de la biblioteca Material UI y personalizarlo según tus especificaciones. 

## Dialog Box
### ¿Cómo se usan los diálogos en React?
Haga clic en la tarjeta para que pop-up el mensaje
```
Paso 1 - Importar los componentes Dialog y DialogTitle de la librería Material-Ui.
Paso 2 - Usar el componente Dialog en nuestra app para añadir diálogo....
Paso 3 - El estado openDialog se añade para controlar la apertura y cierre del diálogo.
```
## Pages 
```
Combinamos la barra de navegación y la Tarjeta para que sea responsive, para adaptarse a diferentes tamaños de pantalla.
```

