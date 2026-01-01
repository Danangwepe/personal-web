import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-12 bg-background border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
