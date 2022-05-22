function App() {
   // This line uses destructuring. useState() is a function of React.
   let [todos, setTodos] = React.useState([
      // ToDos list.
      {
         text: 'Learn React',
         isCompleted: false,
      },
      {
         text: 'Meet Friend For Lunch',
         isCompleted: false,
      },
      {
         text: 'Build ToDo App',
         isCompleted: false,
      }        
   ]);

   let addTodo = (value) => {
      let newTodos = [...todos, {text: value, isCompleted: false}];
      setTodos(newTodos);
   }

   // Function that defines what happens when a user deletes a ToDo item.
   let removeTodo = (index) => {
      let updatedList = [...todos];
      updatedList.splice(index, 1);
      setTodos(updatedList);
   }

   // Map out each element of the todos array and return a div with the index and element values.
   // User can add list items using the input on the form.
   return(
      <div className="container">
         <div className="app">
            <div className="todo-list">
               <TodoForm addTodo={addTodo}/>
               {todos.map((element, index, array) => <Todo key={index} index={index} element={element} remove={removeTodo}/>)}
            </div>
         </div>
      </div>
   );
}

// Previous Version:
// ReactDOM.render(<App/>, document.getElementById('root'));
// Current Version:
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
