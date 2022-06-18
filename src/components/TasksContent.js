import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

export default function TasksContent() {
  const todoList = useSelector(state => state.todo.todoList);
  const SortedTodoList = [...todoList];
  // Sorted Todo by Date(Time) 
  SortedTodoList.sort((a,b) => {
    const A_todo  = new Date(a.time),
          B_todo  = new Date(b.time);
    return A_todo - B_todo;    
    
  });
  return (
    <section>
      {SortedTodoList && SortedTodoList.length > 0 ? (
        SortedTodoList.map(todo=> {
          return (<TodoItem key={todo.id} todo={todo}/>)
        })
      ): 'Not Found!'}      
    </section>
  )
}
