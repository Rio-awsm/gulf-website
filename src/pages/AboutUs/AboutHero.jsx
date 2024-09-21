import React, { useEffect, useRef } from "react";
import aboutHero from "/assets/aboutHero.webp";

const AboutHero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="lg:pt-16 pt-10 relative overflow-hidden" style={{ height: '100vh' }}>
      <div className="text-center relative z-10">
        <h1 className="font-bebas lg:text-8xl text-5xl text-[#024959]">
          A Legacy of Trust in Real Estate
        </h1>
        <p className="text-xl z-10 relative pt-6 text-black/60 px-6 lg:px-36">
          With a deep understanding of the local market and a commitment to
          client satisfaction, we have earned the trust of countless homeowners
          and investors.
        </p>
      </div>
      <div 
        ref={parallaxRef}
        className="absolute top-48 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'translateY(0)',
          willChange: 'transform'
        }}
      />
    </section>
  );
};

export default AboutHero;