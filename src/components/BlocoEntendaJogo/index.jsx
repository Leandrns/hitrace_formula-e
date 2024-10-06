export const BlocoEntendaJogo = (props) => {
    return(
        <div className="paragrafo">
            <article className="content">
                <h3 className="titulo">{props.titulo}</h3>
                <p>{props.descricao}</p>
            </article>
        </div>
    )
}