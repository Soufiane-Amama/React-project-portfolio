import React, { useState, useEffect } from "react";

const Amthal = () => {
  const [mathal, setMathal] = useState({});
  const [amthal, setAmthal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/amthal/random")
      .then((response) => response.json())
      .then((json) => setMathal(json)); // استقبال مثل واحد عشوائي
  }, []);

  const fetchAmthal = () => {
    fetch("http://localhost:3004/amthal/ten")
      .then((response) => response.json())
      .then((json) => setAmthal(json)); // استقبال 10 امثال عشوائية
  };

  return (
    <div>
      <h2>مثل اليوم</h2>
      <p>{mathal.title}</p>
      <hr></hr>
      <h3>هل تريد المزيد من الامثال؟</h3>
      <button className="btn" onClick={fetchAmthal}>
        أمثال
      </button>
      {amthal.map((mathal) => {
        return <p key={mathal.id}>{mathal.title}</p>;
      })}
    </div>
  );
};

export default Amthal;
