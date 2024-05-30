import { createContext, useState, useEffect } from "react";
// import { peopleList } from "../utils";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [peopleList, setPeopleList] = useState([]);
  const [personData, setPersonData] = useState();

  console.log(peopleList, "data ");
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
        setPeopleList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [encodedCred]);

  return (
    <DataContext.Provider value={{ peopleList, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
