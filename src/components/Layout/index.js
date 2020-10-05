import React from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../selectors/currentUserSelector';
// import {SimpleRating} from '../SimpleRating';
import Rating from '@material-ui/lab/Rating';

const Layout = () => {
    const currentUser = useSelector(currentUserSelector);

    return (
        <div>
            Hello <em>{currentUser.name}</em>
            {/* <SimpleRating/> */}
            <Rating/>
            
        </div>
    )
}

export default Layout;
