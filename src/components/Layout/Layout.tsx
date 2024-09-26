import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer/Footer";
import Header from "../Sections/Header/Header/Header";
import "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
