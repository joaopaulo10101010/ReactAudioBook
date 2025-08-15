import { useState } from 'react';
import './App.css';
import brasCubasTmg from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BotoesControle from './BotoesControle';

function App() {
  const [taTocando, definirTaTocando] = useState(false);

  const informacoesLivro = {
    nome: "Memorias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: brasCubasTmg,
    textoAlternativo: "Capa do Livro Memórias Póstumas de Brás Cubas"
  };

  return (
    <>
      <Capa
        imagemCapa = {informacoesLivro.capa}
        textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={1}/>
      <BotoesControle
        taTocando={taTocando}
        definirTaTocando={definirTaTocando}
      />
    </>
  )
}

export default App
