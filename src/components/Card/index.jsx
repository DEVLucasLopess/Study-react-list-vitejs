import './styles.css';

//estou obtendo os valores dos campos e passando para as propriedades do card.
export function Card({name, time}) {
    return (
        <div className="card">
            <strong>{name}</strong>     
            <small>{time}</small>
        </div>
    )
}