import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getBook } from "../../apis/requests/book";

import Error from "../../commons/Error";
import Loading from "../../commons/Loading";
import BookDetail from "../../components/BookDetail";

export default function Book() {
  const [volumeInfo, setVolumeInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getBook(id)
      .then((res) => {
        setVolumeInfo(res.volumeInfo);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <BookDetail volumeInfo={volumeInfo} />
    </>
  );
}
