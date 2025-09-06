import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [Data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/16d25317281af7904efa9804/latest/{currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        .catch(()=>"Failed To Load")
    },[currency])
    return Data
}
export default useCurrencyInfo