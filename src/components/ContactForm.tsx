"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would integrate with your email service (e.g., EmailJS, SendGrid, or API route)
    // For now, we'll just simulate a successful submission

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium mb-2 text-gray-700'
        >
          Name *
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          value={formData.name}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 placeholder-gray-500'
          placeholder='Your name'
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium mb-2 text-gray-700'
        >
          Email *
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          value={formData.email}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 placeholder-gray-500'
          placeholder='your@email.com'
        />
      </div>

      <div>
        <label
          htmlFor='phone'
          className='block text-sm font-medium mb-2 text-gray-700'
        >
          Phone
        </label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 placeholder-gray-500'
          placeholder='+1 (555) 000-0000'
        />
      </div>

      <div>
        <label
          htmlFor='subject'
          className='block text-sm font-medium mb-2 text-gray-700'
        >
          Subject *
        </label>
        <select
          id='subject'
          name='subject'
          required
          value={formData.subject}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900'
        >
          <option value=''>Select a subject</option>
          <option value='booking'>Booking Inquiry</option>
          <option value='collaboration'>Collaboration</option>
          <option value='general'>General Inquiry</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium mb-2 text-gray-700'
        >
          Message *
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none text-gray-900 placeholder-gray-500'
          placeholder='Tell me about your project...'
        />
      </div>

      <button type='submit' className='w-full btn-primary'>
        Send Message
      </button>

      {status === "success" && (
        <div className='p-4 bg-green-100 text-green-700 rounded-md text-center'>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className='p-4 bg-red-100 text-red-700 rounded-md text-center'>
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
