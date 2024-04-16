import Slider from "./Slider";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Work from "./Work";
import Client from "./Client";
import './Style.css';

const Home = () => {
    return (
        <>
            <Slider />
            <AboutUs />
            <Service />
            <Work />
            <Client />
        </>
    )
}

export default Home