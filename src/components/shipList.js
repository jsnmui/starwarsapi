import Ships from "./StarShipCard";

const ShipList = (props) => {
  const { ships } = props;
  return (
    <div className ="cards">
       

      {ships.results.map((item) => (
        <Ships item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShipList;
