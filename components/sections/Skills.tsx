"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Python", src: "/skills/python.svg" },
    { name: "TensorFlow", src: "/skills/tensorflow.svg" },
    { name: "PyTorch", src: "/skills/pytorch-icon.svg" },
    { name: "ONNX", src: "/skills/onnx.svg" },
    { name: "Scikit-Learn", src: "/skills/scikit-learn.svg" },
    { name: "Pandas", src: "/skills/pandas-icon.svg" },
    { name: "NumPy", src: "/skills/numpy.svg" },
    { name: "JavaScript", src: "/skills/javascript.svg" },
    { name: "React", src: "/skills/react.svg" },
    { name: "Next.js", src: "/skills/nextjs-icon.svg" },
    { name: "TypeScript", src: "/skills/typescript-icon.svg" },
    { name: "Tailwind CSS", src: "/skills/tailwindcss-icon.svg" },
    { name: "Node.js", src: "/skills/nodejs-icon.svg" },
    { name: "Git", src: "/skills/git-icon.svg" },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
    return (
        <div className="relative w-full overflow-hidden py-6 flex">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-14 items-center whitespace-nowrap min-w-full"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: 20, // 🔥 faster speed
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center justify-center cursor-pointer"
                    >
                        <div
                            className="
                                flex items-center justify-center
                                w-16 h-16 
                                sm:w-18 sm:h-18
                                md:w-20 md:h-20
                                lg:w-24 lg:h-24
                                bg-white/5 border border-white/10 rounded-2xl
                                group-hover:border-primary/50
                                group-hover:bg-primary/10
                                group-hover:shadow-[0_0_15px_rgba(0,240,255,0.35)]
                                transition-all duration-300
                            "
                        >
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="
                                    w-8 h-8
                                    sm:w-9 sm:h-9
                                    md:w-11 md:h-11
                                    lg:w-14 lg:h-14
                                    object-contain
                                    grayscale opacity-70
                                    group-hover:grayscale-0
                                    group-hover:opacity-100
                                    group-hover:scale-110
                                    transition-all duration-300
                                "
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Tools & Tech Stack
                </h2>
                <p className="text-gray-400 max-w-lg">
                    My weapon of choice for learning, experimenting, and building intelligent systems.
                </p>
            </div>

            {/* 🔽 gap dikurangi */}
            <div className="flex flex-col gap-1 md:gap-2">
                <MarqueeRow />
                <MarqueeRow reverse />
            </div>
        </section>
    );
}
