import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
