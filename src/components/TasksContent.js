import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

export default function TasksContent() {
  const todoList = useSelector(state => state.todo.todoList);
  const SortedTodoList = [...todoList];
  SortedTodoList.sort((a,b) => {
    new Date(b.time) - new Date(a.time)
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
