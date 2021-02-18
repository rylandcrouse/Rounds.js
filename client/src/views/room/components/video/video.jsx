import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { context } from '../../../../index';
import Peer from 'peerjs';
import { getStream } from './../../../../state/media'


const Video = observer(({ id }) => {
    const store = useContext(context);
    const videoRef = useRef();

    useEffect(() => {
        try {
            videoRef.current.srcObject = store.io.streams[id];
        } catch (error) {
            // Failed to convert value to 'MediaStream'
            // console.log(store.io.streams[id].getVideoTracks())
            setInterval(() => {
                console.log(store.io.streams[id])
            }, 4000);
            console.log(error)
            // videoRef.current.srcObject = URL.createObjectURL(store.io.streams[id]);
        }
        console.log(store.io.streams[id])

        // videoRef.current.srcObject = store.io.streams[id]
    }, [])


    return (
        <video ref={videoRef} autoPlay playsInline />
    )
});

export default Video;