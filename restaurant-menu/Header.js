const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>order quantity : {number}</h2>
      <h2>cost: {number ? `${number * 10} pln` : "no product no cost"}</h2>
    </header>
  );
};
