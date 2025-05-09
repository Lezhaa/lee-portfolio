import { RevealOnScreen } from "../RevealOnScreen"

export const Project = () => {
    return (
        <section 
            id="project" 
            className="min-h-screen flex items-central justify-center py-20"
        >
            <RevealOnScreen>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    {" "}
                    Featured Projects 
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] text-left transition-all">
                        <h3 className="text-xl font-bold mb-2"> Project 1 </h3>
                        <p className="text-gray-400 mb-4">
                            Tempor est ad aliquip mollit et elit veniam nulla dolore eu sit magna amet. Incididunt labore anim voluptate consectetur pariatur incididunt do labore irure esse. Consequat tempor in nostrud officia aliquip velit esse laboris culpa.
                        </p>
                        <div>
                            {["React"].map((tech, key) => (
                                <span
                                key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-beetwen items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                {" "}
                                View Project → </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] text-left transition-all">
                        <h3 className="text-xl font-bold mb-2"> Project 2 </h3>
                        <p className="text-gray-400 mb-4">
                            Aute enim reprehenderit et non laboris nisi adipisicing mollit do. Mollit consectetur sit cupidatat reprehenderit laboris sunt minim ut labore nulla aliquip. Exercitation qui do proident nulla laboris reprehenderit. Proident veniam labore velit ad nulla. Proident commodo pariatur id laborum proident laborum consectetur aliquip excepteur duis nostrud amet id.
                        </p>
                        <div>
                            {["React", "Javascript"].map((tech, key) => (
                                <span
                                key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-beetwen items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                {" "}
                                View Project → </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScreen>
        </section>
    )
}