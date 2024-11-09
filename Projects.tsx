import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data= [
{
    id: 0,
    title: "Countdown Timer",
    desc: "A Nextjs and typescript powered website to track down",
    img: "/Project 1.png",
    tags: ["React", "Node", "CSS", "Typescript"],
},
{
    id: 1,
    title: "Editable Resume Builder",
    desc: "A Nextjs and typescript powered website to track down",
    img: "/Project 2.png",
    tags: ["React", "Node", "CSS", "Typescript"]
},
{
  id: 2,
  title: "Unique path and shareable link",
  desc: "A React, next js and typescript project.",
  img: "/Project3.png",
  tags: ["React", "Nextjs", "CSS", "Typescript"]
},
{
  id: 3,
  title: "Static Resume Builder",
  desc: "A Resume builder created by Nextjs and React",
  img: "/Project 4.png",
  tags: ["Nextjs", "CSS", "Javascript", "React"]
},
{
  id: 4,
  title: "Weather  Widged app",
  desc: "A react and next js powered website to track down the weather",
  img: "/Project5.jpg",
  tags: ["CSS", "Typescript", "Nextjs", "React"]
},
{
  id: 5,
  title: "Website of E-Commerce",
  desc: "Html and CSS based website",
  img: "/Project6.jpg",
  tags: ["CSS", "HTML"]
}
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
