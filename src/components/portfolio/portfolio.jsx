import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.jpg'
import IMG6 from '../../assests/portfolio6.jpg'

const data=[
  {
    id: 1,
    image: IMG1,
    title: "CAR BOOKING",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  },
  {
    id: 2,
    image: IMG2,
    title: "Expense Tracker",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  },
  {
    id: 3,
    image: IMG3,
    title: "Resume",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  },
  {
    id: 4,
    image: IMG4,
    title: "Basic Html",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  },
  {
    id: 5,
    image: IMG5,
    title: "Basic css",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  },
  {
    id: 6,
    image: IMG6,
    title: "Figma",
    github: "https://github.com/mohammedthoufeek",
    demo: "https://www.youtube.com/channel/UCa4F_i9Vx-KkIngZJp0EEhA"
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>YOUTUBE</a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default portfolio