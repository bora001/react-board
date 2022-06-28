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
