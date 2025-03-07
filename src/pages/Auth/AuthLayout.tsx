/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import "./index.css";

type AuthLayoutProps = {
  title?: string;
};

const AuthLayout: FunctionComponent<AuthLayoutProps> = () => {
  return (
    <div className="auth_page">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
