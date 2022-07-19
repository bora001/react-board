import { atom } from "recoil";

export type TodoType = {
  id: number;
  title: string;
  desc: string;
  period: string;
};

export const todoList = atom<TodoType[]>({
  key: "todolist",
  default: [],
});

export const dragItem = atom<TodoType>({
  key: "dragItem",
  default: { id: 0, title: "", desc: "", period: "" },
});
