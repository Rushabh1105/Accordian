import React, { useState } from 'react'
import './App.css';
import data from "./Components/data";
import SingleQuestion from './Components/SingleQuestion';

function App() {

  const [questions, setQuestions ] = useState(data)
  //console.log(questions)

  return (
    <div className="container">
      <h3 className='h3' >FAQ's</h3>
      <section className="info">
        {
          questions.map((question) => {
            //console.log({...question})
            return <SingleQuestion key={question.id} {...question} />
          })
        }
        
      </section>
    </div>
  );
}

export default App;
