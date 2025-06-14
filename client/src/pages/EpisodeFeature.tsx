import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Parser from 'rss-parser';
import '../styles/EpisodePlayer.css';

// 🔽 NEW: local desktop image imports
import cometsDesktop from '../assets/images/comets-desktop.png';
import lisaDesktop from '../assets/images/lisa-desktop.png';
import tamikaDesktop from '../assets/images/tamika-desktop.png';
import trailerDesktop from '../assets/images/trailer-desktop.png';

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
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 30);
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

        <div className="audio-controls flex justify-center items-center gap-8 mb-6">
          <button
            aria-label="Skip Backward 5 seconds"
            onClick={skipBackward}
            type="button"
            className="p-3 rounded-full bg-[#5d5d5d] hover:bg-[#ff7f1d] transition-colors duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlayPause}
            type="button"
            className="p-4 rounded-full bg-[#5d5d5d] hover:bg-[#ff7f1d] transition-colors duration-300 shadow-lg flex items-center justify-center"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l14-7-14-7z" />
              </svg>
            )}
          </button>

          <button
            aria-label="Skip Forward 5 seconds"
            onClick={skipForward}
            type="button"
            className="p-3 rounded-full bg-[#5d5d5d] hover:bg-[#ff7f1d] transition-colors duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M6 5l7 7-7 7" />
            </svg>
          </button>
        </div>

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
