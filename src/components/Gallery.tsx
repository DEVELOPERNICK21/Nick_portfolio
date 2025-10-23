"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Gallery() {
  const images = [
    {
      src: "/gallery-1.jpg",
      alt: "Fashion editorial shoot",
      category: "Editorial",
    },
    {
      src: "/gallery-2.jpg",
      alt: "Commercial campaign",
      category: "Commercial",
    },
    { src: "/gallery-3.jpg", alt: "Runway fashion show", category: "Runway" },
    { src: "/gallery-4.jpg", alt: "Beauty photography", category: "Beauty" },
    { src: "/gallery-5.jpg", alt: "Fashion campaign", category: "Fashion" },
    { src: "/gallery-6.jpg", alt: "Editorial feature", category: "Editorial" },
  ];

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-20 bg-dark'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='section-title'>Featured Work</h2>
          <p className='text-xl text-gray-400'>
            A glimpse into my latest projects
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className='reveal reveal-up relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]'
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6'>
                <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                  <span className='text-accent text-lg font-semibold block mb-1'>
                    {image.category}
                  </span>
                  <div className='h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-accent to-accentGold transition-all duration-500'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link href='/portfolio' className='btn-primary'>
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
