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
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(-1);
  const touchStartY = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setIsReady(true);
    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("loadeddata", markReady);
    if (video.readyState >= 1) markReady();

    // Fallback: show video after 2s even if metadata hasn't loaded
    const timeout = setTimeout(markReady, 2000);

    return () => {
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("loadeddata", markReady);
      clearTimeout(timeout);
    };
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const video = videoRef.current;
      if (!video || !isReady) return;

      const endTime = (video.duration / 10) + 0.3;
      const p = Math.min(Math.max(progressRef.current, 0), 1);
      const newTime = Math.round((endTime - p * endTime) * 100) / 100;

      if (Math.abs(newTime - lastTimeRef.current) > 0.01) {
        lastTimeRef.current = newTime;
        video.currentTime = newTime;
      }
    });
  }, [isReady]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleDelta = useCallback((deltaY: number) => {
    // Re-lock when scrolled back to the very top
    if (!lockedRef.current && window.scrollY === 0 && deltaY < 0) {
      lockedRef.current = true;
      progressRef.current = 0;
      lastTimeRef.current = -1;
      scheduleUpdate();
    }

    if (!lockedRef.current) return false;

    const step = deltaY / 800;
    progressRef.current = Math.min(Math.max(progressRef.current + step, 0), 1);
    scheduleUpdate();

    if (progressRef.current >= 1) {
      lockedRef.current = false;
    }
    return true;
  }, [scheduleUpdate]);

  // Wheel events (desktop)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      if (!lockedRef.current) return;
      if (isReady && handleDelta(e.deltaY)) {
        e.preventDefault();
      } else if (!isReady && lockedRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isReady, handleDelta]);

  // Touch events (mobile)
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;
      const deltaY = touchStartY.current - e.touches[0].clientY;
      touchStartY.current = e.touches[0].clientY;
      if (isReady && handleDelta(deltaY)) {
        e.preventDefault();
      } else if (!isReady && lockedRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [isReady, handleDelta]);

  useEffect(() => {
    if (isReady) scheduleUpdate();
  }, [isReady, scheduleUpdate]);

  return (
    <div ref={containerRef} className="sticky top-0 z-20 w-full overflow-hidden rounded-2xl bg-[#fafafa]" style={{ aspectRatio: "16 / 9" }}>
      <div className="flex h-full items-center justify-center pt-36">
        <div
          className="relative w-[38%] max-w-[300px] min-w-[160px] overflow-hidden rounded-2xl"
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
