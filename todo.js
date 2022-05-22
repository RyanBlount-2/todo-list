function Todo({index, element, remove}) {
   function handle() {
      remove(index);
   }
   return <div className="todo" onClick={handle}>{element.text} ( <b>x</b> )</div>;
}
