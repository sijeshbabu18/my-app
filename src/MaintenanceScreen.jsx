import "./MaintenanceScreen.css";
import errorBackgroundLogo from "./assets/error_background_logo.png";

const MaintenanceScreen = () => {
  return (
    <div className="container">
      <div className="screen-content">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/Aadhaar_Logo.svg`}
          alt="Aadhaar logo"
        />
        <h1 className="title">Maintenance Screen</h1>
        <p className="subtitle">This is a simple maintenance screen.</p>
      </div>

      <img
        className="background-logo"
        src={errorBackgroundLogo}
        alt=""
        aria-hidden="true"
      />

      {/* <div className="bottomcard">
        <div className="bottomcarditem">
          <p>This is an item in the bottom card.</p>
        </div>
      </div> */}
    </div>
  );
};

export default MaintenanceScreen;
