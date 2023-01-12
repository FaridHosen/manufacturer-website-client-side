import React from 'react';
import myself from '../../images/borhan.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img width={400} src={myself} alt="Shoes" /></figure>
                    <div className="text-center p-4">
                        <p> <span className='text-xl font-bold'>Md Borhan Uddin</span></p>
                        <p><span className='text-xl font-bold'>mdborhanuddinmajumder058@gmail.com</span></p>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-lime-700 mb-6'>My Educational Background</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Institute</th>
                                    <th>Year / Borad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td>Monohorgonj Govt. High School & College</td>
                                    <td>2013 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>Cumilla Residential College</td>
                                    <td>2015 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>BSc in CSE</td>
                                    <td>World University of Bangladesh</td>
                                    <td>2021 (Dhaka)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='text-center py-4 mt-4'>
                <h2 className='text-2xl font-bold text-lime-700 mb-6 shadow-lg py-2 w-40 mx-auto'>My Skill</h2>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Design</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>HTML</p>
                            <progress className="progress progress-primary w-56" value="95" max="100"></progress>
                            <p>CSS</p>
                            <progress className="progress progress-primary w-56" value="80" max="100"></progress>
                            <p>Tailwind</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                            <p>Bootstrap</p>
                            <progress className="progress progress-primary w-56" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Development</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>Javascript</p>
                            <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                            <p>React.js</p>
                            <progress className="progress progress-primary w-56" value="80" max="100"></progress>
                            <p>node.js</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                            <p>mongodb</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
                <h4 className='text-xl font-bold mb-3'>My Completed Project</h4>
                <p><a target='_blank' className='underline' href="https://scintillating-quokka-d477fd.netlify.app/">https://scintillating-quokka-d477fd.netlify.app/</a></p>
                <p><a target='_blank' className='underline my-4' href="https://sparkly-travesseiro-3c9d55.netlify.app/">https://sparkly-travesseiro-3c9d55.netlify.app/</a></p>
                <p><a target='_blank' className='underline' href="https://velvety-palmier-679f13.netlify.app/">https://velvety-palmier-679f13.netlify.app/</a></p>

            </div>
        </div>
    );
};

export default Portfolio;