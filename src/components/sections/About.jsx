import { RevealOnScreen } from "../RevealOnScreen"

export const About = () => {

    const FrontendSkills = [
        "ReactJs", 
        "HTML", 
        "TailwindCSS",
        "Bootstrap",
        "JavaScript"
    ];

    const BackendSkills = [ "php", "Laravel", "MySQL"];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScreen>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    {" "}
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web
                        application and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((tech, key) => (
                                    <span
                                    key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((tech, key) => (
                                    <span
                                    key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Multimedia</strong> - SMK Telekomunikasi Darul Ulum Jombang (2021-2023)
                            </li>
                            <li>
                                <strong>Technology Information</strong> -Brawijaya University (2023-now)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                        <div>
                                <h4 className="font-bold">
                                    {" "}
                                    Master Control Room at Citra Tv Lamongan (2022)</h4>
                                <p>
                                monitor broadcast transmission, manage playback schedule, ensure audio-video quality, and handle on-air technical issues.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold">
                                    {" "}
                                    Editor at HaqMedia (2022-2023)</h4>
                                <p>
                                    photograph, record and edit video for boarding school media content.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold">
                                    {" "}
                                    Editor at QofMedia (2024-Now)</h4>
                                <p>
                                    manage qofmedia social media accounts, design media creative content, and edit video content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </RevealOnScreen>
        </section>
    );
};