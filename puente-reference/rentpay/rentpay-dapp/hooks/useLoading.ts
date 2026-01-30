import { useCallBack, useState } from 'react'


const useLoading = (state: boolean = true) => {
    const [isLoading, setIsLoading] = useState<boolean>(state)

    const startLoading = useCallBack(() => {
        setIsLoading(true)
    }, [])

    const stopLoading = useCallBack(() => {
        setIsLoading(false)
    }, [])

    return { isLoading, startLoading, stopLoading }
}


export default useLoading;