This repo shows how to manage state in React with Redux Toolkit, covering both simple reducers and async stuff using thunks.

What's Inside:

- A central global store using Redux Toolkit
- Sync and Async todo both made by Using Redux-Toolkit
- Simple reducers for updates that do what you expect
- Async actions using createAsyncThunk
- Typed hooks and a slice-based setup
- Examples showing how to dispatch actions, select data, and integrate with components

Tech Used:

- React
- React-Router
- Redux Toolkit
- React Redux
- Ant Design

Project Layout:

    src/
        store.js
      features/
        asyncSlice.js
        counterSlice.js
      pages/

How to Run:
Install dependencies:
npm install
Start the dev server:
npm run dev