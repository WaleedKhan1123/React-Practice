export default function Toolbar() {
  return (
    <Toolbars
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbars({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}


// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div> 
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }


// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }



// function ResToEvents() {
//     // Regular function

//   // Arrow function
//   const greet =function greet(name) {
//     console.log("My name is jeff")
//   }
   
//   function recursion(num){

//     if (num===1){
//       return 1
//     }
//     return num*recursion(num-1);
//   }
  
// //   (name) => `Hello, ${name}`;
  
//     return (<div>
//         <button onClick={greet}>
//       I don't do anything
//     </button>
//     <br/>
//     <br/>
//     <br/>
//     {
//       recursion(21)
//     }
//     </div>  );
// }

// export default ResToEvents;