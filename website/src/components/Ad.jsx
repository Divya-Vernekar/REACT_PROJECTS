import './Ad.css';
import zomato from '../images/zomato_ad.png';

function Ad(){
    return(
        <div className='ad-container'>
            <div className='zomato-img-container'>
                <img src={zomato} height="300px" width="220px" alt="pic"></img>
            </div>
        </div>
    );
}
export default Ad;