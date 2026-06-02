"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      aria-label="Like"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transform transition"
    >
      <span className="text-lg">👍</span>
      <span className="font-medium">{likes}</span>
    </button>
  );
}