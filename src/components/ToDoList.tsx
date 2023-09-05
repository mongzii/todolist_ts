import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState, categoryState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  // const selectorOutput = useRecoilValue(toDoSelector);
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  // console.log(category);
  return (
    // <>
    //   <h1>To Dos</h1>
    //   <hr />
    //   <CreateToDo />
    //   <h2>To Do</h2>
    //   <ul>
    //     {toDos.map(toDo => (
    //       <ToDo
    //         key={toDo.id}
    //         text={toDo.text}
    //         category={toDo.category}
    //         id={toDo.id}
    //       />
    //     ))}
    //   </ul>
    //   <hr />
    //   <h2>Doing</h2>
    //   <ul>
    //     {doing.map(toDo => (
    //       <ToDo
    //         key={toDo.id}
    //         text={toDo.text}
    //         category={toDo.category}
    //         id={toDo.id}
    //       />
    //     ))}
    //   </ul>
    //   <hr />
    //   <h2>Done</h2>
    //   <ul>
    //     {done.map(toDo => (
    //       <ToDo
    //         key={toDo.id}
    //         text={toDo.text}
    //         category={toDo.category}
    //         id={toDo.id}
    //       />
    //     ))}
    //   </ul>
    // </>

    <>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value="TO_DO">To Do</option>
          <option value="DOING">Doing</option>
          <option value="DONE">Done</option>
        </select>
      </form>
      <CreateToDo />
      {toDos?.map(toDo => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
}

export default ToDoList;
