
function Drink({ name }) {
    let plant,Caffeine,age;
    if(name==='tea'){

        plant='leaf';
        Caffeine = '15–70 mg/cup';
        age = '4,000+ years'
    }

    else{
        plant='bean';
        Caffeine = '80–185 mg/cup';
        age = '1,000+ years'

    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          
          <dt>Part of plant</dt>
          <dd>{plant}</dd>
          <dt>Caffeine content</dt>
          <dd>{Caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  





// function Item({ name, importance }) {
//     return (
//       <li className="item">
//         {name} {importance >0 && <i>(importance: {importance}) </i>}
//       </li>
//     );
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             importance={9} 
//             name="Space suit" 
//           />
//           <Item 
//             importance={0} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             importance={6} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }
  










// function Item({ name, isPacked }) {
//     return (
//       <li className="item">
//          {isPacked ?name +'✅': name+ '❌'}

//       </li>
//     );
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }
  