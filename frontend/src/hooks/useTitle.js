import { useEffect } from 'react'

// Setting page title.
export const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {
            document.title = prevTitle
        }
    })
}

export default useTitle