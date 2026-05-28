import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ── Location card data ───────────────────────────────────── */
interface LocationItem {
    id: number;
    title: string;
    description: string;
}

interface SiteMapItem {
    id: number;
    title: string;
    Links: {
        name: string;
        href: string;
    }[];
}

const locations: LocationItem[] = [
    {
        id: 1,
        title: 'London',
        description: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom."
    },
    {
        id: 2,
        title: 'Dubai',
        description: "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates"
    },
    {
        id: 3,
        title: 'London',
        description: "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India"
    },
];

const siteMapItems: SiteMapItem[] = [
    {
        id: 1,
        title: "Solutions",
        Links: [
            { name: "Core Banking CB7", href: "#banking" },
            { name: "Digital Banking N7", href: "#digital" },
            { name: "Open Banking", href: "#open-banking" },
            { name: "Loan Origination System", href: "#loan-origination" },
            { name: "Loan Management System", href: "#loan-management" },
            { name: "Digital Transformation", href: "#digital-transformation" }
        ]
    },
    {
        id: 2,
        title: "N7 Banking",
        Links: [
            { name: "About Us", href: "#about" },
            { name: "Solutions", href: "#solutions" },
            { name: "Contact", href: "#contact" },
            { name: "Company", href: "#company" },
            { name: "Careers", href: "#careers" },
            { name: "Insights", href: "#insights" },
            { name: "Core Team", href: "#core-team" },
            { name: "Brand Center", href: "#brand-center" }
        ]
    },
    {
        id: 3,
        title: "Our Socials",
        Links: [
            { name: "LinkedIn", href: "#" },
            { name: "X", href: "#" },
        ]
    }
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

/* ── LocationCard component ───────────────────────────────── */
function LocationCard({ item, index }: { item: LocationItem; index: number }) {
    return (
        <motion.div
            className="relative rounded-2xl justify-between transition-all 0.4s cubic-bezier(0.4, 0, 0.2, 1);"
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
            <p className="text-sm leading-[1.7] text-n7-text-muted mb-5">
                {item.description}
            </p>

        </motion.div>
    );
}


/* ── SiteMapCard component ───────────────────────────────── */
function SiteMapCard({ item, index }: { item: SiteMapItem; index: number }) {
    return (
        <motion.div
            className="relative rounded-2xl justify-between transition-all 0.4s cubic-bezier(0.4, 0, 0.2, 1);"
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

            {/* Links */}
            <ul className="space-y-2">
                {item.Links.map((link, i) => (
                    <li key={i}>
                        <a
                            href={link.href}
                            className="flex w-full items-center justify-between gap-2 text-sm  hover:text-n7-accent-hover transition-colors duration-300"
                        >
                            {link.name} <ArrowRight className="text-n7-accent" size={14} />
                        </a>
                    </li>
                ))}
            </ul>

        </motion.div>
    );
}

/* ── Footer section ────────────────────────────────────── */
export default function Footer() {
    return (
        <section
            id="solutions"
            className="pb-20 bg-n7-bg relative"
        >
            <div className="max-w-[1240px] mx-auto px-8 space-y-20">
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] items-start">
                    <motion.div
                        className="text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-[12rem] md:text-[16rem] font-semibold leading-1.2 tracking-[-0.02em] text-gradient-primary mb-8">
                            N7
                        </h2>
                    </motion.div>

                    {/* Right: Location cards and Site Map grid */}
                    <div className="space-y-12">
                        <div className="solutions-cards-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-x-12 sm:gap-y-8">
                            {locations.map((item, i) => (
                                <LocationCard key={i} item={item} index={i} />
                            ))}
                        </div>
                        <div className="solutions-cards-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-x-12 sm:gap-y-8">
                            {siteMapItems.map((item, i) => (
                                <SiteMapCard key={i} item={item} index={i} />
                            ))}
                        </div>
                        <div>
                            <p className="text-xs text-n7-text-muted">
                                Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
