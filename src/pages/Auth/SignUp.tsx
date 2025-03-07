import { FunctionComponent } from "react";
import { NavLink } from "react-router";

interface SignUpProps {
  title?: string;
}

const SignUp: FunctionComponent<SignUpProps> = ({ title = "SignUp Page" }) => {
  return (
    <div>
      <p>{title}</p>
      <NavLink to="/auth" end>
        Login
      </NavLink>
    </div>
  );
};

export default SignUp;
