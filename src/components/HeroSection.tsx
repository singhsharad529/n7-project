import { motion } from 'framer-motion';
import heroLeft from '../assets/hero-left.png';
import heroMiddle from '../assets/hero-middle.png';
import heroRight from '../assets/hero-right.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient effect */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(26, 24, 37, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 24, 37, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '48px',
        }}
        className="hero-grid"
      >
        {/* Left: Text content */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading"
            style={{
              color: 'var(--color-n7-text)',
              marginBottom: '20px',
            }}
          >
            The new foundation
            <br />
            of modern banking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-subheading"
            style={{
              color: 'var(--color-n7-text-muted)',
              maxWidth: '460px',
              marginBottom: '36px',
            }}
          >
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <a href="#request-demo" className="btn-primary" id="hero-cta-demo">
              Request Demo
            </a>
            <a href="#contact" className="btn-outline" id="hero-cta-contact">
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Image composition */}
        <div
          className="hero-image-area"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="hero-image-group">
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

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
            padding-top: 40px !important;
          }
          .hero-text p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-text > div:last-child {
            justify-content: center !important;
          }
          .hero-image-area {
            order: -1;
          }
          .hero-image-group {
            max-width: 400px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-image-group {
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
