import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Waseem Khan",
    age: 22,
  };

  let arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-300 text-black-200  p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <div className="flex justify-center gap-6 flex-wrap">
        <Card username="Waseem" btnText="Click me" />
        <Card username="Waseem Khan" btnText="Visit me" />
      </div>
    </>
  );
}

export default App;
