"use client";

import { Footer } from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ExternalLink, Eye, Sparkles, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// 1. Tipe data PDF dihapus
type Certificate = {
    title: string;
    issuer: string;
    date: string;
    image: string;
};

// 2. Data PDF dihapus dari array
const certificates: Certificate[] = [
    {
        title: "Data Science Bootcamp",
        issuer: "Digital Skola",
        date: "27 Aug 2025",
        image: "/sertifikat/Bootcamp Digital Skola.png",
    },
    {
        title: "Associate Data Scientist",
        issuer: "BNSP",
        date: "17 Des 2025",
        image: "/sertifikat/BNSP.jpg",
    },
    {
        title: "Fundamental Datasbase MySQL",
        issuer: "Coding Studio",
        date: "22 Jan 2025",
        image: "/sertifikat/MYSQL.jpg",
    },
    {
        title: "Fundamental Frontend Web",
        issuer: "Coding Studio",
        date: "12 Jan 2025",
        image: "/sertifikat/Frontend.jpg",
    },
    {
        title: "Memulai Pemrograman dengan Python",
        issuer: "Dicoding",
        date: "14 Mei 2025",
        image: "/sertifikat/Python.jpg",
    },
];

export default function CertificatesPage() {
    const [activeCert, setActiveCert] = useState<Certificate | null>(null);

    return (
        <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10 pointer-events-none rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] -z-10 pointer-events-none rounded-full" />


            {/* CONTENT */}
            <section className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                        <Sparkles size={16} />
                        <span>Professional Milestones</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading">
                        Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Awards</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        A validated collection of my expertise and continuous learning journey in Data Science, AI, and Machine Learning domains.
                    </p>
                </motion.div>

                {/* GRID GALLERY */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            onClick={() => setActiveCert(cert)}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/60 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full"
                        >
                            {/* IMAGE WRAPPER */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-muted/50 m-2 rounded-[1.5rem] border border-border/30">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="bg-background/80 backdrop-blur-md text-foreground px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <Eye size={16} className="text-primary" /> View Certificate
                                    </span>
                                </div>
                            </div>

                            {/* CARD CONTENT */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <User size={14} className="text-primary/70" />
                                        <span className="font-medium truncate max-w-[120px]">{cert.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-primary/70" />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />

            {/* MODAL / LIGHTBOX (YANG DIPERBAIKI) */}
            <AnimatePresence>
                {activeCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setActiveCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            // PERUBAHAN 1: Layout Stack (flex-col) dan max-width disesuaikan
                            className="relative bg-background w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setActiveCert(null)}
                                className="absolute top-4 right-4 z-50 bg-black/50 backdrop-blur text-white p-2 rounded-full hover:bg-destructive transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* PERUBAHAN 2: IMAGE AREA (Sangat Besar & Full Width) */}
                            <div className="relative w-full h-[65vh] bg-muted/20 flex items-center justify-center p-4 md:p-8 bg-grid-pattern-sm">
                                {/* Container gambar agar tidak terlalu mepet */}
                                <div className="relative w-full h-full shadow-2xl shadow-black/20 rounded-2xl overflow-hidden border border-border/50 bg-background">
                                    <Image
                                        src={activeCert.image}
                                        alt={activeCert.title}
                                        fill
                                        className="object-contain" // object-contain agar seluruh sertifikat terlihat utuh
                                    />
                                </div>
                            </div>

                            {/* PERUBAHAN 3: DETAILS AREA (Di bawah gambar, Tombol Download dihapus) */}
                            <div className="w-full bg-card p-6 md:p-8 border-t border-border">
                                <div className="mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-foreground">
                                        {activeCert.title}
                                    </h2>

                                    {/* Info Grid yang lebih rapi */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border/50">
                                            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/20 text-primary">
                                                <ExternalLink size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Issuer</p>
                                                <p className="text-sm font-bold text-foreground">{activeCert.issuer}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border/50">
                                            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/20 text-primary">
                                                <Calendar size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Date Issued</p>
                                                <p className="text-sm font-bold text-foreground">{activeCert.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Tombol Download PDF telah dihapus dari sini */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}