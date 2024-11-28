import './Main.css';


function Main(props){

    return(
        <div className='Main-Container'>
           <h2>{props.title}</h2>
           <div className='content-div'>
                {props.content}
           </div>
        </div>
    );
}

export default Main;