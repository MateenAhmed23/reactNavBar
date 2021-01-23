import React from 'react';
import ReactDOM from 'react-dom';


import Nav from './components/nav';


import './css/app.css'


const App = ()=>{
    return (<div>
        <Nav />
    </div>);
}

ReactDOM.render(<App/>,
    document.querySelector('#root'));