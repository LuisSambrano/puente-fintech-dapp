import { useEffect } from 'react'
import useNotification from './useNotification'


type CallBack = (value: any) => void

const useValidation = (value: any, validator: CallBack) => {
    const { clearNotification, notification, setErrorNotification, setSuccesNotification } = useNotification()

    useEffect(() => {
        clearNotification()
        try{
            validator(value)
        } catch (error: any) {
            setErrorNotification(error.message)
        }
    }, [value])

    return notification
}


export default useValidation;