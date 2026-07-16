"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "emailjs-com";
import { isDemo, site } from "@/config/site";

type FormStatus = "idle" | "loading" | "success" | "error" | "mailto";

const CONTACT_EMAIL = site.email;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setFormData((prev) => ({ ...prev, email: emailFromQuery }));
    }
  }, [searchParams]);

  const isConfigured = Boolean(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subjectLabel =
        formData.subject || "Portfolio inquiry";
      const mailSubject = encodeURIComponent(
        `${subjectLabel} — ${formData.name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${subjectLabel}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
      setStatus("mailto");
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
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

  const fieldClass =
    "w-full px-4 py-3 bg-zinc-900/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/40 text-zinc-100 placeholder-zinc-500 transition-all duration-300";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label htmlFor='name' className='block text-sm font-medium mb-2 text-zinc-300'>
          Name *
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          value={formData.name}
          onChange={handleChange}
          className={fieldClass}
          placeholder='Your name'
        />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-2 text-zinc-300'>
          Email *
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          value={formData.email}
          onChange={handleChange}
          className={fieldClass}
          placeholder='your@email.com'
        />
      </div>

      <div>
        <label htmlFor='phone' className='block text-sm font-medium mb-2 text-zinc-300'>
          Phone
        </label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          className={fieldClass}
          placeholder='+91 XXXXX XXXXX'
        />
      </div>

      <div>
        <label htmlFor='subject' className='block text-sm font-medium mb-2 text-zinc-300'>
          Subject *
        </label>
        <select
          id='subject'
          name='subject'
          required
          value={formData.subject}
          onChange={handleChange}
          className={`${fieldClass} [&>option]:bg-zinc-900 [&>option]:text-zinc-100`}
        >
          <option value=''>Select a subject</option>
          {isDemo ? (
            <option value='portfolio'>I want a portfolio like this</option>
          ) : null}
          <option value='booking'>Booking Inquiry</option>
          <option value='collaboration'>Collaboration</option>
          <option value='general'>General Inquiry</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor='message' className='block text-sm font-medium mb-2 text-zinc-300'>
          Message *
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
          placeholder='Tell me about your project...'
        />
      </div>

      <button
        type='submit'
        disabled={status === "loading"}
        className='w-full premium-button justify-center disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {status === "loading" ? (
          <span className='flex items-center justify-center gap-2'>
            <svg
              className='animate-spin h-5 w-5 text-current'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              />
            </svg>
            Sending...
          </span>
        ) : isConfigured ? (
          "Send Message"
        ) : (
          "Send via Email"
        )}
      </button>

      {status === "success" && (
        <div className='p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-md text-center'>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === "mailto" && (
        <div className='p-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md text-center'>
          Opening your email app — please tap send to complete your message.
        </div>
      )}

      {status === "error" && (
        <div className='p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-md text-center'>
          Something went wrong. Please try again or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className='underline'>
            {CONTACT_EMAIL}
          </a>
          .
        </div>
      )}
    </form>
  );
}
