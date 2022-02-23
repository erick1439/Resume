import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Portfolio = ({portfolio}) => {

  let slides;

  if (portfolio.projects) {

    slides = portfolio.projects.map((slide, index) => { 

      let icons = slide.icons.map((icon, index) => {
        return <li key={index}><a href={icon.url} target='_blank'><i className={icon.className}></i></a></li>
      });

      let examples = slide.images.map((image, index) => {
        return (
          <img key={index} src={'images/portfolio/' + image} alt={slide.title + " example #" + index} height={slide.size} width={slide.size}/> 
        )
      });

      return (
        <div key={index} className="projectcontainer">
          <div className='projectcontainertitle'>
            <h2>{slide.title}</h2>
            <ul>
              {icons}
            </ul>
          </div>
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
