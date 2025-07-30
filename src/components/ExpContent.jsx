const ExpContent = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl text-black">{expContent.title}</h1>
      <p className="text-black">{expContent.date}</p>
      <p className="text-black">Bénéfices concrets</p>
      <ul className="list-disc ms-5 text-black">
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-black">{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
