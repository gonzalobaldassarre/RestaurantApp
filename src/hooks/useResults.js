import { useState, useEffect }  from 'react';
import yelp from '../api/yelp';

export default () => {
    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const request = async (terms) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: terms,
                    location: 'Buenos Aires'    
                }
            });

            setResults(response.data.businesses);
            setErrorMessage('');
        }
        catch(e) {
            setErrorMessage('Something went wrong, try again');
            setResults([]);
        }
    }

    useEffect( () => {
        request('pizza');
    }, []);

    return [request,results,errorMessage];
}