import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Portfolio = ({portfolio}) => {

  let slides;

  if (portfolio.projects) {
  
    slides = portfolio.projects.map((slide, index) => { 

      let examples = slide.images.map((image, index) => {
        return (
          <img key={index} src={'images/portfolio/' + image} alt={slide.title + " example #" + index} height={slide.size} width={slide.size}/> 
        )
      });

      return (
        <div key={index} className="projectcontainer">
          { slide.link === "" ? <h2>{slide.title}</h2> : <h2><a style={{color: 'black'}} href={slide.link} target='_blank'>{slide.title}</a></h2> }
          <div>{slide.description}</div>
          <div className="projectexamples">{examples}</div>
        </div>
      )
    })
  }

  return(
    <section id="portfolio">
      <div>
        <div>
          <h1><span>Projects</span></h1>
          <div>
            <Slider>{slides}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
