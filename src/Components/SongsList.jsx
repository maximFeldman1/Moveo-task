import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import { FaPlay, FaPause } from 'react-icons/fa';
import songs from '../DataOfSongs';

import Pad from './Pad'



const SongsList = () => {
    const [playingState, setPlayingState] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    
  useEffect(() => {
    
    }, [playingState]);


    const handleOnClick = () => {
        setPlayingState(!playingState);
    }

    return (
        <div>
            <div>
                {songs.map((song, idx) => {
                    return (
                        <Pad key={idx}
                            title={song}
                            playingState={playingState}
                            loopNum={loopNum}
                        />
                    )
                })
                }
            </div>
            <div className='text-center'>
                <Card
                    bg={"dark"}
                    text={"light"}
                    style={{ width: '20%' }}
                    className="mx-auto my-2 text-center"
                    onClick={handleOnClick}
                >
                    <Card.Body className="text-center">
                        <Button variant={"dark"} className="mx-2 rounded-circle" onClick={handleOnClick}>{playingState ? <FaPause className="ml=2" /> : <FaPlay className="ml=2" />}</Button>
                        <span className="lead ">Click to play/stop  </span>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SongsList;