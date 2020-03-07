import React, { useEffect, useState } from 'react';
import ResultList from "./ResultList";
// import SearchForm from './SearchForm';
import API from '../utils/API';
//Something about header is breaking my code, ask about it tomorrow
import Header from './header';
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
            
            <Header />
            <ResultList data={results}/>
        </div>
    )
}