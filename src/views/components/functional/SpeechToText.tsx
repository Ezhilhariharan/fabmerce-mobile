import React, { useEffect, useRef, useState } from 'react';
import Voice from '@react-native-voice/voice';
import { systemTransportor } from '@models/redux/system/system.transportor';

export const useSpeech = () => {
    const { setSystemStore } = systemTransportor()
    const [data, setData] = useState({
        text: '',
    })

    // Event Listener
    const voiceRef = useRef(Voice).current
    const onSpeechStart = (e: any) => console.log("onSpeechStart");
    const onSpeechEnd = (e: any) => console.log("onSpeechEnd");
    const onSpeechRecognized = (e: any) => console.log("onSpeechRecognized");
    const onSpeechPartialResults = (e: any) => console.log("onSpeechPartialResults");
    const onSpeechVolumeChanged = (e: any) => console.log("onSpeechVolumeChanged");
    const onSpeechResults = (e: any) => {
        console.log("onSpeechResults")
        setData({
            ...data,
            text: e.value[0]
        })
    };
    voiceRef.onSpeechStart = onSpeechStart;
    voiceRef.onSpeechEnd = onSpeechEnd;
    voiceRef.onSpeechRecognized = onSpeechRecognized;
    voiceRef.onSpeechResults = onSpeechResults;
    voiceRef.onSpeechPartialResults = onSpeechPartialResults;
    voiceRef.onSpeechVolumeChanged = onSpeechVolumeChanged;

    useEffect(() => {
        setSystemStore({ voiceSearchData: data })
    }, [data])

    const onVoiceSearch = async () => {
        const isAvailable = await Voice.isAvailable()
        if (isAvailable) {
            Voice.start('en-US')
            return true
        }
        return false
    }

    const stopRecognizing = async () => {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    };

    const cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    };

    const destroyRecognizing = async () => {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
    };

    return {
        onVoiceSearch,
        stopRecognizing,
        cancelRecognizing,
        destroyRecognizing
    }
}