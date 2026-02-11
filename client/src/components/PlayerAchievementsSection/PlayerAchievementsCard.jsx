const PlayerAchievementsCard = ({ icon, iconColor, circleColor, title, subtitle }) => {
    return (
        <div className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300">

            <div className={`w-19 h-18  mx-auto mb-3 rounded-full flex items-center justify-center ${circleColor}`}>
                <span className={`text-3xl font-semibold ${iconColor}`}>
                    {icon}
                </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900">
                {title}
            </h3>

            <p className="mt-1 text-gray-500">
                {subtitle}
            </p>

        </div>
    );
};

export default PlayerAchievementsCard;
