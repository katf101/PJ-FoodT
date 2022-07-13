import React from "react";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import MainCard from "../components/UI/MainCard";
import FindPwForm from "../components/Login/FindPwForm";

const signup = () => {
  return (
    <AppLayout>
      <SearchForm />
      <MainCard />
      <FindPwForm />
    </AppLayout>
  );
};

export default signup;