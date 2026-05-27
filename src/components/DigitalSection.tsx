import { motion } from 'framer-motion';
import iphone1 from '../assets/images/digital/iPhone 13 Pro-1.png';
import iphone2 from '../assets/images/digital/iPhone-13-Pro-2.png';
import iphone3 from '../assets/images/digital/iPhone 13 Pro-3.png';


import "../assets/css/banking-style.css";
import LearnMore from './common/LearnMore';

const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const regulatoryRequirements: string[] = [
    "Pre-integrated Security System",
    "Fully Compliant With Regulatory Requirement",
    "Digitally Connected Core"
]

const noLegacyITSystems: string[] = [
    "Adaptive & Intelligent API monetization",
    "Ambient User Experience",
    "Cloud-native With lower TCO"
]

const noTraditionalBranches: string[] = [
    "Branchless & Paperless Banking",
    "Digital Transformation Capability",
    "Optimized, Adoptable and Scalable"
]


/* ── Digital section ────────────────────────────────────── */
export default function DigitalSection() {
    return (
        <section
            id="digital"
            className="bg-n7-bg-secondary pt-[100px] pb-2 relative"
        >
            <div className="max-w-[1240px] mx-auto px-8 space-y-20">
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-[100px] items-start justify-between">
                    {/* Left: Heading + CTA (sticky on desktop) */}
                    <motion.div
                        className="solutions-heading lg:sticky lg:top-[120px] text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* <span className="banking-watermark">N7</span> */}
                        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text-inverted mb-8">
                            Digital banking out-of-the-box
                        </h2>
                        <p className="text-n7-text-dim">
                            N7 helps your financial institution improve the client experience, automate and optimize procedures
                        </p>

                        <div className="mt-8 flex flex-col items-center md:items-start gap-4">
                            <a href="#request-demo" className="btn-primary btn-primary-sm" id="hero-cta-demo">
                                Request Demo
                            </a>
                            <LearnMore href={"#"} index={0} />
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col-reverse items-center md:flex-row gap-6 my-2 text-left">
                            <img src={iphone1} alt="iPhone 13 Pro" />

                            <div className="text-n7-text-inverted space-y-4">
                                <h1 className="text-xl">Fully compliant with regulatory requirement</h1>
                                <p className="text-n7-text-dim">
                                    The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.
                                </p>
                                <ul className="check-list mt-4 space-y-2 text-n7-text-muted">
                                    {regulatoryRequirements.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:flex-row gap-6 my-2 text-left">
                            <div className="text-n7-text-inverted space-y-4">
                                <h1 className="text-xl">No legacy IT systems</h1>
                                <p className="text-n7-text-dim">
                                    Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                                </p>
                                <ul className="check-list mt-4 space-y-2 text-n7-text-muted">
                                    {noLegacyITSystems.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <img src={iphone2} alt="iPhone 13 Pro" />
                        </div>
                        <div className="flex flex-col-reverse items-center md:flex-row gap-6 my-2 text-left">
                            <img src={iphone3} alt="iPhone 13 Pro" />

                            <div className="text-n7-text-inverted space-y-4">
                                <h1 className="text-xl">No traditional branches</h1>
                                <p className="text-n7-text-dim">
                                    Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’
                                </p>
                                <ul className="check-list mt-4 space-y-2 text-n7-text-muted">
                                    {noTraditionalBranches.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] justify-between items-center bg-[#031E2A] p-8 rounded-2xl relative overflow-hidden">
                    {/* Left: Heading + CTA (sticky on desktop) */}
                    <span className="absolute inset-0 flex justify-center font-heading text-[24rem] leading-[0.9] tracking-[-0.08em] text-transparent pointer-events-none z-0 banking-watermark-stripe">
                        CB7
                    </span>
                    <motion.div
                        className="solutions-heading relative z-10 text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-8">
                            Take the full advantage of going paper-less now.
                        </h2>
                        <p>N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations  </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 flex items-center gap-4 flex-wrap justify-center"
                    >
                        <a href="#contact" className="btn-outline" id="hero-cta-contact">
                            Contact Us
                        </a>
                        <a href="#request-demo" className="btn-primary btn-primary-sm" id="hero-cta-demo">
                            Request Demo
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
