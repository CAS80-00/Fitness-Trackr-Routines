# Fitness Intro

## Navigating between different pages

1. The app starts on the "activities" page.
2. The four possible pages of App are activities, register, login, and 404.
3. `<Layout>` allows all pages in the app to share the same `<Navbar>`.
4. `<Navbar>` navigates users to different pages via `setPage`, which changes the page
   provided from `PageContext`.
5. `<Navbar>` is getting the token via the `useAuth` hook, which is exported from
   `AuthContext`.
6. If the user is logged in, `<Navbar>` renders a link to log out.
7. If the user is not logged in, `<Navbar>` renders links to register and log in.

## Handle user authentication

8. `AuthContext` keeps a token in state and provides the token as well as functions to
   register, log in, or log out.
9. `register` makes a request to `POST /users/register`.
10. If the request is successful, the token in state is updated using the response from
    the API.
11. They are essentially the same except `login` makes a request to `POST /users/login`
    instead.
12. When a user logs out, the token is removed from state.

13. The user is redirected to the "activities" page after they successfully register.
14. The user is not redirected if there is an error; instead, the error message is rendered
    onto the page.
15. They are essentially the same except for slight differences in text, and they call the
    corresponding `register` or `login` function.

## Handle API communication

16. The `data` state variable stores the response of querying the API.
17. `Loading` represents whether we are still waiting to get the response back from the
    API. `Error` starts as null, but is set if something goes wrong with the API request.
18. In the `finally` block, `loading` is set to `false`.
19. The `useEffect` runs only once because its dependency is an empty array. It will call
    two functions: `provideTag` and `query`.
20. `provideTag` and `request` are both coming from the `useApi` hook, which is imported
    from `ApiContext`.
21. The `useQuery` hook returns three state variables: the data, whether the request is loading,
    and the error if there was one.
22. ***

    1. `useMutation` additionally takes a `method`. It also takes `tagsToInvalidate`
       instead of `tag`.
    2. The `request` involves setting the `method` and sending a `body`, but is otherwise
       the same.
    3. `useMutation` returns almost the same thing as `useQuery`, but rather than making
       the API call automatically via `useEffect`, it returns a `mutate` function
       which will request the API when it is called.

23. `ApiContext` uses the token from `AuthContext` to set the "Authorization" header if
    the token exists.
24. `request` will check if the content type of the response is JSON, and will only
    parse the response as JSON if so.
25. If the API call succeeds, then `request` will return either the parsed JSON data or
    `undefined`. If the API call fails, then nothing will be returned; instead, `request`
    will throw an error.
26. Defining `request` in `ApiContext` allows `useQuery` and `useMutation` to share the
    logic around making a `fetch` call and parsing the response. It also allows them both
    to "automatically" use the same token from `AuthContext` in the request headers
    without needing to manually repeat that logic.

27. The initial value of `tags` is an empty object.
28. `useQuery` provides two things: a tag and the defined `query` function.
29. `provideTag` adds an entry into the `tags` object where the `tag` is the key, and the
    `query` function is the value.
30. `useMutation` passes an array of `tagsToInvalidate` as the argument into
    `invalidateTags`.
31. `invalidateTags` will loop through all of the tags in `tagsToInvalidate` and try to
    find the corresponding query function. If found, it will call that query function,
    which will make a new request to the API and update the state in `useQuery` accordingly.
