import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import ReactPaginate from "react-paginate";

import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/books/action";

import Error from "../../commons/Error";
import Loading from "../../commons/Loading";
import CardBook from "../../components/CardBook";

import "./style.css";

export default function HomeBooks({ search, filter, orderBy }) {
  const { data, loading, error } = useSelector((state) => state.books);
  const [pageNumber, setPageNumber] = useState(0);

  const items = data?.items;
  const per_page = 10;

  console.log(data, items);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleNavigation = (id) => {
    navigation(`book/${id}`);
  };

  useEffect(() => {
    dispatch(
      getBooks(pageNumber, search?.trim().toLocaleLowerCase(), filter, orderBy)
    );
  }, [dispatch, search, filter, orderBy, pageNumber]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage);
  };

  const offset = pageNumber * per_page;

  const currentPageData = items
    ?.slice(offset, offset + per_page)
    ?.map((item) => (
      <CardBook
        items={item}
        key={item?.id}
        handleNavigation={handleNavigation}
      />
    ));

  const pageCount = Math.ceil(items?.length / per_page);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="home-books">
      <div className="home-books-container">{currentPageData}</div>
      <ReactPaginate
        previousLabel={"<-"}
        nextLabel={"->"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginatePage"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}
