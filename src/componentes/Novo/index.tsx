interface NovoProps{
    titulo: string
}

const Novo = ({ titulo }: NovoProps) => {
    return(
        <div><h1>{titulo}</h1></div>
    )
}

export default Novo