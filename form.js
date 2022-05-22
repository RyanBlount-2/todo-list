function TodoForm({addTodo}) {
   // User added list items.
   let [value, setValue] = React.useState('');

   // Function that defines what happens when a user submits a value on the form. Note: value is coming from the user input. 
   let handleSubmit = (e) => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
   }
   return (
      <form onSubmit={handleSubmit}>
         <input type="text" className="input" value={value} placeholder="Add ToDo..." onChange={(e) => setValue(e.target.value)}/>
      </form>
   );
}
