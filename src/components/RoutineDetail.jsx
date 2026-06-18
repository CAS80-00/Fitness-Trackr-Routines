import React, { useState, useEffect } from "react";
import {
  fetchAllActivities,
  fetchAllRoutines,
  deleteRoutine,
  attachActivityToRoutine,
  deleteSet,
} from "../api";

export default function RoutineDetail({ routineId, token, onBack }) {
  const [routine, setRoutine] = useState(null);
  const [activities, setActivities] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState("");
  const [count, setCount] = useState("");
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const allRoutines = await fetchAllRoutines();
      const currentRoutine = allRoutines.find(
        (r) => r.id === Number(routineId) || r.routineId === Number(routineId),
      );
      setRoutine(currentRoutine);

      if (token) {
        const allActivities = await fetchAllActivities();
        setActivities(allActivities);
      }
    } catch (error) {
      setError("Unable to load routine details!");
    }
  };
  useEffect(() => {
    loadData();
  }, [routineId]);

  const handleDeleteRoutine = async () => {
    try {
      const res = await deleteRoutine(routineId, token);
      if (res.error) {
        setError(res.message);
      } else {
        onBack();
      }
    } catch (error) {
      setError("Unable to delete routine!");
    }
  };
  const handleAddSet = async (e) => {
    e.preventDefault();
    try {
      const res = await attachActivityToRoutine(
        routineId,
        selectedActivityId,
        count,
        token,
      );
      if (res.error) {
        setError(res.message);
      } else {
        setCount("");
        loadData();
      }
    } catch (error) {
      setError("Unable to add set!");
    }
  };
  const handleDeleteSet = async (setId) => {
    try {
      const res = await deleteSet(setId, token);
      if (res.error) {
        setError(res.message);
      } else {
        loadData();
      }
    } catch (error) {
      setError("Unable to delete set!");
    }
  };
  if (!routine) return <p> Loading routine details... stay put</p>;

  return (
    <div className="routine-detail-container">
      <button onClick={onBack}>Back to All Routines</button>
      {error && <p className="error-banner">{error}</p>}
      <h2>{routine.name}</h2>
      <p>
        <strong> Goal:</strong>
        {routine.goal}
      </p>
      <p>
        <strong>Builder:</strong>
        {routine.creatorName}
      </p>
      {token && (
        <button className="delete-btn" onClick={handleDeleteRoutine}>
          Delete Routine
        </button>
      )}

      <h3>Sets / Activities</h3>
      {routine.activities && routine.activities.length > 0 ? (
        <ul>
          {routine.activities.map((act) => (
            <li key={act.routineActivityId}>
              <strong>{act.name}</strong> - {act.description} ({act.count} reps
              )
              {token && (
                <button onClick={() => handleDeleteSet(act.routineActivityId)}>
                  X
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>C'mon! add a set! Encourage yourself!</p>
      )}
      {token && (
        <form onSubmit={handleAddSet} className="add-set-form">
          <h4> Add a set to this routine!</h4>
          <label> Select Activity:</label>
          <select
            value={selectedActivityId}
            onChange={(e) => setSelectedActivityId(e.target.value)}
            required
          >
            <option value="">-- Choose Activity --</option>
            {activities.map((act) => (
              <option key={act.id} value={act.id}>
                {act.name}
              </option>
            ))}
          </select>

          <label>Reps / Count:</label>
          <input
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />

          <button type="submit">Add set</button>
        </form>
      )}
    </div>
  );
}
