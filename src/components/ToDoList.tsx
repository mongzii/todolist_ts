import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from "recoil";

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}
interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // const onValid = (data: IForm) => {
  //   if (data.password1 !== data.password2) {
  //     setError("password2", { message: "Password is not same" });
  //   }
  //   setError("extraError", { message: "Server offline." });
  // };
  const handleValid = ({ toDo }: IForm) => {
    //  console.log("add to do", data.toDo);
    setToDos(oldToDos => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "write todo",
          })}
          placeholder="write todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
