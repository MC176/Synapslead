const TitleHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      {/* Badge moderne */}
      <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        SynapsLead®
      </div>
      
      {/* Titre principal avec gradient */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
        {title}
      </h2>
      
      {/* Ligne décorative */}
      <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full mx-auto mb-6"></div>
      
      {/* Sous-titre avec effet de lueur */}
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleHeader;
