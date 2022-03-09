import { useState } from "react";

const useInput=()=>{
    const [enterdValue, setenterdValue] = useState('')
    const [inputValidation, setinputValidation] = useState(true)

    const valueChangeHandler = (e)=>{

        console.log(e.target.value)
        setenterdValue(e.target.value)
    }

    const valueBlurHandler = (e)=>{

        if(enterdValue.trim() === ''){
            setinputValidation(false)
            return;
        }
    }
    return{

            value:enterdValue,valueChangeHandler,valueBlurHandler,hasError:inputValidation
    };
}
export default useInput;