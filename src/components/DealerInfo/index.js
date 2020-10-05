import React from 'react';

export const DealerInfo = ({ dealer, handleDealerClick }) => {
    return (
        <div>
            <em>{dealer.name}</em> | {dealer.location}
            <p>{dealer.description}</p>
            <p>{dealer.phone} | {dealer.email}</p>
            <em>{dealer.website}</em>
            <button type="button" onClick={() => handleDealerClick(dealer.id)}>Reviews</button>
            <hr />
        </div>
    )
}