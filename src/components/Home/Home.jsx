import Slider from "./Slider";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Work from "./Work";
import Team from "./Team";
import Client from "./Client";
import Form from './Form'
import './Style.css';

const Home = () => {
    return (
        <>
            <Slider />
            <AboutUs />
            <Service />
            <Work />
            <Team />
            <Client />
            <Form />
        </>
    )
}

export default Home