import "./Header.css";
import Typed from "react-typed";
import Clock from "react-live-clock";

function Header() {
  return (
    <>      
      <div className="headerText">
        Single Page Application
      </div>
      <div className="time">
        <Clock format={"h:mm:ssa"} ticking={true} />
      </div>
    </>
  );
}

export default Header;
