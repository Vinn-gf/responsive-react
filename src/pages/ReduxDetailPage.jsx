import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetDetailMovies } from "../redux/actions/getDetail";

const ReduxDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailData = useSelector((state) => state.detailBox.detailMovies);
  const [Detail, setDetail] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    dispatch(GetDetailMovies(id))
      .then((result) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "err detail page");
        setLoading(false);
      });
  }, [id, dispatch]);

  useEffect(() => {
    if (!Loading) {
      setDetail(detailData);
    }
  }, [detailData, Loading]);

  return (
    <div>
      <p>id : {id}</p>
      {Loading ? <p>Sedang Memuat....</p> : <p>{Detail.title}</p>}
    </div>
  );
};

export default ReduxDetailPage;
