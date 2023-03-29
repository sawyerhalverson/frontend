
import photo from "./joellll.jpg";

// Using a landing page for the home page
import './LandingPage.css'; // import your CSS file

function LandingPage() {
  return (
    <header className="header-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={photo} alt="Joel" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="title">Joel Hilton's Film Collection</h1>
            <h3>Welcome to the site! This is all about Joel and his movie collection!</h3>
            <p>Made by Sawyer Halverson</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingPage;
