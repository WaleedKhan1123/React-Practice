const people = [{
id: 0,
name : 'Creola Katherine Johnson: mathematician'
},
{
id : 1,
name : 'Mario José Molina-Pasquel Henríquez: chemist',
},
{
id : 2,
name: 'Mohammad Abdus Salam: physicist',
},
{
id : 3,
name : 'Percy Lavon Julian: chemist',
}
    

  ];

  
  
function List() {
    const listItems = people.map(person => 
    <li key={person.id}>{person.name}</li>    
    )
    return ( <>
    <h1>{listItems}</h1>
    </> );
}

export default List;