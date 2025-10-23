// src/context/JobsContext.js
import React, { createContext, useState } from "react";

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    if (!job.title || !job.description) return;

    const newJob = {
      id: Date.now(),
      title: job.title,
      company: job.company || "Entreprise inconnue",
      location: job.location || "Lieu non spécifié",
      type: job.type || "CDI",
      salary: job.salary || "Non spécifié",
      description: job.description,
    };

    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const removeJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, removeJob }}>
      {children}
    </JobsContext.Provider>
  );
};
export default JobsProvider;