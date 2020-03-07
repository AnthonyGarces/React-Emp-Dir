import React, { useEffect, useState } from 'react';
import ResultList from "./ResultList";
// import SearchForm from './SearchForm';
import API from '../utils/API';

export default function SearchResultContainer() {

    const [results, setResults] = useState('');

    const getEmployees = () => {
        API.search()
            .then(res => {
                setResults(res.data.results);
            })
            .catch(err => console.log(err));
    }

    //Do this so the random user search is called once the page renders
    useEffect( () => {
        getEmployees();
    }, [])

    return (
        <div>
            <ResultList data={results}/>
        </div>
    )
}