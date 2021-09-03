import Banner from "../components/Banner/Banner"
import CategorySection from "../components/CategorySection/CategorySection"
import Header from "../components/Header/Header"

const Home = () => {
    return (
      <>
        <Header />
        <div className="banner">
          <Banner />
        </div>
        <CategorySection />
      </>
    );
  };
  
  export default Home;