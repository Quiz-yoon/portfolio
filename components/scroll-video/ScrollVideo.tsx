"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface ScrollVideoProps {
  src: string;
}

export default function ScrollVideo({ src }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const progressRef = useRef(0);
  const lockedRef = useRef(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => setIsReady(true);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    if (video.readyState >= 1) setIsReady(true);

    return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  const updateVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !isReady) return;

    const endTime = (video.duration / 10) + 0.3;
    const p = Math.min(Math.max(progressRef.current, 0), 1);
    video.currentTime = endTime - (p * endTime);
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;

    const onWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      // Only re-lock when user is manually scrolling up at the very top
      if (!lockedRef.current && window.scrollY === 0 && e.deltaY < 0 && progressRef.current > 0) {
        lockedRef.current = true;
      }

      if (!lockedRef.current) return;

      e.preventDefault();

      const step = e.deltaY / 800;
      progressRef.current = Math.min(Math.max(progressRef.current + step, 0), 1);
      updateVideo();

      if (progressRef.current >= 1) {
        lockedRef.current = false;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => window.removeEventListener("wheel", onWheel);
  }, [isReady, updateVideo]);

  useEffect(() => {
    if (isReady) updateVideo();
  }, [isReady, updateVideo]);

  return (
    <div ref={containerRef} className="sticky top-0 z-20 w-full overflow-hidden rounded-2xl bg-[#fafafa]" style={{ aspectRatio: "16 / 9" }}>
      <div className="flex h-full items-center justify-center pt-36">
        <div
          className="relative max-w-[300px] overflow-hidden rounded-2xl"
          style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
          <video
            ref={videoRef}
            src={src}
            muted
            playsInline
            preload="auto"
            className="w-full"
            style={{ marginTop: -16 }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "rgba(0,0,0,0.02)" }} />
        </div>
      </div>
    </div>
  );
}
