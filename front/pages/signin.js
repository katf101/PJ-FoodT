import React from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/Login/LoginForm";
import SearchForm from "../components/SearchForm";
import MainCard from "../components/UI/MainCard";

const signup = () => {
  return (
    <AppLayout>
      <SearchForm />
      <MainCard />
      <LoginForm />
    </AppLayout>
  );
};

export default signup;
