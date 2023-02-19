import { useEffect, useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Banner from './componentes/Banner'
import Novo from './componentes/Novo';
import { IColaborador } from './shared/interfaces/IColaborador';
import { times } from './data/times';

function App() {

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  useEffect(() => {
    document.title = colaboradores[colaboradores.length - 1]?.nome
    console.log(colaboradores);
  }, [colaboradores])


  return (
    <div className="App">
      <Novo titulo='O Lucca é o neném mais lindo do mundo'></Novo>
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
