import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({message, type, seconds}) => {
    
    const [display, setDisplay] = useState(false);
    
    useEffect( () => {
    
        if(message && type && seconds){
            
            setDisplay(true);
            
            setTimeout( () => setDisplay(false), seconds * 1000);    
            
        }
        
    }, [message, type, seconds]);
    
    return(
        <React.Fragment>
            { display
            ? <div className = {'Toast ' + type}>
                <div className = 'Message'>{message}</div>  
              </div>
            : null
            }
        </React.Fragment>
    );
    
}

export default Toast;