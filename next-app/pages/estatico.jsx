export const getStaticProps = async () => {
    const resp = await fetch ('http://localhost:3000/api/random')
    const dados = await resp.json()
    setValor(dados.valor)
    
    return {
        revalidate: 10, // 10 segundos
        props: {
            valor: dados.valor
        }
    }
}



const Estatico = props => {

    return (
        <div>
            <h1>Conteudo Estático</h1>
            <h2>Ultimo valor = {props.valor}</h2>
        </div>        
    )
}    

export default Estatico;



