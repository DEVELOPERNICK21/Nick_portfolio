"use client";

import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Manual Instagram posts - Add your Instagram photos here
    // Download photos from Instagram and save to /public/instagram/ folder
    // Then add them here with their Instagram post URLs
    const manualInstagramPosts: InstagramPost[] = [
      // Example - Add your Instagram photos here:
      // {
      //   id: "1",
      //   media_url: "/instagram/instagram-1.jpg", // Path to downloaded image in public folder
      //   permalink: "https://www.instagram.com/p/DRFhfnpEqmK/", // Original Instagram post URL
      //   caption: "Your caption here",
      //   media_type: "IMAGE",
      //   timestamp: new Date().toISOString(),
      // },
      // Add more posts below...
    ];
    // Try to fetch from API first, fallback to manual posts
    const fetchInstagramPosts = async () => {
      try {
        // TODO: Replace with actual Instagram API endpoint when ready
        // const response = await fetch('/api/instagram');
        // const data = await response.json();
        // if (data.data && data.data.length > 0) {
        //   setPosts(data.data);
        //   setLoading(false);
        //   return;
        // }
        
        // Use manual posts if available
        if (manualInstagramPosts.length > 0) {
          setPosts(manualInstagramPosts);
          setLoading(false);
          return;
        }
        
        // No posts available
        setLoading(false);
        setError(null); // Don't show error, just show placeholder
      } catch (err) {
        // Fallback to manual posts on error
        if (manualInstagramPosts.length > 0) {
          setPosts(manualInstagramPosts);
        }
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  // If you have Instagram posts, uncomment and use this structure:
  /*
  if (loading) {
    return (
      <section className='py-20 bg-white'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-serif mb-4 text-gray-900'>
              Follow My Journey
            </h2>
            <p className='text-gray-600'>Loading Instagram feed...</p>
          </div>
        </div>
      </section>
    );
  }
  */

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <FaInstagram className='text-3xl text-gray-900' />
            <h2 className='text-4xl md:text-5xl font-serif text-gray-900'>
              Follow My Journey
            </h2>
          </div>
          <p className='text-gray-600 mb-6'>
            Stay updated with my latest work and behind-the-scenes moments
          </p>
          <a
            href='https://www.instagram.com/nikhil__kubde/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-md hover:opacity-90 transition-opacity'
          >
            <FaInstagram />
            Follow @nikhil__kubde
          </a>
        </div>

        {error ? (
          <div className='text-center py-12'>
            <p className='text-gray-600 mb-4'>
              {error}
            </p>
            <p className='text-sm text-gray-500'>
              Visit my Instagram profile directly to see all posts
            </p>
          </div>
        ) : posts.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {posts.slice(0, 8).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target='_blank'
                rel='noopener noreferrer'
                className='relative aspect-square overflow-hidden rounded-lg group cursor-pointer'
              >
                <Image
                  src={post.media_url}
                  alt={post.caption || "Instagram post"}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                  sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center'>
                  <FaInstagram className='text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>
              </a>
            ))}
          </div>
        ) : (
          // Placeholder grid showing Instagram-style layout
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[...Array(8)].map((_, index) => (
              <a
                key={index}
                href='https://www.instagram.com/nikhil__kubde/'
                target='_blank'
                rel='noopener noreferrer'
                className='relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-200 flex items-center justify-center'
              >
                <FaInstagram className='text-gray-400 text-3xl group-hover:text-gray-500 transition-colors' />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

