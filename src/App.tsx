import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Logout from "./pages/Logout";
import News from "./pages/News";
import Followers from "./pages/Followers";
import Explore from "./pages/Explore";
import Username from "./pages/[username]";
import Profile from "./pages/Profile";
import Layout from "./layout";

const BrowserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/news" element={<News />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/:username" element={<Username />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;
