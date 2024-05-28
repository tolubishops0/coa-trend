import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const userName = "coalition";
  const passWord = "skills-test";
  const encodeCred = btoa(`${userName}:${passWord}`);
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  console.log(data, "data");
  console.log(isLoading, "isloading");

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Basic ${encodeCred}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-bgColor h-[100vh]">
      <div className="w-[90%] mx-auto ">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
