import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="bg-bgColor">
        <div className="w-[90%] lg:w-[98%] mx-auto ">
          <div>
            <NavBar />
          </div>
          <main>
            <Body />
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
