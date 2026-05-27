import { motion } from 'framer-motion';
import heroLeft from '../assets/images/hero/hero-left.png';
import heroMiddle from '../assets/images/hero/hero-middle.png';
import heroRight from '../assets/images/hero/hero-right.png';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-[72px] overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="hero-gradient absolute inset-0 z-0" />
      <div
        className="relative z-10 max-w-[1240px] mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-10 md:gap-2 text-center md:text-left pt-10 md:pt-0"
      >
        {/* Left: Text content */}
        <div className="flex flex-col items-center md:items-start gap-y-5 md:gap-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading text-5xl md:text-6xl"
          >
            The new foundation
            <br />
            of modern banking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-subheading text-n7-text-muted max-w-[460px]"
          >
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 flex-wrap justify-center md:justify-start"
          >
            <a href="#request-demo" className="btn-primary btn-primary-sm" id="hero-cta-demo">
              Request Demo
            </a>
            <a href="#contact" className="btn-outline" id="hero-cta-contact">
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Image composition */}
        <div className="hero-image-area hidden md:flex justify-center items-center order-first md:order-none">
          <div className="hero-image-group max-w-[300px] min-[481px]:max-w-[400px] md:max-w-[480px] mx-auto">
            {/* Background glow behind images */}
            <div className="hero-image-glow" />

            {/* Banking dashboard (right/top) */}
            <motion.img
              src={heroRight}
              alt="N7 Banking Dashboard showing balance and transactions"
              className="hero-img-right"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              loading="eager"
            />
            {/* Woman using banking app (middle) */}
            <motion.img
              src={heroMiddle}
              alt="Customer using N7 mobile banking"
              className="hero-img-middle"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              loading="eager"
            />
            {/* Recent activity card (left/bottom) */}
            <motion.img
              src={heroLeft}
              alt="Recent banking activity card"
              className="hero-img-left"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
