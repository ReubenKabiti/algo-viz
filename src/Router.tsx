import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "./util/constants";
import HomePage from "./componets/pages/Home/HomePage";
import ListsLanding from "./componets/pages/Lists/ListsLanding";
import NavBar from "./componets/reusable/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.lists} element={<ListsLanding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
