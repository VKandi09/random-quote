import React, { useEffect, useState } from "react";

export const QuotationsAPI = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    try {
        const response = await fetch('https://programming-quotes-api.azurewebsites.net/api/quotes/random'); 
        const data = await response.json();
        setValue(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
  }

  return (
    <div className="container">
      <div className="quotes-app">
        <h1>Quote .</h1>
        <div className="quote">
          <i className='bx bxs-quote-alt-left left-quote'></i>
          <p>{value.text}</p>
          <p className="text-author">- {value.author}</p>
          <i className='bx bxs-quote-alt-right right-quote'></i>
        </div>
      <button
        onClick={getQuotes}
      >
        Shuffle
      </button>
      </div>
    </div>
  );
};
