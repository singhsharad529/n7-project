import { motion } from 'framer-motion';
import LearnMore from './common/LearnMore';
import InsightHeroImage from "../assets/images/insights/hero-image.png";
import InsightsCarousel from './InsightsCarousel';

/* ── Insights card data ───────────────────────────────────── */
interface InsightItem {
    id: number;
    title: string;
    user: string;
    date: string;
    url: string;
}

const insights: InsightItem[] = [
    {
        id: 1,
        title: 'How to transition from a traditional to a digital bank',
        user: 'David Grohl',
        date: '17/08/24',
        url: "#"
    },
    {
        id: 2,
        title: 'How to transition from a traditional to a digital bank',
        user: 'David Grohl',
        date: '17/08/24',
        url: "#"
    },
    {
        id: 3,
        title: 'How to transition from a traditional to a digital bank',
        user: 'David Grohl',
        date: '17/08/24',
        url: "#"
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
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

/* ── InsightsCard component ───────────────────────────────── */
function InsightsCard({ item, index }: { item: InsightItem; index: number }) {
    return (
        <motion.div
            className="relative bg-[#031E2A] rounded-2xl p-8 justify-between transition-all 0.4s cubic-bezier(0.4, 0, 0.2, 1);"
            id={`solution-card-${index}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={index}
        >
            {/* Title */}
            <h3 className="font-heading text-[1.15rem] font-semibold text-n7-text mb-3 tracking-[-0.01em]">
                {item.title}
            </h3>

            {/* Description */}
            <div className="flex  gap-8">
                <p className="text-sm leading-[1.7] text-n7-text-muted mb-5">
                    {item.user}
                </p>
                <p className="text-sm leading-[1.7] text-n7-text-muted mb-5">
                    {item.date}
                </p>
            </div>

            <div className="text-center">
                <motion.a
                    href={item.url}
                    className="btn-outline mx-auto lg:mx-0 inline-flex w-full"
                    id="solutions-cta"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Read More
                </motion.a>
            </div>
        </motion.div>
    );
}

/* ── Insights section ────────────────────────────────────── */
export default function Insights() {
    return (
        <section
            id="solutions"
            className="pt-[100px] pb-20 bg-n7-bg relative"
        >
            <div className="max-w-[1240px] mx-auto px-8 space-y-20">
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] items-start">
                    {/* Left: Heading + CTA (sticky on desktop) */}
                    <motion.div
                        className="solutions-heading lg:sticky lg:top-[120px] text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-8">
                            Get yourself up-to-speed on all the things happening in fintech
                        </h2>
                        <motion.a
                            href="#request-demo"
                            className="btn-outline mx-auto lg:mx-0 inline-flex"
                            id="solutions-cta"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Insights
                        </motion.a>
                    </motion.div>

                    {/* Right: Solution cards grid */}
                    <div className="space-y-2">
                        <div className="solutions-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-12 sm:gap-y-8">
                            <img src={InsightHeroImage} alt="Insight Hero" className="w-full h-[220px] rounded-2xl" />
                            {insights.map((item, i) => (
                                <InsightsCard key={i} item={item} index={i} />
                            ))}
                        </div>
                        <div className="text-right">
                            <LearnMore href='#' index={0} text="Read All Insights" />
                        </div>
                    </div>
                </div>


                <InsightsCarousel />
            </div>
        </section>
    );
}
