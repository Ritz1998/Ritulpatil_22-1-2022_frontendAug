import React,{useState,useEffect} from 'react'
const prefix ='codepen'
function useLocalStorage(key,initialvalue) {
    const prefixedkey=prefix+key

    const [value,setValue]=useState(()=>{
        const jsonvalue=localStorage.getItem(prefixedkey)
        if(jsonvalue!== null) return  JSON.parse(jsonvalue)
        if(typeof initialvalue==='function'){
            return initialvalue()
        }else{
            return initialvalue
        }
    })
    useEffect(() => {
     localStorage.setItem(prefixedkey,JSON.stringify(value))
    }, [prefixedkey,value]);
    return [value,setValue]
    
  return <div>

  </div>;
}

export default useLocalStorage;
