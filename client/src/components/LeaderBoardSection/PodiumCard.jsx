import { Crown } from "lucide-react";
import maleUserImg from "../../assets/Male-Avatar.png";
import femaleUserImg from "../../assets/Female-Avatar.png";

const PodiumCard = ({ rank, name, gender, points, campus, className = "", }) => { const isFirst = rank === 1;
    return (
        <div
            style={{animationDelay: rank === 1 ? "0.1s" : rank === 2 ? "0.2s" : "0.3s"}}
            className={`${className} flex flex-col items-center bg-white rounded-3xl shadow-md border transition-all duration-700 ease-out px-6 py-8 md:px-16 md:py-10 opacity-0 translate-y-6 animate-fadeInUp ${isFirst ? "border-indigo-400 md:scale-110 bg-yellow-200" : "border-blue-200 bg-gray-100 md:px-18"}`}>
            {/* Avatar Wrapper */}
            <div className={`relative ${isFirst ? "w-24 h-24 md:w-28 md:h-28" : "w-20 h-20 md:w-24 md:h-24"}`}>
                {/* Crown (only for rank 1) */}
                {isFirst && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                        <div className="bg-yellow-500 rounded-full p-1.5 shadow-lg">
                            <Crown className="w-5 h-5 text-white" />
                        </div>
                    </div>
                )}

                {/* Circle Avatar */}
                <div className={` w-full h-full rounded-full overflow-hidden border-4  ${isFirst ? "border-yellow-400" : "border-blue-300"}`}>
                    <img
                        src={gender === "male" ? maleUserImg : femaleUserImg}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Rank Badge */}
                <div className={`absolute -bottom-2 right-0 w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold text-white ${isFirst ? "bg-yellow-500" : "bg-blue-600"} shadow-md`}>
                    {rank}
                </div>
            </div>

            {/* Name */}
            <h3 className="mt-5 font-semibold text-lg md:text-xl text-center">
                {name}
            </h3>

            {/* Campus */}
            <p className="text-sm text-gray-600 text-center mt-1">
                {campus}
            </p>

            {/* Points */}
            <p className="mt-4 bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm md:text-base font-medium">
                {points}
            </p>
        </div>
    );
};

export default PodiumCard;
