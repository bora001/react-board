import { atom } from "recoil";

export type TodoType = {
  id: number;
  title: string;
  desc: string;
  period: string;
};

export const todoList = atom<TodoType[]>({
  key: "todolist",
  default: [
    { id: 0, title: "title1", desc: "desc1", period: "week" },
    { id: 1, title: "title1", desc: "desc1", period: "week" },
    { id: 2, title: "title1", desc: "desc1", period: "today" },
    { id: 3, title: "title1", desc: "desc1", period: "today" },
    { id: 4, title: "title1", desc: "desc1", period: "today" },
    { id: 5, title: "title1", desc: "desc1", period: "year" },
    { id: 6, title: "title1", desc: "desc1", period: "year" },
    { id: 7, title: "title1", desc: "desc1", period: "month" },
  ],
});
