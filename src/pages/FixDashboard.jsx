import React, { useEffect, useState } from "react";
import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieList } from "../redux/actions/getMovies";

const FixDashboard = () => {
  const [Popular, setPopular] = useState([])
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieBox.movies);

  useEffect(() => {
    dispatch(GetMovieList())
      .then(() => {
        setPopular(movieData.movies)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, movieData]);


  return (
    <div className="parents">     
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {Popular ? (
          Popular.map((movie, i) => {
            const backgroundStyle = {
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            };
            return (
              <SwiperSlide key={i}>
                <div
                  className={`body-parents bg-cover relative bg-center bg-no-repeat h-screen overflow-hidden py-1 z-50 flex justify-start items-center`}
                  style={backgroundStyle}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black -z-50"></div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
                  <div key={i} className={`desc-section flex flex-col gap-4 w-[50%] text-white mx-4`}>
                    <div className="Movie-title">
                      <h1 className="font-extrabold font-montserrat text-[4rem] leading-[4.5rem]">
                        {movie.title}
                      </h1>
                    </div>
                    <div className="Movie-overview">
                      <p className="text-[0.8rem] text-justify font-normal font-montserrat">
                        {movie.overview}
                      </p>
                    </div>
                    <div className="desc-btn">
                      <button className="bg-red-600 rounded-full px-3 font-montserrat font-bold py-1 h-[2.5rem] text-[0.8rem] w-[10rem]">
                        <PlayOutlineIcon className="text-[1rem] mx-[0.3rem] mb-[0.2rem]" />
                        WATCH TRAILER
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <span>
            <h2>Sedang Memuat....</h2>
          </span>
        )}
      </Swiper>
    </div>
  );
};

export default FixDashboard;
