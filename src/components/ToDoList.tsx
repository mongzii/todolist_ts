import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map(toDo => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
