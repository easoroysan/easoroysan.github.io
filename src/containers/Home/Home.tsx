import picture from "../../assets/professionalPicture.jpg";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img
          src={picture}
          className="professional-picture"
          alt="Professional Picture of Roysan Easo"
        />
        <p>Front-End Web Developer</p>
      </header>
    </div>
  );
}

export default Home;
