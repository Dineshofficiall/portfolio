import { Route, Routes } from "react-router-dom";
import Navbar from "./view/screen/navbar/PortfolioNavbar";
import PortfolioPage from "./view/screen/mainPage/PortfolioPage";
import ProjectDetail from "./view/screen/ProjectDetail/ProjectDetail";
import Error from "./view/screen/404/Error";
import AllProject from "./view/screen/projects/AllProject";
import WebProject from "./view/screen/projects/WebProject";
import AndroidProject from "./view/screen/projects/AndroidProject";
import React from "react";
// import Footer from "./pages/footer/Footer"

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PortfolioPage />}>
            <Route path="" element={<AllProject />} />
            <Route path="webProject" element={<WebProject />} />
            <Route path="androidProject" element={<AndroidProject />} />
          </Route>
          <Route path="/project/details/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
