import React from "react";
import { Card,Button } from "react-bootstrap";
import useRecorder from "./useRecorder";



function ButtonRecorder() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
      
    <Card.Body className="row justify-content-around mx-1">
        <div className="mx-auto my-2 text-center">
            <audio src={audioURL} controls />
            <Button className="mx-2" onClick={startRecording} disabled={isRecording}>
                start recording
            </Button>
            <Button className="mx-2" onClick={stopRecording} disabled={!isRecording}>
                stop recording
            </Button>
        </div>
    </Card.Body>
    
 
    
  );
}

export default ButtonRecorder