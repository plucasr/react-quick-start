import { FunctionComponent } from "react";
import { NavLink } from "react-router";

interface AboutProps {
  title?: string;
}

const About: FunctionComponent<AboutProps> = ({ title = "About Page" }) => {
  return (
    <div>
      <p>{title}</p>
      <NavLink to="/auth/login" end>
        Login
      </NavLink>
    </div>
  );
};

export default About;
