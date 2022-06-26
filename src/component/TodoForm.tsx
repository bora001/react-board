import { useForm } from "react-hook-form";

type todoFormType = {
  modalClose: () => void;
};
function TodoForm({ modalClose }: todoFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div style={{ padding: "15px", backgroundColor: "#fff" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title</label>
        <input id="title" {...register("title", { required: true })} />
        {errors.title && <p>title is required.</p>}
        <label htmlFor="desc">Description</label>
        <input id="desc" {...register("desc", { required: true })} />
        {errors.desc && <p>Description is required.</p>}
        <label htmlFor="period">Period</label>
        <select id="period">
          <option value="today">Today</option>
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
