import Transit from "../assets/transit.png"
import Meter from "../assets/meter.jpg"
import Converter from "../assets/converter.jpg"
import Portfolio from "../assets/portfolio.png"
const projects = [
    {
        name: "Smart Transit System",
        image: Transit, // 👈 yaha project ki image ka link lagana
        link: "https://transit-system.onrender.com",
        description:
            "We identified the major challenge faced in small cities where public transport users struggle with the lack of real-time information about bus locations, availability, and seat occupancy. To address this, our team designed a prototype system that ensures commuters can easily track buses, check seat availability, and plan their journeys more efficiently. This solution reduces waiting time, improves passenger convenience, and enhances overall public transport reliability for smaller urban areas.",
    },
    {
        name: "Smart EV Charge Monitoring Device",
        image: Meter,
        link: "",
        description:
            "With the rise of electric vehicles, one major challenge is ensuring safe and efficient charging. Traditional charging setups do not provide real-time insights into charging status, energy usage, or potential faults. To address this issue, we developed a Smart EV Charge Monitoring Device that continuously tracks charging parameters, detects anomalies, and allows controlled relay switching. This ensures safer charging, prevents energy wastage, and helps users better manage their EV’s battery health while improving overall charging efficiency.",
    },
    {
        name: "Number System Converter",
        image: Converter,
        link: "https://numbersystemconvertercalculator.netlify.app/",
        description:
            "Many students and developers struggle with converting numbers between different systems (binary, decimal, octal, hexadecimal) and performing calculations accurately across these systems. Manual conversions are time-consuming and prone to errors, especially for large numbers or complex calculations. To solve this problem, I developed a Number System Converter that allows users to input numeric values, perform calculations, and instantly convert between different number systems. This tool enhances efficiency, reduces mistakes, and makes learning or working with multiple number systems much easier.",
    },
    {
        name: "My Portfolio Website",
        image: Portfolio,
        link: "https://your-evproject-link.com",
        description:
            "Many students and aspiring developers face the challenge of presenting their projects, skills, and achievements in a professional and interactive way. A well-organized portfolio helps showcase capabilities, experience, and personal branding, but building one can be time-consuming and technically challenging. To solve this, I created a responsive Portfolio Website using React, Vite, and TailwindCSS that features multiple sections including Home, About Me, Skills, Achievements, Projects, and Contact. This solution effectively highlights my skills, projects, and accomplishments, providing a polished digital presence for potential recruiters or collaborators.",
    },
];

export default function Projects() {
    return (
        <div className="p-10 bg-lightBg dark:bg-black min-h-screen">
            {/* Heading */}
            <h1 className=" text-center  text-6xl md:text-6xl font-extrabold text-green-400/20 select-none mb-16">
                Projects
            </h1>
            <h2 className="text-4xl font-bold text-center text-lightAccent dark:text-green-600 -mt-20 ">
                Projects
            </h2>

            <div className="flex flex-wrap gap-20 justify-center mt-28">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-[35vw] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                    >
                        {/* Project Image */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-72 object-cover transform hover:scale-110 transition duration-500"
                                />
                            </div>
                        </a>

                        {/* Project Details */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
