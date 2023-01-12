import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { FaAddressBook, FaPhoneVolume, FaMailBulk } from 'react-icons/fa';

const NewsFeed = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='py-8 px-12 bg-black opacity-80'>
            <h3 className='text-center text-indigo-700 w-48 mx-auto py-2 font-bold text-3xl border-b-2 mb-4'>News Feed</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center text-white'>
                <div>
                    <p className='text-3xl mb-3'>Newsletter</p>
                    <p>By subscribing to our company newsletter you will always be up-to-date on our deals and laptop inventory.</p>
                    <form>
                        <input type="text" placeholder="Name" className="input input-bordered text-black my-2 w-full max-w-xs" />
                        <br />
                        <input type="text" placeholder="Email" className="input input-bordered text-black mb-2 w-full max-w-xs" />
                        <br />
                        <input className='btn btn-primary font-bold text-white' type="submit" value="Subscribe" />
                    </form>
                </div>
                <div>
                    <p className='text-3xl mb-3'>Latest Post</p>
                    <div>
                        <p>See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://Gmail</a> to your site.</p>
                        <p> See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://E-mail</a> to your site.</p>
                    </div>
                </div>
                <div>
                    <p className='text-3xl mb-3'>Contact Us</p>
                    <p className='flex items-center gap-3'> <span><FaAddressBook /></span> <span>Address: 5/27 Mohammadpur, Dhaka, Bangladesh</span></p>
                    <p className='flex items-center gap-3 my-5'><span><FaPhoneVolume /></span> <span>Phone: <a className='underline' href="#">+801612-345678</a></span></p>
                    <p className='flex items-center gap-3'><span><FaMailBulk /></span> <span>Email: <a className='text-blue-500 font-bold underline' href="/">{user ? user?.email : "borhan@manager.com"}</a></span></p>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;