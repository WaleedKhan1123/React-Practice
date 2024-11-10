import "./styles/style.css";
// import TodoList from "./Component/JavaScript in JSX with curly Braces";

// import Gallery from "./Component/Passing Props to a Component";
// import PackingList from "./Component/Conditional Rendering";
// import List from "./Component/rendering listl";
// import TeaSet from "./Component/keeping components pure";
// import Clock from "./Component/keeping components pure";
// import ResToEvents from "./Component/Responding to Events";
// import Toolbar from "./Component/Responding to Events";
// import FeedbackForm from "./Component/State A Component's Memory";
import TrafficLight from "./Component/State as a Snapshot";
export default function App(){

  return(<>
   <TrafficLight/>
    </>)
}








//JavaScript in JSX with Curly Braces


// export default function App(){

//   return(<>
//   <TodoList/>
//   </>)
// }




//practice for Writing Markup with JSX

// export default function Bio() {
//   return (
//     <>
//     <div className="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p className="summary">
//       You can find my thoughts here.
//       <br/>
//       <br/>
//       <b>
//         And <i>pictures</i></b> of scientists!
//     </p>
//     </>
//   );
// }




// practice for importing and exporting components


// import Gallery from "./Component/Gallery";
// import Profile from "./Component/Profile";
// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery/>
//     </div>
//   );
// }







// first app.js


// import { useState } from "react";
// import "./Component/TickTackToe"
// import Square from "./Component/TickTackToe";
// function MyButton({count ,onClick}) {
//   const [counter, setCounter] = useState(0)
//   function click(){
//     setCounter(counter+1)
//   }
//   return (
   
//     <button onClick={click} >
      
//       I'm a button 
//       {counter}
//     </button>
//   );
// }
// function App() {
//   const [counter, setCounter]= useState(0);
  
  
//   function clicked (){
//     setCounter( counter+1); 
//    }
 
//   const User= {
//    name: 'Waleed',
//    reg: 'SP21-BSE-006'
//   }
  
//   const name={
//     name3: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
//   } 
  
//   const products= [
//     {title:'onion', id: 1},
//     {title:'fruit', id: 2},
//     {title:'Grapes', id: 3},
//     {title:'mangoes', id: 4},
//   ]
  

  

//   return (
//     <div className="App">
    
       
//         <h1 className="header">
//           Welcome to react practice
          
//         </h1>
//         <MyButton count={counter} onClick = {clicked}/>
//         <MyButton count={counter} onClick = {clicked} />
//        <h1>{User.name}</h1>
//        <h1>{User.reg}</h1>

//        <img className="avatar"
//        src={name.imageUrl} alt={'photo of user '+name.name3} style={{width:name.imageSize, height:name.imageSize}}/>
//        <ul>

//         {products.map(product => 
//           <li key={product.id}>
//             {product.title}
//           </li>
//         )}
//        </ul>
//        <Square/>
//     </div>
//   );
// }

// export default App;
