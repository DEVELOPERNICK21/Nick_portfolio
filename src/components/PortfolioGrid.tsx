"use client";

import Image from "next/image";
import { useState } from "react";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Editorial",
    "Fashion",
    "Commercial",
    "Runway",
    "Beauty",
  ];

  const portfolioItems = [
    {
      src: "/portfolio-1.jpg",
      alt: "Editorial fashion shoot",
      category: "Editorial",
    },
    {
      src: "/portfolio-2.jpg",
      alt: "High fashion campaign",
      category: "Fashion",
    },
    {
      src: "/portfolio-3.jpg",
      alt: "Commercial advertisement",
      category: "Commercial",
    },
    { src: "/portfolio-4.jpg", alt: "Fashion week runway", category: "Runway" },
    { src: "/portfolio-5.jpg", alt: "Beauty close-up", category: "Beauty" },
    {
      src: "/portfolio-6.jpg",
      alt: "Magazine editorial",
      category: "Editorial",
    },
    { src: "/portfolio-7.jpg", alt: "Brand campaign", category: "Fashion" },
    {
      src: "/portfolio-8.jpg",
      alt: "Product photography",
      category: "Commercial",
    },
    { src: "/portfolio-9.jpg", alt: "Designer runway", category: "Runway" },
    { src: "/portfolio-10.jpg", alt: "Beauty portrait", category: "Beauty" },
    {
      src: "/portfolio-11.jpg",
      alt: "Fashion editorial",
      category: "Editorial",
    },
    { src: "/portfolio-12.jpg", alt: "Luxury brand", category: "Fashion" },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className='flex flex-wrap justify-center gap-4 mb-12'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category
                ? "bg-gradient-to-r from-accent to-accentGold text-dark shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                : "bg-secondary border border-accent/20 text-lightGray hover:border-accent hover:text-accent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className='relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer border border-accent/10 hover:border-accent/30 transition-all duration-500'
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6'>
              <div>
                <p className='text-accent text-lg font-semibold mb-1'>
                  {item.category}
                </p>
                <div className='h-0.5 w-12 bg-gradient-to-r from-accent to-accentGold'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
