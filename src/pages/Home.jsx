import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import video from '../assets/videos/God did.mp4'

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Navbar activeTab="Home" />
      <div className="hero-video">
        <div className="video-placeholder">
        <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className='video-heading'>SAYF Collection</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;