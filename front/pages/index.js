import React from "react";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import MainCard from '../components/UI/MainCard';

const Home = () => {
  return (
    <AppLayout>
      <SearchForm />
      <MainCard />
    </AppLayout>
  );
};

export default Home;
