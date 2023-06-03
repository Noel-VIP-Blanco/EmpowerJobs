import React, { useState } from "react";
import "./styles/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobCard from "./JobCard";

type IMyCard = {
  listOfJobs: any[];
};

const MyCard: React.FC<IMyCard> = ({ listOfJobs }) => {
  return (
    <>
      {listOfJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </>
  );
};

export default MyCard;
