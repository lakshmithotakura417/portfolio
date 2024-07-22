import React from 'react'
import html from '../components/assets/html.png';
import css from '../components/assets/css.png';
import javascript from '../components/assets/javascript.png';
import reactimg from '../components/assets/react.png';
import nextjs from '../components/assets/nextjs.png';
import graphsql from '../components/assets/graphql.png';
import github from '../components/assets/github.png';
import tailwind from '../components/assets/tailwind.png'
const Skills = () => {
    const techs=[
        {
          id:1,
          src:html,
          title:"html",
          style:'shadow-orange-500'

        },
        {
          id:2,
          src:css,
          title:"css",
          style:'shadow-blue-500'
        },
        {
          id:3,
          src:javascript,
           title:"javascript",
          style:'shadow-yellow-500'
        },
        {
          id:4,
          src:reactimg,
           title:"react",
          style:'shadow-blue-600'
        },
        {
          id:5,
          src:tailwind,
          title:"tailwind",
          style:'shadow-sky-400'
        },
        {
          id:6,
          src:nextjs,
           title:"Next Js",
          style:'shadow-white'
        },
        {
            id:7,
            src:graphsql,
            title:"GraphQL",
            style:'shadow-pink-400'
        },
        {
            id:8,
            src:github,
            title:"github",
            style:'shadow-gray-400'
        },
      ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-20'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id,src,title,style})=>{
                    return(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Skills;
