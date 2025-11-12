import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../redux/TodoSlice";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
const Todolist = () => {
  const [newTodo, setnewTodo] = useState();
  const Dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  console.log(newTodo);

  const handleAddtodo = () => {
    if (newTodo && newTodo.trim() !== "") {
      Dispatch(addTodo({ id: Date.now(), text: newTodo }));
      enqueueSnackbar("new todo add!", {
        newTodo,
        variant: "success",
      });
      setnewTodo("");
    } else {
      enqueueSnackbar("Please enter a todo before adding", {
        variant: "info",
      });
    }
  };

  //   clear todo
  const handlecleartodo = () => {
    Dispatch(clearTodo());
    enqueueSnackbar("All todo clear", {
      variant: "",
    });
  };

  return (
    <>
      <h1 className="py-4 text-center text-4xl capitalize font-semibold">
        todo list
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex bg-blue-200 items-center border-1 rounded-4xl w-[50%] justify-between">
          <input
            type="text"
            placeholder="Add a new Todo"
            className="px-5 py-4 w-[70%] outline-none rounded-2xl placeholder:italic font-medium text-black"
            onChange={(e) => setnewTodo(e.target.value)}
          />
          <React.Fragment>
            <Button
              onClick={handleAddtodo}
              className="py-4 bg-blue-400 w-[30%] px-10 outline-none rounded-4xl cursor-pointer"
            >
              Add list
            </Button>
          </React.Fragment>
        </div>
      </div>
      {todos.map((todo) => (
        <div
          className="flex justify-center items-center w-[100%]"
          key={todos.id}
        >
          <div
            className="w-[45%] bg-gray-100 flex justify-between py-3 my-2"
            key={todo.id}
          >
            <li className="list-none px-5 font-medium">{todo.text}</li>
            <div className="px-5">
              <RiDeleteBin5Fill
                className="text-2xl text-red-600 cursor-pointer"
                onClick={() => {
                  Dispatch(deleteTodo(todo.id));
                }}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="w-full py-4 flex justify-center">
        <button
          className="border-1 py-1 px-5 rounded-2xl bg-green-500 text-white cursor-pointer"
          onClick={handlecleartodo}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Todolist;
