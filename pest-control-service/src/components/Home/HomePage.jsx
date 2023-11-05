import Services from "../Pages/Services/Services";
import Banner from "./Banner";
import Banner1 from "./Banner1";

const Homepage = () => {
  return (
    <div>
      <Banner1></Banner1>
      <Banner></Banner>
      {/* <PopularSection></PopularSection>
       */}
      <Services></Services>
    </div>
  );
};

export default Homepage;
