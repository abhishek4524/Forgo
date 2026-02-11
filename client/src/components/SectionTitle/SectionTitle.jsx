const SectionTitle = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-16">
      
      <h2 className="text-4xl md:text-5xl font-extrabold">
        {title}{" "}
        <span className="bg-[linear-gradient(to_right,#4F6BED,#5A2FC2)] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      <p className="mt-4 text-gray-500 text-lg">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionTitle;
