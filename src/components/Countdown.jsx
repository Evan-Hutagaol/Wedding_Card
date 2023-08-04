import React, { useState, useEffect } from "react";

function Countdown() {
  const weddingDate = new Date("2023-08-31T12:00:00"); // Set your wedding date and time here
  const now = new Date();
  const timeRemaining = weddingDate - now;

  const [days, setDays] = useState(
    Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  );
  const [hours, setHours] = useState(
    Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [minutes, setMinutes] = useState(
    Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((timeRemaining % (1000 * 60)) / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = weddingDate - now;
      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <main className="timerCountdownContainer">
        <div className="timerCountdown">
          <div>
            <span>{days}</span>
            <span>Hari</span>
          </div>
          <div>
            <span>{hours}</span>
            <span>Jam</span>
          </div>
          <div>
            <span>{minutes}</span>
            <span>Menit</span>
          </div>
          <div>
            <span>{seconds}</span>
            <span>Detik</span>
          </div>
        </div>
      </main>
  );
}

export default Countdown;
