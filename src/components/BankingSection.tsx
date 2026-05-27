import { motion } from 'framer-motion';
import bankingImage1 from '../assets/banking/image 3.png';
import bankingImage2 from '../assets/banking/Mask group.png';

import "../assets/css/banking-style.css";

const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const bankingFeatures1: string[] = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
]

const bankingFeatures2: string[] = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",

]


/* ── Banking section ────────────────────────────────────── */
export default function BankingSection() {
    return (
        <section
            id="banking"
            className="pt-[100px] pb-20 bg-n7-bg relative"
        >
            <div className="max-w-[1240px] mx-auto px-8 space-y-20">
                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] justify-between items-center">
                    {/* Left: Heading + CTA (sticky on desktop) */}
                    <motion.div
                        className="solutions-heading text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-8">
                            A complete cloud-based core banking.

                        </h2>
                        <p>Faster time to market with our cloud-based core banking services</p>

                        <a href="#request-demo" className="my-4 btn-primary btn-primary-sm" id="hero-cta-demo">
                            Request Demo
                        </a>
                    </motion.div>

                    <div className="banking-image-wrapper">
                        <img
                            src={bankingImage1}
                            alt="Banking overview"
                            className="banking-image block max-w-none h-auto object-cover mr-0 lg:mr-[-20%]  w-[360px] md:w-[560px] lg:w-[760px] opacity-80 rounded-2xl"
                        />
                    </div>
                </div>

                <div className="solutions-layout grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-[60px] justify-between items-center">
                    {/* Left: Heading + CTA (sticky on desktop) */}

                    <div className="relative w-full flex flex-start items-center overflow-visible justify-center xl:justify-start">
                        <img
                            src={bankingImage2}
                            alt="Banking overview"
                            className="block max-w-none h-auto object-cover mr-0 ml-0 lg:ml-[-80%] w-[360px] md:w-[560px] lg:w-[760px] rounded-2xl opacity-80"
                        />
                    </div>

                    <motion.div
                        className="solutions-heading text-center lg:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-1.2 tracking-[-0.02em] text-n7-text mb-8">
                            Run a more efficient, flexible,and digitally connected corebanking system
                        </h2>
                        <p>What you will get:</p>

                        <div className="flex flex-col md:flex-row gap-6 my-2 text-left">
                            <ul className="check-list mt-4 space-y-2 text-n7-text-muted">
                                {bankingFeatures1.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <ul className="check-list mt-4 space-y-2 text-n7-text-muted">
                                {bankingFeatures2.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
