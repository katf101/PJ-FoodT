import React from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/Login/LoginForm";
import SearchForm from "../components/SearchForm";

const signup = () => {
  return (
    <AppLayout>
      <SearchForm />
      <LoginForm />
    </AppLayout>
  );
};

export default signup;
