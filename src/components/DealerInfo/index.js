import React from "react";



var divStyle = {
    backgroundColor: "whitesmoke",
    border : "solid grey",
    marginBottom: "5px",
    padding: 5,
}

export const DealerInfo = ({ dealer, handleDealerClick }) => {
 
    return (
        <div style={{ ...styles.DealershipRectangle }}>
            <div><p style={{ ...styles.DealershipTitle }}><strong>{dealer.name}</strong></p> Location: {dealer.location}</div>
            <p>Description: {dealer.description}</p>
            <p>Contact: {dealer.phone}</p><p>Email: {dealer.email}</p>
            Website: <em>{dealer.website}</em>
            <br />          
            {handleDealerClick && <button style={{ ...styles.ReviewButtonStyle }} type="button" onClick={() => handleDealerClick(dealer.id)} ><p style = {{ ...styles.ButtonInnerText }} >Reviews</p></button>}
        </div>
    )
}

export default DealerInfo;


const styles = {
  ReviewButtonStyle: {
    width: 100,
  height: 44,
  // boxShadow:'-2px 0px 0px 0px',
  backgroundColor : '#009f0b',
  border : 'solid 1px #dddddd', 
  },
  ButtonInnerText:
  {   
  fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    // lineHeight: 3.07,
  textAlign: 'center',
  color: '#ffffff'
  },
  DealershipRectangle:{
     backgroundColor: "#e6e6e6",
    border : 'solid 1px #eaeaea', 
    marginBottom: "5px",
    padding: 5,
  },
  DealrshipTitle:{
    
    height: 18,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.38,
    letterSpacing: "normal",
    color: "#1d86b8",

  }


  
};