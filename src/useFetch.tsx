import { useState, useEffect } from 'react';

interface UseFetchResult {
    data: any | null;
    isPending: boolean;
    error: any | null;
}

const useFetch = (url:string): UseFetchResult => {
    const [data, setData] = useState<any | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);
    
    useEffect(() => {
        const abortFetch = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortFetch.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {     
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log(`Note fetch ${url} aborted`);
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);
        return () => abortFetch.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch
