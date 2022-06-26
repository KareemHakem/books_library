import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/books/action";

import CardBook from "../../components/CardBook";
import Error from "../../commons/Error";
import Loading from "../../commons/Loading";

import "./style.css";

export default function HomeBooks({ search, filter, orderBy }) {
  const { data, loading, error } = useSelector((state) => state.books);

  const items = data?.items;
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleNavigation = (id) => {
    navigation(`book/${id}`);
  };

  useEffect(() => {
    dispatch(getBooks(0, search.trim().toLocaleLowerCase(), filter, orderBy));
    console.log(search);
  }, [dispatch, search, filter, orderBy]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="home-books-container">
      <CardBook items={items} handleNavigation={handleNavigation} />
    </div>
  );
}
