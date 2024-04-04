import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { // Add 'currency' as a parameter
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/159a6de520cf995272ee6c08/latest/${currency}`)
            .then((response) => response.json())
            .then((responseData) => setData(responseData.conversion_rates));
        // console.log(data); No need to log here anymore
    }, [currency]); // Add 'currency' to the dependency array

    // console.log(data); No need to log here anymore
    return data;
}

export default useCurrencyInfo;
