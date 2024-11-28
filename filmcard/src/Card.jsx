import './Card.css';

function Card(proxy){
    return(
        <div className='card'>
            <h3>Title:<span>{proxy.title}</span></h3>
            <h3>Actor:<span>{proxy.Actor}</span></h3>
            <h3>Actress:<span>{proxy.actress}</span></h3>
            <h3>Rating:<span>{proxy.Rating}</span></h3>
        </div>
    );
}
export default Card;