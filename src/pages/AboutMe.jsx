import Myphoto from "../assets/myphoto.jpg"
export default function AboutMe() {
    return (
        <div className="p-10 bg-lightBg dark:bg-black min-h-screen transition-colors duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Photo & Basic Info */}
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    {/* Profile Photo */}
                    <img
                        src={Myphoto} // 👈 apni photo ka link yaha daal dena
                        alt="Parth Vaish"
                        className="w-48 mb-12 h-48 rounded-full shadow-lg object-cover"
                        style={{ border: "4px solid green" }}
                    />
                    {/* Name */}
                    <h2 className="text-2xl font-bold text-blue-600 dark:text-white">
                        Parth Vaish
                    </h2>
                    {/* Job Role */}
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        Frontend,IoT Developer & Video Editor
                    </p>
                    {/* Address */}
                    <p className="text-gray-600 dark:text-gray-400">Buduan, Uttar Pradesh</p>
                    {/* Gmail */}
                    <p className="text-gray-600 dark:text-gray-400">parthgupta5041@gmail.com</p>
                </div>

                {/* Right Side - About & Details */}
                <div className="mr-20">
                    {/* Heading */}
                    <h1 className=" text-6xl md:text-6xl font-extrabold text-green-300/20 select-none mb-20">
                        About Me
                    </h1>
                    <h2 className="text-4xl ml-10 font-bold text-lightAccent dark:text-green-600 -mt-28">
                        About Me
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-12 mb-8">
                        I am a passionate Computer Science student exploring the world of technology and innovation. With a strong interest in Frontend Development, I enjoy creating responsive and user-friendly web applications. I also have hands-on experience in IoT projects, integrating sensors, ESP32, and cloud platforms to build smart solutions. Apart from coding, I love Video Editing, which allows me to bring creativity into my work. My ultimate goal is to become a versatile Developer and Engineer, contributing to impactful real-world solutions.
                    </p>

                    {/* Details */}
                    <div className="space-y-6">
                        {/* Profile */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                Profile:
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Frontend Developer
                            </p>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                Education:
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Bachelor of Technology (Pursuing)
                            </p>
                        </div>

                        {/* Programming */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                Programming:
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                C, Java, JavaScript
                            </p>
                        </div>


                        {/* Other Skills */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                Other Skills:
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Iot, Video Editing, Cloud (ThingsBoard Demo)
                            </p>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                Languages:
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">English, Hindi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
