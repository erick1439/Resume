import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

const App = () => {

  const [main, setMain] = useState({});
  const [resume, setResume] = useState({});
  const [portfolio, setPortfolio] = useState({});


  useEffect(() => {

    fetch('resumeData.json')
      .then((response) => response.json())
      .then(((data) => {

        const {main, resume, portfolio} = data;

        setMain(main);
        setResume(resume);
        setPortfolio(portfolio);

      }))
      .catch((error) => {

        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header main={main}/>
      <About main={main}/>
      <Resume resume={resume}/>
      <Portfolio portfolio={portfolio}/>
      <Footer main={main}/>
    </div>
  );
}

export default App;
