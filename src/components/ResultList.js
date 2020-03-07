import React from 'react';

function ResultList(props) {

    if(!props.data) {
        return <div>Loading...</div>
    }

    return (
        <div>{JSON.stringify(props)}</div>
    )
}

export default ResultList;