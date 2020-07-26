const Item = (props) => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
      //   style={props.active ? { fontWeight: "bold" } : { color: "grey" }}
    >
      {props.name}
    </li>
  );
};
