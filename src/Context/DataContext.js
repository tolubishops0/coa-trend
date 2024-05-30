import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [peopleList, setPeopleList] = useState([]);
  const [personData, setPersonData] = useState();

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
          toast("Please check your internet connection");
        }
        return response?.json();
      })
      .then((data) => {
        setPeopleList(data);
        setIsLoading(false);
        const activeName = data?.find(
          (person) => person.name === "Jessica Taylor"
        );
        setPersonData(activeName);
      })
      .catch((error) => {
        toast(error.message);
        setIsLoading(false);
      });
  }, [encodedCred]);

  return (
    <DataContext.Provider value={{ peopleList, personData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
