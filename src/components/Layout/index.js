import React from 'react';
import { useSelector } from 'react-redux';

import { currentUserSelector } from '../../selectors/currentUserSelector';

const Layout = () => {
    const currentUser = useSelector(currentUserSelector);

    return (
        <div>
            Hello <em>{currentUser.email}</em>
        </div>
    )
}

export default Layout;
