import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className= 'container pt-32'>
        <div className= 'grid md grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className= 'text4xl- md:text-5xl'>Technologies I worked with     </h2>
                <p className= 'text-grey-500 pt-2'>
                As a beginner,I have developed a foundational understanding of several key web development technologies.I am a proficient in HTML and CSS for building and styling web pages, and I have begun working with JavaScript to add interactivity to my projects.My knowledge extends to modern frameworks and libraries like Next.js and React, allowing me to create dynamic, responsive user interfaces.I am also gaining experience with TypeScript, which enhances JavaScript's reliability by adding type safety, making your code more maintainable and error-free. This skill set positions me well to grow as a developer.
                </p>
            </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                <h2 data-aos="fade-up-left">Typescript</h2>
                <h2 data-aos="fade-up-left">React.js</h2>
                <h2 data-aos="fade-up-left">Tailwind</h2>
                </div>
                <div className='space-y-2'>
                <h2 data-aos="fade-up-left">CSS</h2>
                <h2 data-aos="fade-up-left">Node.js</h2>
                <h2 data-aos="fade-up-left">Next.js</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
