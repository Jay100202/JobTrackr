import { useAppContext } from "../../context/appContext";
import NavLinks from "../NavLinks";
import Logo from "../Logo/Logo";
import Wrapper from "./BigSidebar.styles";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();

  // Define the styles for the heading
  const headingStyles = {
    padding: "10px",
    marginTop: "30px",
    marginLeft: "-20px",
    color: "var(--sidebar-background-color)", // Use the sidebar color variable
    fontFamily: "Lato, sans-serif", // Change the font-family to Lato or your preferred font
    fontWeight: "bold", // Make the text bold
  };

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
            <h1 className="company-name" style={headingStyles}>
              JobTrackr
            </h1>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
