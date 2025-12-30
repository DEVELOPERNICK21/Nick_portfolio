"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-serif mb-4 text-gray-900'>
            Introduction Video
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Get to know me better through this personal introduction
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-black group'>
            <video
              ref={videoRef}
              src='/intro-video.mp4'
              className='w-full h-auto'
              controls={false}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            />

            {/* Custom Controls Overlay */}
            <div
              className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110'
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <FaPause className='text-gray-900 text-2xl ml-1' />
                ) : (
                  <FaPlay className='text-gray-900 text-2xl ml-1' />
                )}
              </button>

              {/* Bottom Controls Bar */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <button
                      onClick={toggleMute}
                      className='text-white hover:text-gray-300 transition-colors'
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <FaVolumeMute className='text-xl' />
                      ) : (
                        <FaVolumeUp className='text-xl' />
                      )}
                    </button>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className='text-white hover:text-gray-300 transition-colors'
                    aria-label='Fullscreen'
                  >
                    <FaExpand className='text-xl' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className='mt-6 text-center'>
            <p className='text-gray-600 text-sm'>
              This video showcases my personality, on-camera presence, and what I bring to every project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

