import NavbarMain from "../components/Navbar-main"
import hero1 from '../assets/hero1.svg'
import hero2 from '../assets/hero2.svg'
import { Icon } from "@iconify/react"

export default function Home() {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <NavbarMain />
                <main className="w-full max-w-[1440px]">
                    <div id="hero" className="scroll-mt-[90px] flex gap-20 justify-center max-h-[934px] pt-50 pb-80 px-[40px] bg-secondary">
                        <img src={hero1} alt="image hero1" className="hidden lg:flex w-full md:max-w-[450px] md:max-h-[236px] lg:max-w-[450px] lg:max-h-[336px]" />
                        <div className="w-full max-w-[550px] md:max-w-[480px]  flex flex-col items-center lg:items-start gap-5">
                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 font-semibold text-4xl text-heading"><span>Stop Guessing.</span> <span>Start Guiding.</span></div>
                            <p className="w-full  text-center lg:text-start text-2xl text-heading">Turn raw scores into actionable insights. Identify student weaknesses by topic instantly and plan targeted lessons.</p>
                            <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start md:items-center gap-5 w-full">
                                <button className="font-semibold text-secontext bg-accent rounded-lg px-[25px] py-[8px] w-full max-w-[200px]">Start for Free</button>
                                <button className="font-semibold text-primary border border-primary rounded-lg px-[25px] py-[8px] w-full max-w-[200px]">Sample Report</button>
                            </div>
                        </div>
                    </div>
                    <div id="problem" className="scroll-mt-[90px] flex flex-col sm:flex-row gap-10 sm:gap-5 bg-primary py-30 justify-center items-center px-[40px]">
                        <img src={hero2} alt="image hero2" className="max-w-[310px] max-h-[330px]" />
                        <div className="flex flex-col gap-5 max-w-[500px] text-center sm:text-start">
                            <h1 className="font-semibold text-4xl text-secontext">Excel Doesn't Show the "Why"</h1>
                            <p className="text-2xl text-secontext">Stop wasting hours grading without knowing where students struggle. Let InsightQuiz automate the analysis.</p>
                        </div>
                    </div>
                    <div id="feature" className="scroll-mt-[90px] bg-secondary text-center py-40 px-[40px] mt-30">
                        <h1 className="font-semibold text-5xl">Feature</h1>
                        <div className="flex flex-wrap justify-center items-center gap-30 px-10 sm:px-20 pt-20 max-w-[1440px] mx-auto">
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="iconoven:quiz-check" className="text-accent" width={40} height={40} />
                                <span className="font-semibold text-2xl">Tag & Quiz</span>
                                <p>Create quizzes with skill-specific tags for precise tracking.</p>
                            </div>
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="iconoven:market-analysis-sharp" className="text-accent" width={40} height={40} />
                                <span className="font-semibold text-2xl">Auto-Analytics</span>
                                <p>View real-time performance graphs the moment students submit.</p>
                            </div>
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="iconoven:analytics-sharp" className="text-accent" width={40} height={40} />
                                <span className="font-semibold text-2xl">Reports</span>
                                <p>Export data to group students and tailor interventions.</p>
                            </div>
                        </div>
                    </div>
                    <div id="how-it-work" className="scroll-mt-[90px] bg-secondary text-center py-40 px-[40px]">
                        <h1 className="font-semibold text-5xl">How It Work</h1>
                        <div className="flex flex-wrap justify-center items-center gap-30 px-10 sm:px-20 pt-20 max-w-[1440px] mx-auto">
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="mdi:plus" className="text-accent " width={40} height={40} />
                                <span className="font-semibold text-2xl">Create Quiz</span>
                                <p>Add questions and assign topic tags.</p>
                            </div>
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="fe:mobile" className="text-accent" width={40} height={40} />
                                <span className="font-semibold text-2xl">Do it via mobile</span>
                                <p>Send a mobile-friendly link to students.</p>
                            </div>
                            <div className="w-full border border-black p-[30px] max-w-[250px] min-h-[250px] flex flex-col items-center gap-5 rounded-2xl">
                                <Icon icon="iconoven:market-analysis-sharp" className="text-accent" width={40} height={40} />
                                <span className="font-semibold text-2xl">Analytics</span>
                                <p>View instant insights on your dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <div id="CTA" className="scroll-mt-[90px] bg-primary text-center flex flex-col gap-5 justify-center items-center mt-35 py-40 px-[40px]">
                        <h1 className="font-semibold text-4xl text-secontext max-w-[550px]">Ready to Transform Your Classroom?</h1>
                        <p className="text-secontext text-lg font-normal">Get started today. Free for your first 3 classes.</p>
                        <button className="font-semibold text-secontext bg-accent rounded-lg px-[25px] py-[8px] w-full max-w-[300px]">Create Your First Quiz</button>
                    </div>
                    <div id="footer" className="scroll-mt-[90px] bg-[#2E26AE] text-center flex flex-col md:flex-row gap-10 md:gap-5 justify-between items-start pt-30 pb-50 px-[70px] mt-70">
                        <div className="flex flex-col gap-3 font-semibold text-secondary text-start">
                            <h1 className="text-4xl">InsightQuiz</h1>
                            <div className="flex gap-3 text-accent">
                                <Icon icon="mdi:linkedin" width={30} height={30} />
                                <Icon icon="mdi:instagram" width={30} height={30} />
                                <Icon icon="mdi:facebook" width={30} height={30} />
                            </div>
                            <p>Copyright 2026 montree.dev45</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between max-w-[380px] w-full gap-15 sm:gap-0">
                            <div className="text-secondary text-start flex flex-col gap-4">
                                <span className="text-xl font-semibold">Product</span>
                                <p>Feature</p>
                                <p>How it work</p>
                                <p>CTA</p>
                            </div>
                            <div className="text-secondary text-start flex flex-col gap-4">
                                <span className="text-xl font-semibold">Product</span>
                                <p>Feature</p>
                                <p>How it work</p>
                                <p>CTA</p>
                            </div>
                            <div className="text-secondary text-start flex flex-col gap-4">
                                <span className="text-xl font-semibold">Company</span>
                                <p>About Us</p>
                                <p>Contact</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}