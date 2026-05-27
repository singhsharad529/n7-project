import { motion } from 'framer-motion';
import {
  Landmark,
  Smartphone,
  Globe,
  FileText,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

/* ── Solution card data ───────────────────────────────────── */
interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const solutions: SolutionItem[] = [
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC',
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC',
  },
];

/* ── Animation variants ───────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── SolutionCard component ───────────────────────────────── */
function SolutionCard({ item, index }: { item: SolutionItem; index: number }) {
  return (
    <motion.div
      className="solution-card"
      id={`solution-card-${index}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
    >
      {/* Icon + badge row */}
      <div className="flex items-center justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="w-12 h-12 flex items-center justify-center text-n7-text-muted"
        >
          {item.icon}
        </motion.div>
        {item.badge && <span className="nbfc-badge">{item.badge}</span>}
      </div>

      {/* Title */}
      <h3 className="font-heading text-[1.15rem] font-semibold text-n7-text mb-3 tracking-[-0.01em]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-[1.7] text-n7-text-muted mb-5">
        {item.description}
      </p>

      {/* Learn more */}
      <motion.a
        href="#"
        className="learn-more-link"
        id={`learn-more-${index}`}
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        Learn More <ArrowRight size={14} />
      </motion.a>
    </motion.div>
  );
}

/* ── Solutions section ────────────────────────────────────── */
export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="pt-[100px] pb-20 bg-n7-bg relative"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-[60px] items-start">
          {/* Left: Heading + CTA (sticky on desktop) */}
          <motion.div
            className="solutions-heading lg:sticky lg:top-[120px] text-center lg:text-left"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-8">
              All of our solutions are
              <br />
              tailor-made to your needs
            </h2>

            <motion.a
              href="#request-demo"
              className="btn-outline mx-auto lg:mx-0 inline-flex"
              id="solutions-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Demo
            </motion.a>
          </motion.div>

          {/* Right: Solution cards grid */}
          <div className="solutions-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-12 sm:gap-y-8">
            {solutions.map((item, i) => (
              <SolutionCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
