import './Colaborador.css'

interface ColaboradorProps {
    nome: string,
    imagem: string,
    cargo: string,
    corDeFundo: string,
    dataEntradaTime: string
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, dataEntradaTime }: ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h6>{new Date(dataEntradaTime).toLocaleDateString()}</h6>
        </div>
    </div>)
}

export default Colaborador