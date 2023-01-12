import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useLocation, Navigate } from "react-router-dom";
import auth from '../../Firebase/firebase.init';
import useAdmin from '../CustomHook/useAdmin';
import Loading from '../Loading/Loading';

const PrivateAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateAdmin;