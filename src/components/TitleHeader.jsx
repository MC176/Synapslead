const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* Badge avec effet moderne */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        {sub}
      </div>
      
      {/* Titre principal avec gradient */}
      <div className="max-w-4xl">
        <h1 className="font-bold md:text-5xl text-3xl leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {title}
        </h1>
        
        {/* Ligne décorative */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
        
        {/* Sous-titre avec effet de brillance */}
        <div className="relative">
          <p className="text-gray-600 md:text-xl text-lg leading-relaxed max-w-3xl mx-auto">
            {sub}
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
