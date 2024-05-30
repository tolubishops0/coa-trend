import "./App.css";
import Body from "./components/Body/Body";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Body />
    </DataProvider>
  );
}

export default App;
