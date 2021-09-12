import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { GoMute, GoUnmute } from 'react-icons/go';


const Pad = ({title, playingState}) =>{

    const [padState, setPadState] = useState(false);
    const [audio] = useState(new Audio(`/assets/${title}`));

  
      useEffect(() => {
        if (playingState && padState) {
            audio.play();
        } else {
            audio.pause();
        }

    }, [playingState]);




    const handleOnClick = () => {
        // update pad state and activiaty
        if (padState) {
            audio.pause();
        } 
        setPadState(!padState);
    }

    return (
        <Card
            border="dark" 
            bg={padState ? "primary " : "light"}
            text={padState ? "white" : "dark"}
            style={{ width: '70%' }}
            className="mx-auto my-1 text-center"
            onClick={handleOnClick}
        >
            <Card.Body className="row justify-md-content-between justify-lg-content-between justify-content-sm-center mx-1">
                <div>
                    <Card.Text className='my-auto'>
                        <span className="my-auto mr-3">{playingState ? <GoUnmute /> : <GoMute />}</span>
                        {title}
                    </Card.Text>
                </div>
            </Card.Body>

        </Card>
    );
}

export default Pad


   