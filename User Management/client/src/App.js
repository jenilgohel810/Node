import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index/index.js";
import UserPage from "./pages/User/user.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<IndexPage />}></Route>
        <Route path={"/user"} element={<UserPage />}></Route>
        <Route path={"/user/:id"} element={<IndexPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
