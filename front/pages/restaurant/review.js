import React from 'react';
import AppLayout from "../../components/AppLayout";
import SearchForm from "../../components/SearchForm";
import Review from '../../components/UI/Review';

const review = () => {
  return (
    <AppLayout>
      <SearchForm />
      <Review />
    </AppLayout>
  )
}

export default review;