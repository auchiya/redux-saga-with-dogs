import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getDogsFetch } from "./dogState";

function App() {
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("[appJs] dispatch");
    dispatch(getDogsFetch());
  }, [dispatch]);

  console.log(dogs);

  return (
    <div className="App">
      <div>
        <h1>Redux saga with dogs</h1>
      </div>
      <div>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <div>
              <img
                src={dog.image.url}
                alt={dog.name}
                width="200"
                height="200"
              />
            </div>
            <div>
              <h5>{dog.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
