export const LinhaRanking = (props) => {
    return (
        <tr className="sombra">
            <td className="cima"><b>{props.numero}</b></td>
            <td className="alinhamento">{props.usuario}</td>
            <td className="alinhamento">{props.melhor}</td>
            <td className="alinhamento">{props.total}</td>
        </tr>
    )
}