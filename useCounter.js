import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const add = ( value = 1 ) => {
        setCounter((current) => current + value)
    }

    const sub = ( value = 1) => {
        setCounter((current) => current - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return{
        counter,
        add,
        sub,
        reset
    }
}