import picture from "../../assets/404_image.jpg";
import "./NoPage.scss";

function NoPage() {
  return (
    <div className="no-page-container">
      <img src={picture} className="error-picture" alt="error robot" />
      <span className="picture-attribution">
        <a href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404&position=1&from_view=keyword&track=sph">
          Image by storyset on Freepik
        </a>
      </span>
      <p>Looks like this page doesn't exist</p>
    </div>
  );
}

export default NoPage;
