import './touristPlaceInfo.css';
import AndhraPradeshInfo from '../../components/attractionPages/andhraPradeshInfo';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import BiharInfo from '../../components/attractionPages/BiharInfo';
import GoaInfo from '../../components/attractionPages/GoaInfo';
import Gujarat from '../../components/attractionPages/Gujarat';
import HimachalPradeshInfo from '../../components/attractionPages/HimachalPradeshInfo';
import Karnataka from '../../components/attractionPages/Karnataka';

const TouristPlaceInfo = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
        <AndhraPradeshInfo />
        <BiharInfo />
        <GoaInfo />
      </div>
    </div>
  );
};

export default TouristPlaceInfo;
