"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OfflinePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-heading px-4">
      <div className="text-center max-w-md">
        {/* Offline Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 192 192"
            className="text-[#a4722c]"
          >
            <rect width="192" height="192" fill="currentColor" opacity="0.1" rx="20" />
            <circle cx="96" cy="96" r="56" fill="#a4722c" opacity="0.2" />
            <g fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="96" cy="96" r="48" />
              <line x1="64" y1="64" x2="128" y2="128" />
            </g>
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-heading mb-3">
          You're Offline
        </h1>

        <p className="text-lg text-muted mb-6 leading-relaxed">
          It looks like you've lost your internet connection. Some features may not be available right now.
        </p>

        <div className="bg-surface rounded-lg p-5 mb-8 border border-border">
          <p className="text-sm text-muted">
            💡 <strong>Tip:</strong> You can still browse cached pages. Check your connection and try again.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              }
            }}
            className="w-full px-6 py-3 bg-[#a4722c] text-white font-semibold rounded-lg hover:bg-[#8b5e24] transition-colors"
          >
            Retry
          </button>

          <Link
            href="/"
            className="w-full px-6 py-3 border-2 border-[#a4722c] text-[#a4722c] font-semibold rounded-lg hover:bg-[#fdf5e6] transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>

        {/* More info */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-subtle mb-3">What you can do:</p>
          <ul className="text-sm text-muted text-left space-y-2">
            <li>✓ Browse previously visited pages</li>
            <li>✓ View cached product images</li>
            <li>✓ Read offline content</li>
            <li>✗ Place new orders (requires internet)</li>
            <li>✗ Sync cart changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
