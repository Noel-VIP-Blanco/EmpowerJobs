import MyCard from "../../components/MyCard";
import ListOfApplicants from "../../components/list-of-applicants";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const ListOfJobs = () => {
  const [listOfJobs, setListOfJobs] = useState([]);
  const [loginUser, setLoginUser] = useState<{
    userName: string;
    skills: string[];
    disability: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loginUser");
    if (storedUser !== null) {
      const parsedUser = JSON.parse(storedUser);
      setLoginUser(parsedUser);
    }
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/list-of-jobs");
        setListOfJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pageContainer">
      {!loginUser || loginUser.userName !== "admin" ? (
        <MyCard listOfJobs={listOfJobs} loginUser={loginUser} />
      ) : (
        <ListOfApplicants />
      )}
    </div>
  );
};

export default ListOfJobs;
