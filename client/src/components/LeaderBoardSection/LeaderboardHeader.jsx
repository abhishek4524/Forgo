const LeaderboardHeader = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        National {" "}
        <span className="bg-[linear-gradient(to_right,#4F6BED,#5A2FC2)] bg-clip-text text-transparent">
        Financial Championship
        </span>
      </h1>

      <p className="mt-3 text-gray-500 text-lg">
        Master your money, climb the ranks, and bring glory to your campus.
      </p>
    </div>
  );
};

export default LeaderboardHeader;
