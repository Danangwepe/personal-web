"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission
        console.log(formState);
        alert("Message sent! (Demo)");
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
                        <p className="text-gray-400">Have a project in mind or just want to discuss AI? Send me a message.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs bg-[#0a0a0a] px-1 peer-focus:px-1"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs bg-[#0a0a0a] px-1"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={5}
                                className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Message"
                                required
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs bg-[#0a0a0a] px-1"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
