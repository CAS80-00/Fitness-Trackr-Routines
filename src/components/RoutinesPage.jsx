import React, { useState, useEffect } from "react";
import { fetchAllRoutines, createRoutine } from "../api";

export default function RoutinesPage({ token, setSelectedRoutineId }) {
  const [routines, setRoutines] = useState([]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  const getRoutines = async () => {
    const allRoutines = await fetchAllRoutines();
    setRoutines(allRoutines);
  };
  useEffect(() => {
    getRoutines();
  }, []);
  const handleCreateRoutine = async (e) => {
    e.preventDefault();
    try {
      const result = await createRoutine(name, goal, token);
      if (result.error) {
        setError(result.message);
      } else {
        setName("");
        setGoal("");
        getRoutines(); //to refresh teh list
      }
    } catch (error) {
      setError("Fail to create routine.");
    }
  };
  return (
    <div className="routine-container">
      <h2>Routines</h2>
      {token && (
        <form onSubmit={handleCreateRoutine} className="create-routine-form">
          <h3>Add a new Routine, now!</h3>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Routine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>
      )}
      <ul className="routine-list">
        {routines.map((routine) => (
          <li key={routine.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevents the browser from jumping to the top of the page
                setSelectedRoutineId(routine.id);
              }}
              className="routine-link"
            >
              {routine.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
