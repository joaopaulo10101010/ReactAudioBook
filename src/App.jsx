import { useState, useRef } from 'react';
import './App.css';
import brasCubasTmg from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BotoesControle from './BotoesControle';
import GerenciadorFaixa from './GerenciadorFaixas';
import livro from './assets/capitulos/livro';

function App() {
  const [taTocando, definirTaTocando] = useState(false);
  const [faixaAtual, definirFaixaAtual] = useState(0);

  const tagAudio = useRef(null);

  const informacoesLivro = {
    nome: "Memorias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: brasCubasTmg,
    capitulos: livro,
    textoAlternativo: "Capa do Livro Memórias Póstumas de Brás Cubas"
  };

  const tocarFaixa = () => {
    tagAudio.current.play();
    definirTaTocando(true);
  };

  const pausarFaixa = () => {
    tagAudio.current.pause();
    definirTaTocando(false);
  };

  const tocarOuPausarFaixa = () => {
    if(taTocando){
      pausarFaixa();
    }
    else
    {
      tocarFaixa();
    }
  };

  return (
    <>
      <Capa
        imagemCapa = {informacoesLivro.capa}
        textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={1}/>
      <GerenciadorFaixa
        faixa={informacoesLivro.capitulos[faixaAtual]}
        referencia={tagAudio}
      />
      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
      />
    </>
  )
}

export default App
