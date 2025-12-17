"use client";

const HeroVideoSection = () => {
  return (
    <section
      id="hero-video-section"
      aria-label="Hero video section"
      className="
        relative
        w-full
        h-[40vh]        /* mobile */
        sm:h-[70vh]   /* tablets */
        md:h-[80vh]     /* small laptops */
        lg:h-[90vh]     /* laptops */
        xl:h-screen     /* large screens */
        overflow-hidden
        bg-black
      "
    >
      <video
        className="
          absolute
          top-1/2 left-1/2
          min-w-full min-h-full
          w-auto h-auto
          -translate-x-1/2 -translate-y-1/2
          object-cover
          pointer-events-none
        "
        src="/video/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </section>
  );
};

export default HeroVideoSection;
