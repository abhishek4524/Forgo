import { TrendingUp, PartyPopper, ShieldAlert } from 'lucide-react';

const DecisionCard = () => {
    return (
        <div className="h-full space-y-4">
            <div className="border border-indigo-200 bg-indigo-50 py-3.5 px-4 flex justify-between items-center rounded-4xl cursor-pointer hover:bg-indigo-100 transition duration-100 ease-in">
                <h2 className="text-[17px] font-bold">Invest in Stocks</h2>
                <p className="text-blue-500 text-[17px]"><TrendingUp /></p>
            </div>
            <div className="border border-gray-200 py-3.5 px-4 flex justify-between items-center rounded-4xl cursor-pointer">
                <h2 className="text-[17px] font-bold">Party in Mumbai</h2>
                <p className="text-red-500 text-[17px]"><PartyPopper /></p>
            </div>
            <div className="border border-green-200 bg-green-50 py-3.5 px-4 flex justify-between items-center rounded-4xl cursor-pointer hover:bg-green-100 transition duration-100 ease-in ">
                <h2 className="text-[17px] font-bold">Save for Emergency</h2>
                <p className="text-green-500 text-[17px]"><ShieldAlert /></p>
            </div>
        </div>
    );
}

export default DecisionCard;