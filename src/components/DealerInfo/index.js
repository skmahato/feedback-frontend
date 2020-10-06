import { blueGrey, green, grey, lightBlue } from '@material-ui/core/colors';
import { flowRight } from 'lodash';
import React from 'react';

var divStyle = {
    backgroundColor: "whitesmoke",
    border : "solid grey",
    marginBottom: "5px",
    padding: 5,
}

export const DealerInfo = ({ dealer, handleDealerClick }) => {
    return (
        <div style={divStyle}>
            <strong>{dealer.name}</strong> | {dealer.location}
            <p>{dealer.description}</p>
            <p>{dealer.phone} | {dealer.email}</p>
            <em>{dealer.website}</em>
            <br />
            <button type="button" onClick={() => handleDealerClick(dealer.id)} style={{backgroundColor: "grey"}}>Reviews</button>
          
        </div>
    )
}

export default DealerInfo;