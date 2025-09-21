// src/context/JobsContext.js
import React, { createContext, useState } from "react";

// Créer le contexte
export const JobsContext = createContext();

// Provider pour encapsuler l'application
export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Ajouter une offre d'emploi
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

  // Supprimer une offre
  const removeJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, removeJob }}>
      {children}
    </JobsContext.Provider>
  );
};

// On recommande **export par nom uniquement**
// export default JobsProvider;  <-- inutile
