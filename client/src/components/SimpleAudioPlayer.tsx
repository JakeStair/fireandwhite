import { useRef, useState, useEffect } from 'react';

type Props = {
  src: string;
};

export default function SimpleAudioPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const current = audio.currentTime;
      const total = audio.duration || 1;
      setProgress((current / total) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  return (
    <div className="flex items-center w-full gap-2">
      <button
        onClick={togglePlay}
        className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center"
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>

      <div className="flex-grow h-2 bg-gray-300 rounded overflow-hidden">
        <div
          className="h-full bg-orange-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
