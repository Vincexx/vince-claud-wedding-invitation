import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

interface SaveTheDateCounterProps {
  targetDate: string; // ISO format string
}

const SaveTheDateCounter: React.FC<SaveTheDateCounterProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    // Get current time in Asia/Manila
    const now = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    );

    // Parse the target date in Asia/Manila timezone
    const target = new Date(
      new Date(targetDate).toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    );

    const difference = target.getTime() - now.getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <p className="text-white font-serif text-xl mt-6">
        The big day has arrived!
      </p>
    );
  }

  return (
    <div className="flex justify-center gap-6 mt-8 text-white font-serif text-lg sm:text-xl">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="font-bold text-4xl sm:text-5xl">{value}</span>
          <span className="uppercase tracking-widest">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default SaveTheDateCounter;
