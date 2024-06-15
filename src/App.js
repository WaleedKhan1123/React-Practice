import "./styles/style.css";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
function App() {
  return (
    <div className="App">
    
       
        <h1 className="header">
          Welcome to react practice
          
        </h1>
        <MyButton/>
      
    </div>
  );
}

export default App;
