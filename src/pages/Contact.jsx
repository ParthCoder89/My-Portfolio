import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="p-10 bg-lightBg dark:bg-black min-h-screen flex flex-col items-center justify-between">
            {/* Main Content */}
            <div className="w-full flex flex-col items-center">
                {/* Heading */}
                <h1 className=" text-center  text-6xl md:text-6xl font-extrabold text-green-300/20 select-none mb-16">
                    Contact Me
                </h1>
                <h2 className="text-4xl font-bold text-center text-black dark:text-white -mt-24">
                    Contact Me
                </h2>

                {/* Contact Circles */}
                <div className="flex flex-wrap justify-center gap-10 mt-20">
                    {/* Address */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center text-2xl text-green-700 dark:text-green-300 mb-2 shadow-lg">
                            <FaMapMarkerAlt />
                        </div>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-3">
                            Budaun, UP, India
                        </p>
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center text-2xl text-green-700 dark:text-green-300 mb-2 shadow-lg">
                            <FaPhoneAlt />
                        </div>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-3">
                            +91-8923725041
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center text-2xl text-green-700 dark:text-green-300 mb-2 shadow-lg">
                            <FaEnvelope />
                        </div>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-3">
                            parthgupta5041@gmail.com
                        </p>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center text-2xl text-green-700 dark:text-green-300 mb-2 shadow-lg">
                            <FaLinkedin />
                        </div>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-3">
                            Parth Vaish
                        </p>
                    </div>

                    {/* GitHub */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center text-2xl text-green-700 dark:text-green-300 mb-2 shadow-lg">
                            <FaGithub />
                        </div>
                        <p className="text-center text-gray-700 dark:text-gray-300 mt-3">
                            ParthCoder89
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
                <p className="text-gray-600 dark:text-gray-400">
                    © 2025 Parth Vaish. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
