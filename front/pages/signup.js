import React from "react";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import MainCard from "../components/UI/MainCard";
import SignUpForm from "../components/Login/SignUpForm";

const signup = () => {
  return (
    <AppLayout>
      <SearchForm />
      <MainCard />
      <SignUpForm />
    </AppLayout>
  );
};

export default signup;