// import { Dashboard } from '@rsuite/icons'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProtected from "../assets/components/ProtectedComponents/TokenProtected";
import AllMoviesList from "../pages/AllMoviesList";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DetailMovies from "../pages/DetailMovies";
import FixDashboard from "../pages/FixDashboard";
// import ReduxDashboard from "../pages/ReduxDashboard";
// import QuizRedux from '../pages/reduxHandle/QuizRedux'
// import ReduxPage from '../pages/reduxHandle/ReduxPage'
// import Home from '../pages/Home'
import SearchMovieList from "../pages/SearchMovieList";
// import TesDash from '../pages/TesDash'
// import Testing_Movies from '../pages/Testing_Movies'

const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <TokenProtected>
              <FixDashboard />
            </TokenProtected>
          }
        />
        {/* <Route path='/' element={<ReduxPage/>}/> */}
        {/* <Route path='/' element={<QuizRedux/>}/> */}
        <Route path="/search/:title" element={<SearchMovieList />} />
        <Route path="/:id" element={<DetailMovies />} />
        <Route path="/movie-list" element={<AllMoviesList />} />
        {/* <Route path="/:id" element={<DetailMovies/>}/>
            <Route path="/search/:title" element={<SearchMovieList/>}/>
            <Route path='/movie-list' element={<AllMoviesList/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
