function Modal(props: { children: JSX.Element }) {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "rgba(8, 8, 8, 0.842)",
        zIndex: " 999999",
        overflow: "hidden",
      }}
    >
      {props.children}
    </div>
  );
}

export default Modal;
