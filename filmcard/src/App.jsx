import Card from './Card';
import './App.css';

function App(){
    return(
    <div className='container'>
        <Card title="Singham" Actor="Ajay" actress="Kajol" Rating="7"/>
        <Card title="Drishyam" Actor="Ajay" actress="Shriya" Rating="10"/>
        <Card title="DDLJ" Actor="SRK" actress="Kajol" Rating="7"/>
    </div>
    );
}
export default App;