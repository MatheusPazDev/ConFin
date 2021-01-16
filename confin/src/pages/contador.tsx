import { useState } from "react";
import Layout from "../components/Layout";

function RetornaContador() {
  return (
    <Layout title="Confin">
      Go To <a href="/">Home</a>
      <div>
        <Contador />
      </div>
    </Layout>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function addContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button
        className="bg-green-300 border-2 rounded m-2 p-2 text-black font-bold"
        onClick={addContador}
      >
        Adicionar
      </button>
      <button
        className="bg-gray-300 border-2 rounded m-2 p-2 text-black font-bold"
        onClick={() => {
          setContador(0);
        }}
      >
        Resetar
      </button>
      <button
        className="bg-red-300 border-2 rounded m-2 p-2 text-black font-bold"
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Subtrair
      </button>
    </div>
  );
}

export default RetornaContador;
