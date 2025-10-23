import Link from "next/link";

export default function CTA() {
  return (
    <section className='py-20 bg-gradient-to-b from-secondary to-dark border-t border-accent/10'>
      <div className='container-custom text-center'>
        <h2 className='text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-accent to-accentGold bg-clip-text text-transparent'>
          Let's Create Something Amazing
        </h2>
        <p className='text-xl mb-8 text-gray-400 max-w-2xl mx-auto'>
          Available for bookings and collaborations. Let's bring your creative
          vision to life.
        </p>
        <Link href='/contact' className='btn-primary'>
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
