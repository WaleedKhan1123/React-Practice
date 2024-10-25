const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}




//  const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];

// function List(props){

//   return(
//     <ul>
//     {props.lis.map(reci =>
//      <li> {reci}</li>
//     )} </ul>  
//   )
// }
// export default function RecipeList() {
  
//   const list = recipes.map(recip => {
//    return( <div key={recip.id}>
//        <h1>{recip.id}</h1>
//          <List lis= {recip.ingredients}/>
//     </div>)
//   })
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {list}
//     </div>
//   );
// }



//  const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];

// function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }

// export default function List() {
//   const chemist  = people.filter(people => people.profession==='chemist')
//   const other  = people.filter(people => people.profession!=='chemist')
//   const listchemist = chemist.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   const everyOne = other.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Chemist</h1>
//       <ul>{listchemist}</ul>
//       <h1>EveryOne Else</h1>
//       <ul>{everyOne}</ul>
//     </article>
//   );
// }










// const people = [{
// id: 0,
// name : 'Creola Katherine Johnson: mathematician'
// },
// {
// id : 1,
// name : 'Mario José Molina-Pasquel Henríquez: chemist',
// },
// {
// id : 2,
// name: 'Mohammad Abdus Salam: physicist',
// },
// {
// id : 3,
// name : 'Percy Lavon Julian: chemist',
// }
    

//   ];

  
  
// function List() {
//     const listItems = people.map(person => 
//     <li key={person.id}>{person.name}</li>    
//     )
//     return ( <>
//     <h1>{listItems}</h1>
//     </> );
// }

// export default List;