import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Home from "../../pages/Home/home";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contacts/Contact";
import Resume from "../../pages/Resume/resume";
import NoPage from "../../pages/NoPage";
const Nav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Nav;
