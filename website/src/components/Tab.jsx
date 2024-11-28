import './Tab.css';

//Recipe : using this recipe you can create a tab

function Tab(props){
    return(
        <div className='Tab-div' onClick={()=>{props.handleClick(props.index)}}>
            <span className='Tab-title'>{props.title}</span>
        </div>
    );
}
export default Tab;