# Fitness Trackr Routines

Let's build out the next major feature of the Fitness Trackr platform: routines!

A logged-in user can create a routine with a name and a goal. Once a routine is
created, they can add sets to the routine. A set is an activity with a count.

For example, Albert creates a "Chest Day" routine. His goal is "to beef up the Chest and
Triceps!". He then adds the "bench press" activity with a count of 3 and the "Push Ups"
activity with a count of 10 to his routine.

## Requirements

You can build the app however you'd like, as long as your submission meets the following
requirements. You are highly encouraged to reference previous solutions as well as [the
live demo](https://fsa-fitness-trackr-pro.netlify.app/)!

1. The user can navigate to a "Routines" page, on which is a list of names of
   all routines from the API.
2. If the user is logged in, they also see a form where they can create a new
   routine with a name and a goal.
3. A user can click on a routine in the list to navigate to a page with more
   details about that routine.
4. On the page with details about a single routine, the user sees the name of the
   routine, the goal, and the name of the user who created that routine.
5. On the page with details about a single routine, a logged-in user also sees a
   "delete" button that allows the user to delete the routine.
6. If the user encounters an error with deleting the routine, a corresponding error
   message is displayed.
7. On the page with details about a single routine, the user can see all sets associated
   with that routine.
8. If a routine has no sets, then a message is displayed encouraging the user to add a set
   to the routine.
9. If the user is logged in, on the page with details about a single routine, the user can
   submit a form to add a set to the routine.
10. The form to add a set has two main inputs: a dropdown where the user can select an
    activity, and a field where the user can input the number of reps.
11. The dropdown is populated by the activities from the API.
12. If the user encounters an error with submitting their set, a corresponding error
    message is displayed.
13. The list of sets associated with a routine automatically refreshes after the user
    successfully adds a new set to that routine.
14. If the user is logged in, next to each set is a "delete" button that allows
    the user to remove that set from the routine.

> [!TIP]
>
> Read the API documentation very carefully! What information do you need to build out the
> feature, and which endpoint gives you that information? Sometimes there might be more
> than one answer.

> [!TIP]
>
> If it feels like a component is getting too complex, you can always split it into
> multiple components and pass information through props! Keeping your files small and
> well-named will help you stay organized.

## Submission

Please submit the link to your public GitHub repository for the
**Fitness Trackr Routines** workshop!
