import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Navbar />
      <div className="hero-video">
        <div className="video-placeholder">
          {/* Add your video tag here */}
          <h1>SAYF Collection</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;