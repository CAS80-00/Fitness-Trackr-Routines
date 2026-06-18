# Fitness Trackr Refactor

The starter code for this workshop is [the solution code to the previous workshop.](https://github.com/FullstackAcademy/fitness-trackr-solution)
Your main task is to refactor this code to use React Router.

## Instructions

1. Delete `PageContext.jsx`. This will cause a lot of errors, but you can treat those
   errors like a checklist of things to fix!
2. Install `react-router` into the project.
3. Wrap `<App>` in `<BrowserRouter>`.
4. Refactor `<App>` to use a layout route and define the appropriate routes within.
5. Refactor `<Layout>`, `<Navbar>`, `<Register>`, and `<Login>` to use the appropriate
   components and hooks from `react-router` instead of `PageContext`.
6. Build a new component to use as the page for details about a single activity.
   - Each activity in `<ActivityList>` should link to its own page.
   - On that page, the activity's name, description, and creator name should be displayed.
   - This information about the activity should be fetched from the API.
   - _Hint:_ define the activity ID as a dynamic segment so the component can grab the ID
     with `useParams`!
7. Move the "delete" button from `<ActivityListItem>` into your new page so that logged-in
   users now need to visit the page for a single specific activity in order to delete it.
8. After a successful deletion, the user should be automatically redirected back
   to the list of activities.

## Submission

Once you have completed all the steps above and you have tested your app to make sure that
everyone works, submit your GitHub repository link for the **Fitness Trackr Refactor** workshop!

Then, if you have extra time, you may continue to
[the next section: Routines and Sets](/docs/02-routines.md).
