import { useState, useEffect } from "React"

function UseCurrencyFetch(from, to) {
    useEffect(() => {
        let [data, setData] = useState({})
        fetch(
            `https://api.currencyapi.com/v3/latest?apikey=cur_live_jPKfa4d5wLu7qHsu5kcHSrWiDcWMXVXchHsSEsdT&currencies=${to}&base_currency=${from}`
        )
            .then((res) => res.json())
            .then((res) => setData(res));
        console.log(data);
    }, [to])
    return data
}

export default UseCurrencyFetch

