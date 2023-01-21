
import Logo from './Learn Like Leon_Logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo-1" alt="Logo" />
        <p className='text-bold'>
          This free online training program will empower <code>YOU, me and US</code> with hands-on knowledge and practical application of 
          cloud computing.
        </p>
        <a
          className="App-link"
          href="https://learnlikeleon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Like Leon
        </a>
      </header>
    </div>
  );
}

export default App;
