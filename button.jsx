export const Button = ({buttonTitle, active,}) => {
  

    return <button style={
      {backgroundColor:active === true && "green", 
        borderRadius: 8, 
        color: "white",
         border: 0}
    }>{buttonTitle}</button>
  
  
  
}

