import { useState } from "react";
import { createActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

/** Form for a user to create a new activity with a name and description. */
export default function ActivityForm({ syncActivities }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryCreateActivity = async (formData) => {
    setError(null);

    const name = formData.get("name");
    const description = formData.get("description");

    try {
      await createActivity(token, { name, description });
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Add a new activity</h2>
      <form action={tryCreateActivity}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>Add activity</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
