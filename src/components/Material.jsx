import Name from "./Name";

const Material = (props) => {
  console.log(props);
  const { name, img, comment, price } = props;
  return (
    <div className="dentweb">
      <Name name={name} />
      <img className="imgs" src={img} alt="Aerator" />
      <p>{comment}</p>
      <h3>{price}</h3>
    </div>
  );
};
export default Material;
