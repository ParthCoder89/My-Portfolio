export default function Achievements() {
    return (
        <div className="relative p-10 bg-lightBg dark:bg-black min-h-screen flex flex-col items-center justify-center">
            {/* Background Large Text */}
            <h1 className="relative top-4 text-5xl md:text-7xl font-extrabold text-green-400/20 select-none ">
                ACHIEVEMENTS
            </h1>

            {/* Foreground Heading */}
            <h2 className="relative top-2 text-3xl md:text-5xl font-bold text-green-600 dark:text-green-400">
                Achievements
            </h2>

            {/* Achievements List */}
            <ul className=" space-y-4 text-lg text-gray-700 dark:text-gray-300 mt-12 md:mt-10 ">
                <li className="hover:text-green-600 dark:hover:text-green-400 transition">
                    <span className="font-bold">Secured Top 10 position</span> in the Internal Hackathon by solving the problem of Real-Time Public Transport Tracking for small cities using IoT sensors (ESP32, GPS, FSR).
                </li>
                <li className="hover:text-green-600 dark:hover:text-green-400 transition">
                    <span className="font-bold">Developed a Smart EV Charge Monitoring Device</span> using ESP32, PZEM-004T, DHT22, OLED, and relay to solve the problem of efficient energy monitoring and control.
                </li>
                <li className="hover:text-green-600 dark:hover:text-green-400 transition">
                    <span className="font-bold">Presented Pascal’s Law-based JCB Model</span> in an International Conference to solve real-world hydraulic mechanism problems with a cost-effective working prototype.
                </li>
                <li className="hover:text-green-600 dark:hover:text-green-400 transition">
                    <span className="font-bold">Achieved 7th Rank in Uttar Pradesh</span> (State Level) and 1st Rank in Bareilly Division in Class 12th – showcasing problem-solving ability, consistency, and dedication in academics.
                </li>

            </ul>
            <footer className="w-full text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
                <p className="text-gray-600 dark:text-gray-400">
                    © 2025 Parth Vaish. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
