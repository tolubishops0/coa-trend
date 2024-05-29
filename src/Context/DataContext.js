import { createContext, useState, useEffect } from "react";
// import { peopleData } from "../utils";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const isLoading = false;
  const [isLoading, setIsLoading] = useState(false);
  const [peopleData, setPeopleData] = useState([]);

  console.log(peopleData, "data ");
  const userName = "coalition";
  const passWord = "skills-test";
  const encodedCred = btoa(`${userName}:${passWord}`);
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Basic ${encodedCred}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw new Error("Please check your internet connection");
        }
        return response?.json();
      })
      .then((data) => {
        setPeopleData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [encodedCred]);

  return (
    <DataContext.Provider value={{ peopleData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
