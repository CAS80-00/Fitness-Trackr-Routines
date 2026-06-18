import React, { useState } from "react";
import { usePage } from "./layout/PageContext";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import RoutinesPage from "./components/RoutinesPage.jsx";
import RoutineDetail from "./components/RoutineDetail.jsx";
import Error404 from "./Error404.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  const { page } = usePage();
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);
  const token = localStorage.getItem("token") || "";

  if (page === "register") return <Register />;
  if (page === "login") return <Login />;
  if (page === "activities") return <ActivitiesPage />;

  //handling routine page
  if (page === "routines") {
    if (selectedRoutineId) {
      return (
        <RoutineDetail
          routineId={selectedRoutineId}
          token={token}
          onBack={() => setSelectedRoutineId(null)}
        />
      );
    }
    return (
      <RoutinesPage token={token} setSelectedRoutineId={setSelectedRoutineId} />
    );
  }

  return <Error404 />;
}
