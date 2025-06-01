import { useRef, useState } from "react";

const moodTracks: Record<string, string> = {
  happy: "/audio/happy.mp3",
  sad: "/audio/sad.mp3",
  focus: "/audio/focus.mp3",
  sleep: "/audio/sleep.mp3",
};

export default function MoodMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentMood, setCurrentMood] = useState<string | null>(null);

  const playMood = (mood: string) => {
    setCurrentMood(mood);
    if (audioRef.current) {
      audioRef.current.src = moodTracks[mood];
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentMood(null);
    }
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold">Select your mood</h2>
      <div className="flex justify-around">
        {Object.keys(moodTracks).map((mood) => (
          <button
            key={mood}
            onClick={() => playMood(mood)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>

      {currentMood && (
        <div>
          <p className="mt-4 text-lg">Playing: {currentMood}</p>
          <button
            onClick={stopMusic}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Stop Music
          </button>
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  );
}
