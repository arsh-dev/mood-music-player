import React, { useRef, useState } from "react";

const moodTracks: Record<string, string> = {
  happy: "/audio/happy.mp3",
  sad: "/audio/sad.mp3",
  focus: "/audio/focus.mp3",
  sleep: "/audio/sleep.mp3",
};

export default function MoodMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.5);

  const playMood = (mood: string) => {
    setCurrentMood(mood);
    if (audioRef.current) {
      audioRef.current.src = moodTracks[mood];
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentMood(null);
    }
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <div>
      <img src="/images/mood.jpg" alt="Mood Music Player" style={{width: "120px", marginBottom: "1rem"}} />
      <h1>Mood Music Player 🎧</h1>
      <div>
        <button className="mood-button" onClick={() => playMood("happy")}>😊 Happy</button>
        <button className="mood-button" onClick={() => playMood("sad")}>😢 Sad</button>
        <button className="mood-button" onClick={() => playMood("focus")}>🧠 Focus</button>
        <button className="mood-button" onClick={() => playMood("sleep")}>😴 Sleep</button>
      </div>

      {currentMood && (
        <>
          <p style={{ marginTop: "1rem" }}>Playing: {currentMood}</p>
          <button className="stop-button" onClick={stopMusic}>Stop Music</button>

          <div className="volume-control">
            <label>Volume: </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolumeChange}
            />
          </div>
        </>
      )}

      <audio ref={audioRef} />
    </div>
  );
}

