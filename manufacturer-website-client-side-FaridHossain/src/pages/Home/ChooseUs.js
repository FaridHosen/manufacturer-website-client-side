import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ChooseUs = () => {
    const [counterOn,setCounterOn]=useState(false);
    return (
        <div className='py-8' 
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        >
            <div className='w-3/4 mx-auto text-center'>
                <h2 className='text-indigo-600 text-3xl font-bold mb-5'>Why Choose Us</h2>
                <p className='text-xl'>Automotive parts manufacturing utilizes ongoing employee training, automation, continuous process improvement and innovation to maximize the quantity, reliability, and cost-effectiveness of your components. We are uniquely positioned to address your most challenging product part approval process and failure modes and effects component mandates.</p>
            </div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center px-12 mt-5'>
                <p className='shadow-lg py-3'><span className='text-green-700 text-4xl font-bold'>{counterOn&&<CountUp start={0} end={6} duration={2} delay={0}/>}</span> <br /> <span className='text-xl font-bold'>Years Business</span></p>
                <p className='shadow-lg py-3 mx-0 lg:mx-3'><span className='text-green-700 text-4xl font-bold'>{counterOn&&<CountUp start={0} end={1760} duration={3} delay={0}/>}</span> <br /> <span className='text-xl font-bold'>Square Foot Facility</span></p>
                <p className='shadow-lg py-3'><span className='text-green-700 text-4xl font-bold'>{counterOn&&<CountUp start={0} end={44} duration={2} delay={0}/>}</span> <br /> <span className='text-xl font-bold'>Employees</span></p>
            </div>
            </ScrollTrigger>
        </div>
    );
};

export default ChooseUs;