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

const name={
  name3: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
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

       <img className="avatar"
       src={name.imageUrl} alt={'photo of user '+name.name3} style={{width:name.imageSize, height:name.imageSize}}/>
       
    </div>
  );
}

export default App;
