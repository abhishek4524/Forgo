import maleUserImg from "../../assets/Male-Avatar.png";
import femaleUserImg from "../../assets/Female-Avatar.png";

const LeaderboardRow = ({ rank, name, gender, campus, score }) => {
  return (
    <div className="grid grid-cols-4 items-center px-6 py-4 border-b border-blue-100 hover:bg-blue-50 transition-all">  
      <div className="font-semibold text-gray-600">
        {rank}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8">
            <img src={gender === "male" ? maleUserImg : femaleUserImg} alt="avatar" className="rounded-full" />
        </div>
        <span className="font-medium">{name}</span>
      </div>

      <div className="text-gray-500 ml-24">
        {campus}
      </div>

      <div className="text-blue-600 font-semibold text-right">
        {score}
      </div>
    </div>
  );
};

export default LeaderboardRow;
