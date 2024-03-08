import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, headers = {}) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${API_URL}/${endpoint}`)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);

            });


    }, []);

    return { data, error, loading };
}
export default useFetch;
