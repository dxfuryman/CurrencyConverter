import {useEffect, useState} from "react";
import {data} from "autoprefixer";

function useCurrencyInfo() {
    const [data,setdata] = useState({})
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
            .then((responce) => responce.json())
            .then((responce) => setdata(responce[currency]))
            console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;