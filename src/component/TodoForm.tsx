type todoFormType = {
  modalClose: () => void;
};
function TodoForm({ modalClose }: todoFormType) {
  return (
    <div>
      TodoForm
      <button style={{ cursor: "pointer " }} onClick={modalClose}>
        close
      </button>
    </div>
  );
}

export default TodoForm;
