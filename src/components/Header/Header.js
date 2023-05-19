import Logo from "../../Icons/Logo";
import profilePic from "../../images/profilePic.webp";
import "./Header.css";

function Header() {
  return (
    <div className="HeaderContainer d-flex justify-content-between align-items-center border-bottom">
      <div className="redColor fs-4 fw-bold">
        <Logo color="rgb(255, 56, 92)" height={28} width={28} margin="mx-2" />
        airbnb
      </div>
      <div className="d-flex">
        <div className="mx-2">Stays</div>
        <div className="mx-2">Experiences</div>
        <div className="mx-2">Online Experiences</div>
      </div>
      <div>
        <img
          src={profilePic}
          width={40}
          height={40}
          className="rounded-circle profilePic"
        />
      </div>
    </div>
  );
}

export default Header;
