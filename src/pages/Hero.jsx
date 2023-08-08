import React from "react";
import Countdown from "../components/Countdown";

function hero() {
  return (
    <div
      class="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      id="hero"
    >
      <main class="main">
        <h4>Kepada Bapak/Ibu/Saudara/i, </h4>
        <h1>Evan & Lisa</h1>
        <p>Akan melangsungkan resepsi pernikahan dalam:</p>

        <div class="countdown">
          <Countdown />
        </div>
        <a href="#undangan" class="btn btn-lg mt-4">
          Lihat Undangan
        </a>
      </main>
    </div>
  );
}

export default hero;
