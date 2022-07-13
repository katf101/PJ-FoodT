import React from "react";
import AppLayout from "../../components/AppLayout";
import SearchForm from "../../components/SearchForm";
import MenuCard from '../../components/UI/MenuCard';

const Home = () => {
  return (
    <AppLayout>
      <SearchForm />
      <MenuCard />
    </AppLayout>
  );
};

export default Home;