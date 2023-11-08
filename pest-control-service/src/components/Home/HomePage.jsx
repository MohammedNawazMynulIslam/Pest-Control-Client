import Services from "../Pages/Services/Services";
import Artical from "./Artical";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import TESTIMONIALS from "./TESTIMONIALS";
import { Helmet } from "react-helmet";
const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Pest Control | Home</title>
      </Helmet>
      <div>
        <Banner1></Banner1>
        <Banner></Banner>
        <Services></Services>
        <TESTIMONIALS></TESTIMONIALS>
        <Artical></Artical>
      </div>
    </>
  );
};

export default Homepage;
