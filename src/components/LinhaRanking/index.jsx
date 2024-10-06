import "../Ranking/style.css"

export const LinhaRanking = (props) => {
    return(
        <div className="rank">
            <div className="num">
            <p>{props.numero}</p>
            </div>

            <div className="user">
            <p>{props.usuario}</p>
            </div>

            <div className="best">
            <p>{props.melhor}</p>
            </div>

            <div className="total">
            <p>{props.total}</p>
            </div>
        </div>
    )
}