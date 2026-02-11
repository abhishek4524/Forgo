import SalaryBadge from '../ExtraCard.jsx/SalaryBadge';
import DecisionCard from '../ExtraCard.jsx/DecisionCrad';
import ImpactChart from '../ExtraCard.jsx/ImpactChart';

const LifecycleCard = ({ step, title, subTitle, description }) => {
    return (
        <div className=" bg-white border border-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:border-blue-300 transition duration-300 cursor-pointer">
            <div className="flex justify-between items-center">
                <p className="text-3xl font-semibold text-blue-600">{title}</p>
                <span className="text-xs text-white font-semibold  bg-linear-to-r from-indigo-600 to-sky-400 px-3 py-1 rounded-full">
                    STEP: {step}
                </span>
            </div>

            <h1 className="mt-6 text-2xl font-extrabold">{subTitle}</h1>
            <p className="mt-2 text-gray-500 text-[17px]">{description}</p>
            <div className='mt-8'>
                {step === "1" && <SalaryBadge />}
                {step === "2" && <DecisionCard />}
                {step === "3" && <ImpactChart />}
            </div>


        </div>
    );
}

export default LifecycleCard;