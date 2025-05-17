import React from 'react';

const messages = [
  '🎉 Big news! Our newest episode, Dawn of a Dynasty is out now!',
  '🏀 Celebrating the beginning of the greatest WNBA dynasty ~ the 4x WNBA Champs: The Comets',
  '🎧 Listen on Your Favorite Podcast Platform!',
  '📢 Interviews coming soon – stay tuned!',
  '🔥 Subscribe to Fire & White now!',
];

const AnnouncementBar: React.FC = () => {

  const repeatedMessages = [...messages, ...messages];

  return (
    <div className="marquee-container py-2 text-sm font-semibold">
      <div className="marquee-content">
        {repeatedMessages.map((msg, idx) => (
          <span key={idx} className="mx-8 inline-block">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
