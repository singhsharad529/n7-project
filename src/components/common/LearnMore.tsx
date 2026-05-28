import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function LearnMore({ href = "#", index = 0, text = "Learn More" }: { href?: string, index: number, text?: string }) {
    const underlined = text.slice(0, 4);
    const remaining = text.slice(4);

    return (
        <motion.a
            href={href}
            className="learn-more-link"
            id={`learn-more-${index}`}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <span>
                <span className="underline underline-offset-4">
                    {underlined}
                </span>
                {remaining}
            </span><ArrowRight size={14} />
        </motion.a>
    )
}

export default LearnMore