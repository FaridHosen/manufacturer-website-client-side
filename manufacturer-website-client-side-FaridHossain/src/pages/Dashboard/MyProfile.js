import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/profile`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProfiles(data))
        setRelode(!relode)

    }, [relode]);

    const handleProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const district = event.target.district.value;
        const phone = event.target.phone.value;
        const linkdien = event.target.linkdien.value;

        const updateProfile = { name, email, education, district, phone, linkdien };

        const url = `http://localhost:5000/profile`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset()
            })
    }
    return (
        <div>
            <h4 className='mt-5 mb-3 text-green-600 text-3xl font-bold'>Update profile</h4>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <form onSubmit={handleProfile} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" name='name' value={user.displayName} disabled className="input input-bordered text-xl font-bold w-full max-w-xs" />
                        <input type="email" name='email' value={user.email} disabled className="input input-bordered text-xl font-bold w-full max-w-xs" />
                        <input type="text" name='education' placeholder="Education Quality" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='district' placeholder="District" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='linkdien' placeholder="LinkedIn Link" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Update' className="btn input-bordered w-full max-w-xs" />
                    </form>
                </div>
                <div className=' mt-4'>
                    <h4 className='mt-5 mb-3 text-center text-indigo-600 text-3xl font-bold'>Profile</h4>
                    <div className=''>
                        {
                            profiles.length === 0 ? <p className='text-center'><Loading></Loading></p> : profiles.map(profile => <div key={profile._id} className='p-4'>
                                <div className='bg-black text-white p-4 opacity-80'>
                                    <h2 class="">{profile.name}</h2>
                                    <p>{profile.email}</p>
                                    <p>Education Quality: {profile.education}</p>
                                    <p>District: {profile.district}</p>
                                    <p>Phone: {profile.phone}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;