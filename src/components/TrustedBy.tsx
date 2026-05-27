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
      className="relative z-10 py-12 border-t border-b border-n7-border bg-n7-bg"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[0.8125rem] font-medium text-n7-text-muted mb-6 tracking-[0.02em]"
        >
          Trusted By:
        </motion.p>

        {/* Logo strip – infinite scroll */}
        <div
          className="overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)] [webkit-mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]"
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
            className="flex items-center gap-12 w-max"
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="trusted-logo">
                <span className="text-base leading-none">{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
