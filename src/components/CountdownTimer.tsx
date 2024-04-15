"use client";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useRef, useState } from "react";

type CountdownTimerProps = {
  date: Countdown["props"]["date"];
  className?: HTMLElement["className"];
};

export default function CountdownTimer({
  date,
  className = "",
}: CountdownTimerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <Countdown
          date={date}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return null;
            } else {
              return (
                <span className={className}>
                  {zeroPad(hours)}h : {zeroPad(minutes)}m : {zeroPad(seconds)}s
                </span>
              );
            }
          }}
        />
      )}
    </>
  );
}
