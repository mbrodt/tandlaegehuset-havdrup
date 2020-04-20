import React from "react";
import Poster from "../assets/covid19_poster.jpg";

function Overlay({ setShowOverlay }) {
  return (
    <div
      onClick={() => setShowOverlay(false)}
      className="fixed h-screen w-screen bg-white z-10 opacity-95 top-0 left-0 flex flex-col justify-center"
    >
      <div className="max-w-md mx-auto overflow-auto">
        <img className="w-full" src={Poster} alt="" />
        <p className="px-6">Klik hvor som helst for at komme ind på siden</p>
      </div>
    </div>
  );
}

export default Overlay;
