import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Ad from './components/Ad';
import './App.css';
import {titles} from './Data';
import {contents} from './Data';

function App(){
    let[title, setTitle] = useState(titles[0]);
    let[content, setContent] = useState(contents[0]);

    let handleClick = (idx)=>{
        setTitle(titles[idx]);
        setContent(contents[idx]);
    }
    return(
        <div>
            <Navbar></Navbar>
            <div className='Sidebar-Main-Container'>
                <Sidebar handleClick={handleClick}></Sidebar>
                <Main title={title} content = {content}></Main>
                <div className='iframe'>
                <Ad></Ad>
                </div>

            </div>
        </div>
    );

}
export default App;