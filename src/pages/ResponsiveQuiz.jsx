import React from "react";

const ResponsiveQuiz = () => {
  return (
    <>
      <div className="parents flex-col w-full h-[100vh] py-1 px-2 text-[1.5rem]">
        <div className="kotak-merah-large md:w-[100%] md:text-white md:flex md:mb-2 sm:mb-2 lg:w-[100%] lg:text-white bg-red-600 text-center text-white h-[5rem] flex justify-center items-center sm:float-right sm:w-[30%] sm:text-red-600">
          Merah
        </div>
        <div className="kotak-hijau-medium md:w-[100%] md:text-white md:flex lg:w-[100%] lg:text-white lg:hidden sm:hidden bg-green-600 text-center text-white h-[5rem] flex justify-center items-center sm:float-right sm:w-[50%] sm:text-red-600">
          Hijau
        </div>
        <div className="kotak-hijau-medium md:w-[100%] md:text-white md:hidden lg:w-[100%] lg:text-white lg:hidden sm:flex bg-purple-600 text-center text-white h-[5rem] flex justify-center items-center sm:w-[100%] sm:text-white-600">
          Ungu
        </div>
        <div className="section-kotak-bawah flex w-full h-[100vh] gap-2">
          <div className="kotak-kiri-large lg:flex md:hidden sm:hidden bg-purple-700 my-2 w-[40%] flex justify-center items-center text-white">
            Ungu
          </div>
          <div className="kotak-kanan-large flex-col w-[100%] h-full my-2">
            <div className="kotak-hijau lg:flex md:hidden sm:hidden bg-green-500 w-[100%] h-[50%] text-white flex justify-center items-center">
              Hijau
            </div>

            <div className="flex h-[100%] gap-2 w-[100%] lg:flex md:hidden sm:hidden">
              <div className="kotak-biru my-2 lg:flex md:hidden sm:hidden bg-blue-500 w-[100%] h-[45%] text-white flex justify-center items-center">
                Biru
              </div>
              <div className="kotak-pink my-2 bg-pink-500 w-[100%] h-[45%] text-white flex justify-center items-center">
                Pink
              </div>
              <div className="kotak-pink-medium my-2 bg-pink-500 w-[100%] h-[45%] lg:hidden md:flex sm:flex text-white flex justify-center items-center">
                Pink
              </div>
            </div>
            <div className="kotak-pink-medium lg:hidden md:flex sm:flex mb-2 gap-2 h-[50%] justify-between items-center">
              <div className="bg-pink-600 h-[100%] w-[50%] flex justify-center items-center text-white">
                Pink
              </div>
              <div className="bg-pink-600 h-[100%] w-[50%] md:flex sm:hidden flex justify-center items-center text-white">
                Pink
              </div>
              <div className="bg-sky-400 h-[100%] w-[50%] md:hidden sm:flex flex justify-center items-center text-white">
                Biru Muda
              </div>
            </div>
            <div className="kotak-biru-medium lg:hidden md:flex sm:hidden w-[100%] h-[5rem] flex justify-center items-center text-white bg-purple-600">
              Ungu
            </div>
            <div className="kotak-biru-medium lg:hidden md:hidden sm:flex w-[100%] h-[5rem] flex justify-center items-center text-white bg-green-600">
              Hijau
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveQuiz;
