import './Data.css';
export let titles = ["Introduction" , " GetStarted" , "React Components" , "ES6"];
//                        0                 1           2          3
export let contents = [

    <div className="content-container">
        <h2>What is React?</h2>
        <div className="ans-div">
            <p>React is a powerful JavaScript library for building dynamic and interactive user interfaces. It is developed by Facebook. React is known for its component-based architecture which allows you to create reusable UI elements, making complex web applications easier to manage and maintain. React is used to build single-page applications.</p>
        </div>

        <div className="code-div-container">
            <h3>Coding Example</h3>
            <div className="code-div">
            <code>
            <pre>
                {`const greet = (name) => {
                return 'Hello, ' + name + '!';
            };
            
            console.log(greet('World'));`}
            </pre>
            </code>
            </div>
        </div>
    </div>
    
  /*                           Second Tab8              */  
    
    , <div className="content-container">
    <h2>React Getting Started</h2>
    <div className="ans-div">
        <p>To use React in production, you need npm which is included with Node.js.

To get an overview of what React is, you can write React code directly in HTML.

But in order to use React in production, you need npm and Node.js installed.</p>
    </div>

    <div className="code-div-container">
        <h3>Coding Example</h3>
        <div className="code-div">
        <code>
        <pre>
        {`
        import logo from './logo.svg';
        import './App.css';
        
        function App() {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        }
        
        export default App;`}
        </pre>
        </code>
        </div>
    </div>
</div>
 , /*                           Third Tab             */ 

 <div className="content-container">
    <h2>Functional Component in React</h2>
    <div className="ans-div">
        <p>We can create a functional component in React by writing a JavaScript function. These functions may or may not receive data as parameters, we will discuss this later in the tutorial. The below example shows a valid functional component in React:</p>
    </div>

    <div className="code-div-container">
        <h3>Coding Example</h3>
        <div className="code-div">
        <code>
        <pre>
        {`
        function welcome() {
            return <h1>Hello, Welcome Divya!</h1>;
        }
        
        `}
        </pre>
        </code>
        </div>
    </div>
</div>
  , "ECMA SCRIPT 6"];


