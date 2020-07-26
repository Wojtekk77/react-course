const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <>
      <h1>Your order</h1>
      <ul>{items}</ul>
    </>
  );
};
