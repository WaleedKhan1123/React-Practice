function ResToEvents() {
    // Regular function

  // Arrow function
  const greet =function greet(name) {
    console.log("My name is jeff")
  }
   
  function recursion(num){

    if (num===1){
      return 1
    }
    return num*recursion(num-1);
  }
  
//   (name) => `Hello, ${name}`;
  
    return (<div>
        <button onClick={greet}>
      I don't do anything
    </button>
    <br/>
    <br/>
    <br/>
    {
      recursion(21)
    }
    </div>  );
}

export default ResToEvents;