import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import desktopImage from '../assets/images/desktop-p.png';
import mobileImage from '../assets/images/mobile-p.png';
import comets from "../assets/images/comets.png";
import tamika from "../assets/images/tamika.png";
import lisa from "../assets/images/lisa.png";
import trailer from "../assets/images/trailer.png";

type Episode = {
  title: string;
  pubDate: string;
  audioUrl: string;
  contentSnippet?: string;
  link: string;
};

const manualDescriptions: Record<string, string> = {
  'Episode 1 Title Here': 'Custom description for episode 1...',
  'Episode 2 Title Here': 'Custom description for episode 2...',
};

const thumbnails = [comets, lisa, tamika, trailer];

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const EpisodeCard: React.FC<{ episode: Episode; thumbnail: string }> = ({ episode, thumbnail }) => (
  <article className="p-4 rounded-lg bg-[#4f4f4f] shadow-md flex items-start space-x-6 hover:shadow-lg transition-shadow duration-200">
    <img
      src={thumbnail}
      alt={`Thumbnail for ${episode.title}`}
      className="w-32 h-32 object-cover rounded-md flex-shrink-0 border border-gray-600"
    />
    <div className="flex flex-col flex-1">
      <h2 className="text-xl font-semibold mb-1">
        <a
          href={episode.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {episode.title}
        </a>
      </h2>
      <time className="mb-3 text-white" dateTime={new Date(episode.pubDate).toISOString()}>
        {new Date(episode.pubDate).toLocaleDateString()}
      </time>

      <AudioPlayer
        src={episode.audioUrl}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        layout="horizontal"
        className="rounded bg-[#4f4f4f]"
        style={{ boxShadow: 'none' }}
        aria-label={`Play episode: ${episode.title}`}
      />

      {/* Optional description */}
      {/* {episode.contentSnippet && (
        <p className="mt-3 text-gray-400">{episode.contentSnippet}</p>
      )} */}
    </div>
  </article>
);

const Episodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEpisodes = async () => {
    setLoading(true);
    setError(null);

    const CORS_PROXY = 'https://api.allorigins.win/get?url=';
    const RSS_URL = encodeURIComponent('https://feeds.buzzsprout.com/2221953.rss');
    const parser = new Parser();

    try {
      const response = await fetch(`${CORS_PROXY}${RSS_URL}`);
      if (!response.ok) throw new Error('Failed to fetch episodes');

      const data = await response.json();
      const feed = await parser.parseString(data.contents);

      const parsedEpisodes = feed.items.map(item => ({
        title: item.title || 'Untitled',
        pubDate: item.pubDate || '',
        audioUrl: item.enclosure?.url || '',
        contentSnippet: manualDescriptions[item.title || ''] || item.contentSnippet || '',
        link: item.link || '',
      }));

      setEpisodes(parsedEpisodes);
    } catch (err: any) {
      console.error('Failed to fetch or parse RSS feed:', err);
      setError(err.message || 'Failed to load episodes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchEpisodes();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-red-500 text-center py-10">
        <p>{error}</p>
        <button
          onClick={fetchEpisodes}
          className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );

  return (
    <main className="bg-[#4f4f4f] text-white py-16 px-6 flex flex-col items-center min-h-screen">
      <section className="flex flex-col px-4 max-w-5xl mx-auto">
        <picture className="mb-4">
          <source media="(min-width: 720px)" srcSet={desktopImage} />
          <img
            className="w-full h-auto rounded-2xl"
            src={mobileImage}
            alt="Fire and White podcast cover art"
          />
        </picture>
      </section>

      <section className="w-full max-w-3xl space-y-8">
        {episodes.map((ep, idx) => (
          <EpisodeCard key={ep.link || idx} episode={ep} thumbnail={thumbnails[idx % thumbnails.length]} />
        ))}
      </section>
    </main>
  );
};

export default Episodes;
