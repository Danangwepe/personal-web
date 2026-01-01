"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    link,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    link?: string;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>

                {link && (
                    <Link
                        href={link}
                        className="mt-4 flex items-center text-primary text-sm font-medium hover:underline"
                    >
                        View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export function Projects() {
    const items = [
        {
            title: "Machine Learning Exploration",
            description:
                "A personal learning project focused on experimenting with supervised and unsupervised learning methods using sample datasets.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
            ),
            icon: (
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                    <Github className="w-4 h-4 text-primary" />
                </div>
            ),
            className: "md:col-span-2",
            link: "#",
        },
        {
            title: "Data Analysis Playground",
            description:
                "Exploring data preprocessing, visualization, and simple insights using Python-based data analysis tools.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
            ),
            icon: (
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                    <Github className="w-4 h-4 text-primary" />
                </div>
            ),
            className: "md:col-span-1",
            link: "#",
        },
        {
            title: "Neural Network Experiments",
            description:
                "Small-scale experiments with neural networks to understand model behavior, training dynamics, and performance evaluation.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
            ),
            icon: (
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                    <Github className="w-4 h-4 text-primary" />
                </div>
            ),
            className: "md:col-span-1",
            link: "#",
        },
        {
            title: "AI & Data Science Portfolio",
            description:
                "A growing collection of mini projects, notes, and experiments created while learning AI, machine learning, and data science.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
            ),
            icon: (
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                    <Github className="w-4 h-4 text-primary" />
                </div>
            ),
            className: "md:col-span-2",
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
                    Featured Projects
                </h2>

                <BentoGrid>
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                            link={item.link}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
