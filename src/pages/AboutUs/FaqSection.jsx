import React, { useState } from 'react'
import Questions from '../../components/Questions';
import part from "/assets/part.webp"

function FaqSection() {
    const [questions] = useState([
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
        }
      ]);
  return (
    <div>
        <div className='relative'>
            <img src={part} alt="" className='object-cover w-full' />
    <       h1 className='absolute inset-0 flex font-bebas items-center text-center bottom-[20%] justify-center lg:text-9xl text-4xl text-white z-10'>lorem ipsum <br /> dolor sit </h1>
        </div>

        <div>
        <h1 className="font-bebas lg:text-8xl text-center text-5xl text-[#024959] mt-6">
            Frequently Asked Questions
        </h1>
        <div className="mt-16 space-y-8 lg:grid lg:grid-cols-1  ">
        {questions.map((question, index) => (
          <Questions
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
        </div>
    </div>
  )
}

export default FaqSection