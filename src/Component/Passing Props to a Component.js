// function getImageUrl(imageId, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       imageId +
//       size +
//       '.jpg'
//     );
//   }
//  function Profile(props){

//   return (
//   <section className="profile">
//   <h2>{props.name}</h2>
  
//   <img className={props.imgname} src={props.imgurl} alt={props.name}  width={70}
//           height={70}/>
//   <ul>
//   <b>Profession: </b> 
//   <li>
//   {props.Profession}
//   </li>
//   <li>
//   <b>Awards {props.awardsno}</b>
  
//   ({props.awardq})
//   </li>
//   <li>
//   <b>Discovered</b>
  
//   {props.discovered}
//   </li>
//   </ul>
//    </section>
//   )
// }
// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile name = 'Maria Skłodowska-Curie' imgname="avatar" Profession = 'physicist and chemist' awardsno = {4} awardq = 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal' discovered = 'polonium (chemical element)' imgurl = {getImageUrl('szV5sdG')}/>
//       <Profile name = 'Katsuko Saruhashi' imgname="avatar" Profession = 'geochemist' awardsno = {4} awardq = 'Miyake Prize for geochemistry, Tanaka Prize' discovered= 'polonium (chemical element)' imgurl = {getImageUrl('YfeOqp2')}/>
//     </div>
//   );
// }




function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
