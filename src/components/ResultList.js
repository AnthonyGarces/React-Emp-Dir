import React from 'react';

function ResultList(props) {

    if(!props.data) {
        return <div>Loading...</div>
    }
    console.log(props.data[0])
    return (
        <div>{JSON.stringify(props)}</div>
    )
}

export default ResultList;