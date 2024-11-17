import pizzaData from "./assets/data";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  console.log(pizzaData);

  return (
    <div className="bg-yellow-100 min-w-full min-h-[100vh] flex flex-col justify-start items-center">
      <Header />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-7xl text-yellow-800">Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-block">
        <hr className="border-black border-[1.5px]" />
        <h2 className="text-2xl font-bold">Our Menu</h2>
        <hr className="border-black border-[1.5px]" />
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-screen-lg my-10">
        {pizzaData.map((pizza) => (
          <ListItems pizzaObj={pizza} key={pizza.name}/>
        ))}
      </div>
    </div>
  );
}

function ListItems({pizzaObj}) {
  return (
    <div className="flex gap-5 w-80">
      <img className="w-28" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3 className="text-2xl font-medium text-yellow-600">{pizzaObj.name}</h3>
        <p className="text-slate-500">{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </div>
  );
}



// Define PropTypes for ListItems
ListItems.propTypes = {
  pizzaObj: PropTypes.shape({
    name: PropTypes.string.isRequired,         // pizza name should be a string and required
    ingredients: PropTypes.string.isRequired,  // ingredients should be a string and required
    price: PropTypes.number.isRequired,        // price should be a number and required
    photoName: PropTypes.string.isRequired     // photoName should be a string and required
  }).isRequired, // pizzaObj itself is required
};

export default App;
