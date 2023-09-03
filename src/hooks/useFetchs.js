// useFetch.js

import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Comente ou remova esta chamada para interromper temporariamente a solicitação GET
        // const fetchData = async () => {
        //   try {
        //     setLoading(true)
        //     const res = await makeRequest.get(url);
        //     setData(res.data.data)
        //     console.log("Data fetchData", res); // ........................log
        //   } catch (err) {
        //     setError(true)
        //   }
        //   setLoading(false)
        // }
        // fetchData(); // Comente ou remova esta chamada para interromper temporariamente a solicitação GET
    }, [url]);

    return { data, loading, error }
}

export default useFetch;
