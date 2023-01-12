import React, { useState } from 'react';
import { FaHandshake, FaMoneyBillAlt, FaCarCrash, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Summary = () => {
    const [counterOn,setCounterOn]=useState(false);
    return (
        <div className='py-8 border-b-2'>
            <div className='w-3/4 mx-auto text-center'>
                <h2 className='text-sky-500 text-3xl font-bold mb-3'>Manufacturer Justification</h2>
                <p className='text-xl font-bold'>We are a Leader in the Manufacturing Business For Several Industries.</p>
            </div>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-8'>
                <div>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaHandshake /></p>
                    <p className='text-5xl font-bold my-4'> {counterOn&&<CountUp start={0} end={50} duration={2.5} delay={0}/>}+</p>
                    <p className='text-xl text-blue-400 font-bold'>Served</p>
                </div>
                <div className='py-12 lg:py-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaMoneyBillAlt /></p>
                    <p className='text-5xl font-bold my-4'>{counterOn&&<CountUp start={0} end={35} duration={2} delay={0}/>}M+</p>
                    <p className='text-xl text-blue-400 font-bold'>Annual Revenue</p>
                </div>
                <div className='pb-12 lg:pb-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaCarCrash /></p>
                    <p className='text-5xl font-bold my-4'>{counterOn&&<CountUp start={0} end={15} duration={2} delay={0}/>}+</p>
                    <p className='text-xl text-blue-400 font-bold'>Car Parts</p>
                </div>
                <div>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaStar /></p>
                    <p className='text-5xl font-bold my-4'>{counterOn&&<CountUp start={0} end={92} duration={3} delay={0}/>}+</p>
                    <p className='text-xl text-blue-400 font-bold'>Feedbacks</p>
                </div>
            </div>
          </ScrollTrigger>
        </div>
    );
};

export default Summary;