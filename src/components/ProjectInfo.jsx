import React from 'react'

const ProjectInfo = (props) => {
  return (
    <div className="">
      <div className="flex items-center">
        <img src={props.image} alt="imae" className=" w-80 h-56 rounded mx-4" />
        <div className='flex flex-col justify-center'>
          <h1 className="text-3xl text-center">{props.title}</h1>
          <h4 className='p-2 text-center w-48 font-bold'>{props.desc}</h4>
          <div className="flex gap-4 justify-center">
            <img src="logo512.png" alt="" className="w-9 h-9" />
            <img src="tailwind-css.svg" alt="" className="h-10 w-10" />
          </div>
          <div className="flex items-center">
            <a href={props.link} className='flex p-2  mx-1 items-center justify-center'>
              <img src="icons8-link-24.png" alt="" className="w-7 h-7 mr-1" />
              Try it out
            </a>
            <a href={props.github} className='flex items-center'>
              <img src="icons8-github-50.png" alt="" className='w-7 h-7 mr-1' />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectInfo
