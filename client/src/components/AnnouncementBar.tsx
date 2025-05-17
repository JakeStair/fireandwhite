import React from 'react';

const messages = [
  '🎉 Big news! Dawn of a Dynasty is Out Now!',
  '🎧 Listen on Your Favorite Podcast Platform!',
  '🔥 Subscribe to Fire & White now!',
  '🏀 Celebrating 4x WNBA Champs: The Comets',
  '📢 Interviews coming soon – stay tuned!',
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
