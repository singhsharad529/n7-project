import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InsightHeroImage from "../assets/images/insights/hero-image.png";
import LearnMore from './common/LearnMore';

/* ── Carousel data ───────────────────────────────────── */
interface CarouselItem {
    id: number;
    name: string;
    icon: string;
    heading: string;
    subheading: string;
}

const carouselData: CarouselItem[] = [
    {
        id: 1,
        name: 'SHELLS',
        icon: '◎',
        heading: 'How we help SHELLS reach out to more people',
        subheading: 'Digital transformation solutions for seamless banking experience'
    },
    {
        id: 2,
        name: 'SmartFinder',
        icon: '◈',
        heading: 'How we help SmartFinder reach out to more people',
        subheading: 'Innovative fintech solutions for modern banking needs'
    },
    {
        id: 3,
        name: 'Zoomery',
        icon: '◆',
        heading: 'How we help Zoomery reach out to more people',
        subheading: 'Advanced technology for customer engagement'
    },
    {
        id: 4,
        name: 'ArtVenue',
        icon: '◇',
        heading: 'How we help ArtVenue reach out to more people',
        subheading: 'Creative solutions for financial institutions'
    },
    {
        id: 5,
        name: 'kontrastr',
        icon: '◉',
        heading: 'How we help kontrastr reach out to more people',
        subheading: 'Contrast-driven design meets powerful functionality'
    },
    {
        id: 6,
        name: 'WAVEMARATHON',
        icon: '◊',
        heading: 'How we help WAVEMARATHON reach out to more people',
        subheading: 'Marathon-pace innovation for continuous growth'
    },
];

/* ── Animation variants ───────────────────────────────────── */
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};


/* ── InsightsCarousel component ───────────────────────────────── */
export default function InsightsCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideIn = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + carouselData.length) % carouselData.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    const handlePrev = () => slideIn(-1);
    const handleNext = () => slideIn(1);

    return (
        <div className="w-full bg-n7-bg relative space-y-8">
            <div className="text-center">
                <h1 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)]">Our Case Studies</h1>
            </div>
            <div className="max-w-[1240px] mx-auto">
                {/* Carousel Container */}
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] items-center bg-[#031E2A] p-8 rounded-2xl relative overflow-hidden">
                    {/* Left: Image */}
                    <motion.div
                        className="solutions-heading relative z-20 text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img
                            src={InsightHeroImage}
                            alt="Insight Hero"
                            className="w-full h-[300px] rounded-2xl object-cover"
                        />
                    </motion.div>

                    {/* Right: Dynamic Content */}
                    <div className="relative z-10 min-h-[300px] flex flex-col justify-between">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                className="relative z-10"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'tween', duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                                    opacity: { duration: 0.6 },
                                }}
                            >
                                <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-6">
                                    {carouselData[current].heading}
                                </h2>

                                <div className="flex items-center gap-2 text-n7-text-muted">
                                    <p className="text-4xl">
                                        {carouselData[current].icon}
                                    </p>
                                    <p className="font-bold">
                                        {carouselData[current].name}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className='flex flex-wrap justify-between items-center gap-4'>
                            <div className="flex items-center justify-start gap-6">
                                {/* Previous Button */}
                                <motion.button
                                    onClick={handlePrev}
                                    className="rounded-full p-2 border border-n7-accent transition-colors duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronLeft size={20} className="text-n7-accent" />
                                </motion.button>

                                {/* Indicator Strips */}
                                <div className="flex items-center gap-2">
                                    {carouselData.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className="h-2 rounded-full transition-all duration-300 hover:opacity-80"
                                            animate={{
                                                width: current === index ? 32 : 8,
                                                backgroundColor:
                                                    current === index
                                                        ? '#00B4FD'
                                                        : '#2a2838',
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                        />
                                    ))}
                                </div>

                                {/* Next Button */}
                                <motion.button
                                    onClick={handleNext}
                                    className="rounded-full p-2 border border-n7-accent transition-colors duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={20} className="text-n7-accent" />
                                </motion.button>
                            </div>

                            <LearnMore href='#' index={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
