import { Play, Coins, Timer } from "lucide-react";


const StartAdventureSection = () => {
    return (
        <section className="py-24 px-6 bg-gray-100">
            <div className=" max-w-5xl mx-auto rounded-[40px] px-10 md:px-20 py-16 md:py-16 text-center text-white bg-[linear-gradient(135deg,#4f6bed,#6b21a8,#ec4899)] shadow-2xl ">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Ready to start your <br className="hidden md:block" />
                    financial adventure?
                </h2>

                <p className="mt-6 px-26 text-lg font-semibold md:text-xl text-white/80 max-w-3xl mx-auto">
                    Join 50,000+ students already mastering their future.
                    It’s free, it’s fun, and it pays off.
                </p>

                <button className="group mt-10 mx-auto bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-2xl flex items-center justify-center gap-3 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <Play className="w-6 h-6 fill-indigo-600 stroke-0 " />
                    Start Playing Now
                </button>


                <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                        <Coins className="w-10 h-10 text-yellow-400" />
                        +500 Bonus Coins
                    </div>

                    <div className="flex items-center gap-2 text-lg font-semibold">
                        <Timer className="w-8 h-8 text-whitez/80" />
                        Limited Time Offer
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartAdventureSection;
