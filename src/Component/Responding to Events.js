function ResToEvents() {
    function handleclick() {
        console.log("function called")
    }
    return (<div>
        <button onClick={handleclick}>
      I don't do anything
    </button>
    </div>  );
}

export default ResToEvents;