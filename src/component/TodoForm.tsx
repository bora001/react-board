import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoList, TodoType } from "../store/store";
import { notification } from "antd";

type todoFormType = {
  modalClose: () => void;
};
function TodoForm({ modalClose }: todoFormType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoType>();

  const todolist = useRecoilValue<TodoType[]>(todoList);
  const setTodo = useSetRecoilState<TodoType[]>(todoList);

  const resultMsg = () => {
    notification.success({
      message: `New Todo updated! `,
      placement: "top",
    });
  };

  const onSubmit = handleSubmit((data) => {
    data.id = todolist.length;
    setTodo([...todolist, data]);
    modalClose();
    resultMsg();
  });

  return (
    <div style={{ padding: "15px", backgroundColor: "#fff" }}>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title</label>
        <input id="title" {...register("title", { required: true })} />
        {errors.title && <p>title is required.</p>}
        <label htmlFor="desc">Description</label>
        <input id="desc" {...register("desc", { required: true })} />
        {errors.desc && <p>Description is required.</p>}
        <label htmlFor="period">Period</label>
        <select id="period" {...register("period", { required: true })}>
          ,<option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
        <input type="submit" />
      </form>
      <button style={{ cursor: "pointer " }} onClick={modalClose}>
        close
      </button>
    </div>
  );
}

export default TodoForm;
