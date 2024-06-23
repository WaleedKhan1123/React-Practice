import "./styles/style.css";
import { useState } from "react";
function MyButton({count ,onClick}) {
    
 
  return (
   
    <button onClick={onClick} >
      
      I'm a button
      {count}
    </button>
  );
}
function App() {
  const [counter, setCounter]= useState(0);
  
  
  function clicked (){
    setCounter( counter+1); 
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
  
  const products= [
    {title:'onion', id: 1},
    {title:'fruit', id: 2},
    {title:'Grapes', id: 3},
    {title:'mangoes', id: 4},
  ]
  

  

  return (
    <div className="App">
    
       
        <h1 className="header">
          Welcome to react practice
          
        </h1>
        <MyButton count={counter} onClick = {clicked}/>
        <MyButton count={counter} onClick = {clicked} />
       <h1>{User.name}</h1>
       <h1>{User.reg}</h1>

       <img className="avatar"
       src={name.imageUrl} alt={'photo of user '+name.name3} style={{width:name.imageSize, height:name.imageSize}}/>
       <ul>

        {products.map(product => 
          <li key={product.id}>
            {product.title}
          </li>
        )}
       </ul>
       
    </div>
  );
}

export default App;
