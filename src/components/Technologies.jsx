import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostgresql, SiDjango, SiDocker, SiFlask } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="pb-24 overflow-hidden relative">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>

            {/* Wrapping the icons inside two containers for sliding effect */}
            <div className="sliding-track flex items-center gap-9">
                {/* Duplicate the icons to create an infinite loop */}
                <div className="flex items-center gap-9">
                    <IconList />
                </div>
                <div className="flex items-center gap-8">
                    <IconList />
                </div>
            </div>
        </div>
    );
};

const IconList = () => (
    <>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.7)}>
            <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.9)}>
            <SiPostgresql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.8)}>
            <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.6)}>
            <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.7)}>
            <FaJsSquare className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.4)}>
            <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.9)}>
            <FaPython className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.3)}>
            <SiDjango className="text-7xl text-green-700" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
            <SiDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.7)}>
            <SiFlask className="text-7xl text-white" />
        </motion.div>
    </>
);

export default Technologies;
