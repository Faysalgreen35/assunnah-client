"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPreviewProps {
  videoUrl?: string;
  productName: string;
  thumbnail?: string;
}

export function VideoPreview({ videoUrl, productName, thumbnail }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoUrl) {
    return null;
  }

  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const isVimeo = videoUrl.includes("vimeo.com");
  const isCloudinary = videoUrl.includes("cloudinary.com") || videoUrl.includes("res.cloudinary.com");

  let embedUrl = videoUrl;

  if (isYouTube) {
    const videoId = videoUrl.includes("youtu.be")
      ? videoUrl.split("/").pop()
      : new URLSearchParams(new URL(videoUrl).search).get("v");
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (isVimeo) {
    const videoId = videoUrl.split("/").pop()?.split("?")[0];
    embedUrl = `https://player.vimeo.com/video/${videoId}`;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-heading">Feel Before You Buy</h3>

      <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {!isPlaying ? (
          <>
            {/* Thumbnail/Preview */}
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={productName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-primary/40 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-primary/60 text-sm">Video Preview</p>
                </div>
              </div>
            )}

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <>
            {/* Video Player */}
            {isYouTube || isVimeo ? (
              <iframe
                src={embedUrl}
                title={productName}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            ) : isCloudinary ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}

            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-2 right-2 z-10 p-1 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
              aria-label="Close video"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        )}
      </div>

      <p className="text-xs text-body">
        Watch our product video to see the beautiful craftsmanship and details up close.
      </p>
    </div>
  );
}
