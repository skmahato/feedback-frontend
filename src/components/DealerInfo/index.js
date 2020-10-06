import React from 'react';

export const DealerInfo = ({ dealer, handleDealerClick }) => {
    return (
        <div>
            <strong>{dealer.name}</strong> | {dealer.location}
            <p>{dealer.description}</p>
            <p>{dealer.phone} | {dealer.email}</p>
            <em>{dealer.website}</em>
            <br />
            {handleDealerClick && <button type="button" onClick={() => handleDealerClick(dealer.id)}>Reviews</button>}
            <hr />
        </div>
    )
}

export default DealerInfo;