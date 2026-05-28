import { motion } from 'framer-motion';

export default function HelloStrip() {
    const items = Array(2).fill(
        <>
            <span className="text-n7-text-muted">✳</span>
            <span className="text-gradient-primary"> N7 </span>
            <span className="text-n7-text-muted">✳</span>
            <span> Say 👋 to the new way of banking </span>
            <span className="text-n7-text-muted">✳</span>
            <span className="text-gradient-primary"> CB7 </span>
            <span className="text-n7-text-muted">✳</span>
            <span> Say 👋 to the new way of banking </span>
        </>
    );

    return (
        <section className="relative z-10 w-full overflow-hidden bg-white">
            <motion.div
                className="flex w-max items-center whitespace-nowrap py-4"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 px-6 text-4xl font-black text-black"
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}