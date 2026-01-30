import { useState } from 'react'


type Notification = {
    type?: 'success' | 'error';
    message?: string;
}

const useNotification = () => {
    const [notification, setNotification] = useState<Notification>({})

    const setSuccesNotification = (message: string) => {
        setNotification({
            type: 'success',
            message
        })
    }

    const setErrorNotification = (message: string) => {
        setNotification({
            type: 'error',
            message
        })
    }

    const clearNotification = () => {
        setNotification({})
    }

    return {
        notification, 
        setErrorNotification, setSuccesNotification, clearNotification
    }
}


export default useNotification;