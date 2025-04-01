import React, { use, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`htp://localhost:3001/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2>My Posted Jobs : {jobs.length} </h2>
    </div>
  );
};

export default MyPostedJobs;
