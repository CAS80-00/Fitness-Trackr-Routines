const BASE_URL = import.meta.env.VITE_API;
//headers auth token
const makeHeaders = (token) => {
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};
//1- grabbing all routines
export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching routines:", error);
    throw error;
  }
};
//2- grab all activities
export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};
//3- add a routine w/auth
export const createRoutine = async (name, goal, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ name, goal }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding a routine:", error);
    throw error;
  }
};
//4-delete a routine w/auth
export const deleteRoutine = async (routineId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: makeHeaders(token),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting routine:", error);
    throw error;
  }
};
//5- add a set/routine w/auth
export const attachActivityToRoutine = async (
  routineId,
  activityId,
  count,
  token,
) => {
  try {
    const response = await fetch(`${BASE_URL}/sets`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ routineId, activityId, count: Number(count) }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error attaching activity:", error);
    throw error;
  }
};
//6- deletinga  set/routine w/auth
export const deleteSet = async (setId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/sets/${setId}`, {
      method: "DELETE",
      headers: makeHeaders(token),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting set:", error);
    throw error;
  }
};
