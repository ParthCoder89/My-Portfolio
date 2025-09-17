import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const roles = ["Frontend Developer", "IoT Developer", "Video Editor"];
    const [index, setIndex] = useState(0);

    // Change role every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-10 text-center bg-lightBg dark:bg-black min-h-screen flex flex-col items-center justify-center transition-colors duration-500">
            {/* Heading */}
            <h1 className=" text-6xl md:text-6xl font-extrabold text-green-400/20 select-none mb-20">
                Welcome to My Portfolio
            </h1>
            <h2 className="text-5xl font-extrabold text-blue-500 -mt-28 mb-12">
                Welcome to My Portfolio
            </h2>

            {/* Name */}
            <h3 className="text-3xl font-semibold text-lightAccent dark:text-white mb-6">
                I am <span className="text-4xl text-green-500">Parth Vaish</span>
            </h3>

            {/* Animated Roles */}
            <div className="h-10 mb-6 overflow-hidden relative w-full flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={roles[index]}
                        className="text-xl font-medium text-gray-700 dark:text-gray-300 absolute"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="text-black dark:text-white">I am </span>{roles[index]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Subtitle */}
            <h4 className="text-2xl font-bold text-lightAccent dark:text-white mb-8">
                Developer and Engineer
            </h4>

            {/* Buttons */}
            <div className="flex space-x-6">
                <a
                    href="https://www.linkedin.com/in/parth-vaish-46b51533a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/ParthCoder89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition"
                >
                    GitHub
                </a>
            </div>
            <footer className="w-full text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
                <p className="text-gray-600 dark:text-gray-400">
                    © 2025 Parth Vaish. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
