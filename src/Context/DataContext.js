import {  createContext } from "react";
import { peopleData } from "../utils";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const isLoading = false;
  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const userName = "coalition";
  // const passWord = "skills-test";
  // const encodedCred = btoa(`${userName}:${passWord}`);

  // const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  // useEffect(() => {
  // setIsLoading(true);
  // fetch(url, {
  //   mode: "no-cors",
  //   headers: {
  //     Authorization: `Basic ${encodedCred}`,
  //   },
  // })
  //   .then((response) => {
  //     setIsLoading(false);
  //     console.log(response);
  //     return response?.json();
  //   })
  //   .then((data) => {
  //     setData(data);
  //   })
  //   .catch((err) => console.log(err));
  // }, []);

  return (
    <DataContext.Provider value={{ peopleData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
