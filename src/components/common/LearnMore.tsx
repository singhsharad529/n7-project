import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function LearnMore({ href = "#", index = 0 }: { href?: string, index: number }) {
    return (
        <motion.a
            href={href}
            className="learn-more-link"
            id={`learn-more-${index}`}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <span className="underline underline-offset-4">Learn</span> More <ArrowRight size={14} />
        </motion.a>
    )
}

export default LearnMore