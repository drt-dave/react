import "./App.css";
const suma = () => 4 + 4;

function FirstApp() {
  return (
    <>
      <h1> Hola mundo </h1>
      {/* {<code>{JSON.stringify(newMessage)}</code> } */}
      <p> Soy un subtitulo </p>
      <p> 4 + 4 es igual a {suma()} </p>
    </>
  );
}

export default FirstApp;
