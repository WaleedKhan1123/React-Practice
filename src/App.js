import "./styles/style.css";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const User= {
 name: 'Waleed',
 reg: 'SP21-BSE-006'
}

function App() {
  return (
    <div className="App">
    
       
        <h1 className="header">
          Welcome to react practice
          
        </h1>
        <MyButton/>
       <h1>{User.name}</h1>
       <h1>{User.reg}</h1>
    </div>
  );
}

export default App;
