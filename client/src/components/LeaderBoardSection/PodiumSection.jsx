import PodiumCard from "./PodiumCard";

const PodiumSection = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:items-end justify-center gap-24">
      <PodiumCard rank={1} name="Aryan Sharma" gender="male" campus="MIT NY" points="985 pts" className="order-1 md:order-2"/>
      <PodiumCard rank={2} name="Rohan K." gender="male" campus="HOR UK" points="942 pts" className="order-2 md:order-1" />
      <PodiumCard rank={3} name="Ananya V." gender="female" campus="SPK HP" points="910 pts" className="order-3" />
    </div>
  );
};

export default PodiumSection;
