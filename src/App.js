import logo from './logo.svg';
import './App.css';
import './Form.html';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a href={process.env.PUBLIC_URL + "Form.html"}>
                    {" "}
                    Map
                </a>
            </header>
        </div>
    );
}

export default App;

