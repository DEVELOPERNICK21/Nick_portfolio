"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";
import { LIBRARY_PHOTOS } from "@/data/media";

export default function LibraryGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <section className='premium-section container-custom pb-12'>
        <p className='premium-kicker mb-4'>Extended Archive</p>
        <h2 className='premium-heading text-3xl md:text-4xl mb-8'>
          Photo Library
        </h2>
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6'>
          {LIBRARY_PHOTOS.map((photo, index) => (
            <button
              key={photo.src}
              type='button'
              className='break-inside-avoid mb-6 w-full text-left group cursor-pointer'
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div className='relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900'>
                <div className='relative w-full aspect-[3/4]'>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ImageLightbox
        images={LIBRARY_PHOTOS}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % LIBRARY_PHOTOS.length)
        }
        onPrevious={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + LIBRARY_PHOTOS.length) % LIBRARY_PHOTOS.length
          )
        }
        onGoTo={setLightboxIndex}
      />
    </>
  );
}
