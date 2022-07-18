import React from 'react';
import AppLayout from "../../components/AppLayout";
import SearchForm from "../../components/SearchForm";
import BasketList from '../../components/UI/BasketList';

const basketlist = () => {
  return (
    <AppLayout>
      <SearchForm />
      <BasketList />
    </AppLayout>
  )
}

export default basketlist;