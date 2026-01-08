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
        <div className="relative w-full overflow-hidden py-4 md:py-6 flex">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
                className="
                    flex items-center whitespace-nowrap min-w-full
                    gap-8 sm:gap-10 md:gap-14
                "
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center"
                    >
                        {/* ICON */}
                        <div
                            className="
                                flex items-center justify-center
                                w-14 h-14
                                sm:w-16 sm:h-16
                                md:w-20 md:h-20
                                lg:w-24 lg:h-24
                                bg-card/50 border border-border rounded-2xl
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
                                    w-7 h-7
                                    sm:w-8 sm:h-8
                                    md:w-11 md:h-11
                                    lg:w-14 lg:h-14
                                    object-contain
                                    grayscale opacity-70
                                    group-hover:grayscale-0
                                    group-hover:opacity-100
                                    group-hover:scale-110
                                    transition-all duration-300
                                    dark:invert-0 invert
                                "
                            />
                        </div>

                        {/* Skill name */}
                        <span
                            className="
                                mt-2
                                text-[11px] sm:text-xs md:text-sm
                                font-medium
                                text-foreground
                                bg-background/80 backdrop-blur
                                px-3 py-1 rounded-full
                                border border-border
                                shadow-sm
                                opacity-0 translate-y-1
                                group-hover:opacity-100
                                group-hover:translate-y-0
                                transition-all duration-200
                                pointer-events-none
                            "
                        >
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                    Tools & Tech Stack
                </h2>
                <p className="text-muted-foreground max-w-lg">
                    My weapon of choice for learning, experimenting, and building intelligent systems.
                </p>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
                <MarqueeRow />
                <MarqueeRow reverse />
            </div>
        </section>
    );
}
