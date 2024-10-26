function ResToEvents() {
    // Regular function

  // Arrow function
  const greet =function greet(name) {
    return `Hello, ${name}`;
  }
   
  
  
//   (name) => `Hello, ${name}`;
  
    return (<div>
        <button onClick={function handleclick() {
        console.log("function called")
    }}>
      I don't do anything
    </button>
    {greet}
    </div>  );
}

export default ResToEvents;