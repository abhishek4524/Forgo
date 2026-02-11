import { Banknote } from "lucide-react";

const SalaryBadge = () => {
    return (
        <div className="w-full h-50 bg-[linear-gradient(to_top_left,#f1f4f9,#e4eaf4)] border border-blue-200 rounded-[28px] p-6 text-center shadow-sm">

            <Banknote className="w-14 h-14 text-yellow-500 mx-auto mb-4" />

            <h3 className="text-3xl font-bold text-green-600">
                + ₹25,000
            </h3>

            <p className="text-gray-600 mt-2">
                Monthly salary credited!
            </p>

        </div>
    );
}

export default SalaryBadge;