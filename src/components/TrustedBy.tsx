import { motion } from 'framer-motion';

const logos = [
  { name: 'SHELLS', icon: '◎' },
  { name: 'SmartFinder', icon: '◈' },
  { name: 'Zoomery', icon: '◆' },
  { name: 'ArtVenue', icon: '◇' },
  { name: 'kontrastr', icon: '◉' },
  { name: 'WAVEMARATHON', icon: '◊' },
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '48px 0',
        borderTop: '1px solid var(--color-n7-border)',
        borderBottom: '1px solid var(--color-n7-border)',
        background: 'var(--color-n7-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--color-n7-text-muted)',
            marginBottom: '24px',
            letterSpacing: '0.02em',
          }}
        >
          Trusted By:
        </motion.p>

        {/* Logo strip – infinite scroll */}
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '48px',
              width: 'max-content',
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="trusted-logo">
                <span style={{ fontSize: '1rem', lineHeight: 1 }}>{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
