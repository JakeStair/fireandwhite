import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Parser from 'rss-parser';
import '../styles/EpisodePlayer.css';

// 🔽 NEW: local desktop image imports
import cometsDesktop from '../assets/images/comets-desktop.png';
import lisaDesktop from '../assets/images/lisa-desktop.png';
import tamikaDesktop from '../assets/images/tamika-desktop.png';
import trailerDesktop from '../assets/images/trailer-desktop.png';
import forwardIcon from '../assets/images/forward-5.svg';
import backwardIcon from '../assets/images/backward-5.svg';
import playIcon from '../assets/images/play.svg';
import pauseIcon from '../assets/images/pause.svg';


const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

type Episode = {
  title: string;
  pubDate: string;
  audioUrl: string;
  contentSnippet?: string;
  link: string;
  slug: string;
  image?: string;
  desktopImage?: string;
};

const desktopImages: Record<string, string> = {
  '97-comets-dawn-of-a-dynasty': cometsDesktop,
  'lisa-leslie-above-the-rim': lisaDesktop,
  'tamika-catchings-adversity-was-the-blueprint': tamikaDesktop,
  'welcome-to-fire-white': trailerDesktop,
};


const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const EpisodeFeature = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchEpisode = async () => {
      const parser = new Parser();

      try {
        const response = await fetch('https://corsproxy.io/?https://feeds.buzzsprout.com/2221953.rss');
        if (!response.ok) throw new Error('Failed to fetch episode');

        const rawText = await response.text();
        const feed = await parser.parseString(rawText);

        const matchedItem = feed.items.find(item => slugify(item.title || '') === id);

        if (matchedItem) {
          const title = matchedItem.title || 'Untitled';
          const slug = slugify(title);

          const selectedDesktopImage = desktopImages[slug];
          console.log('Slug:', slug);
          console.log('Matched desktop image:', selectedDesktopImage);

          setEpisode({
            title,
            pubDate: matchedItem.pubDate || '',
            audioUrl: matchedItem.enclosure?.url || '',
            contentSnippet: matchedItem.contentSnippet || '',
            link: matchedItem.link || '',
            slug,
            image: matchedItem.itunes?.image || feed.image?.url || '',
            desktopImage: selectedDesktopImage,
          });
        }
        else {
          setError('Episode not found.');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load episode.');
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, [id]);

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 5);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const onEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  if (loading) {
    return (
      <div className="text-white flex justify-center items-center min-h-screen bg-[#4f4f4f]">
        <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !episode) {
    return (
      <div className="text-white bg-[#4f4f4f] min-h-screen flex flex-col justify-center items-center">
        <p className="text-red-500 mb-4">{error || 'Episode not found.'}</p>
        <Link to="/episodes" className="underline text-white">
          Back to episodes
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#4f4f4f] text-white min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/episodes" className="text-sm text-gray-300 underline mb-6 inline-block">
          ← All Episodes
        </Link>

        {/* 🔽 Image rendering — unchanged logic but now uses imported desktopImage */}
        {episode.image && (
          <>
            <img
              src={episode.image}
              alt={episode.title}
              className="w-full rounded-lg mb-6 object-cover block md:hidden"
            />
            {episode.desktopImage ? (
              <img
                src={episode.desktopImage}
                alt={`${episode.title} desktop`}
                className="w-full rounded-lg mb-6 object-cover hidden md:block"
              />
            ) : (
              <div className="w-full rounded-lg mb-6 hidden md:block bg-gray-700 h-64 flex items-center justify-center text-white text-sm">
                No desktop image
              </div>
            )}

          </>
        )}

        <h1 className="text-3xl font-bold mb-2">{episode.title}</h1>
        <time className="block mb-4 text-white">
          {new Date(episode.pubDate).toLocaleDateString()}
        </time>

<audio
  ref={audioRef}
  src={episode.audioUrl}
  preload="metadata"
  onTimeUpdate={onTimeUpdate}
  onLoadedMetadata={onLoadedMetadata}
  onEnded={onEnded}
/>

{/* Play Section */}
<div className="audio-controls flex justify-center items-center gap-8 mb-6">
  <button
    onClick={skipBackward}
    className="control-btn"
    aria-label="Skip Backward 15 seconds"
  >
    <img
      src={backwardIcon}
      alt="Back 15s"
      className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-110"
      // hover:drop-shadow-[0_0_6px_#ff7f1d]
    />
  </button>

  <button
    onClick={togglePlayPause}
    className="control-btn"
    aria-label={isPlaying ? 'Pause' : 'Play'}
  >
    <img
      src={isPlaying ? pauseIcon : playIcon}
      alt={isPlaying ? 'Pause' : 'Play'}
      className="transition-transform duration-200 ease-in-out hover:scale-110"
      // hover:drop-shadow-[0_0_12px_#ff7f1d]
    />
  </button>

  <button
    onClick={skipForward}
    className="control-btn"
    aria-label="Skip Forward 30 seconds"
  >
    <img
      src={forwardIcon}
      alt="Forward 30s"
      className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-110"
      // hover:drop-shadow-[0_0_6px_#ff7f1d]
    />
  </button>
</div>


{/* //TIMELINE SECTION! */}

        <div className="timeline-row flex items-center gap-4">
          <span className="timecode">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={onSeek}
            className="timeline-slider flex-grow"
            step="0.1"
          />
          <span className="timecode">{formatTime(duration)}</span>
        </div>

        {episode.contentSnippet && <p className="text-lg mt-6">{episode.contentSnippet}</p>}
      </div>
    </main>
  );
};


export default EpisodeFeature;
