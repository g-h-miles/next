'use client';

import Countdown from 'react-countdown';

function Render({ days, hours, minutes, seconds, completed }: any) {
  if (completed) {
    // Render a completed state
    return <span>Countdown completed</span>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center gap-3 text-center text-3xl font-medium text-gray-1000 md:text-5xl xl:gap-4 xl:text-6xl 2xl:gap-6 2xl:text-7xl">
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{days < 10 ? `0${days}` : days}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            day
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{hours < 10 ? `0${hours}` : hours}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            hour
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            min
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            sec
          </p>
        </div>
      </div>
    );
  }
}

export default function CountdownTimer() {
  return (
    <div>
      <Countdown date={Date.now() + 2000000000} renderer={Render} />
    </div>
  );
}
