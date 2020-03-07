import React from 'react';
import Table from 'react-bootstrap/Table'; 

function ResultList(props) {

    if(!props.data) {
        return <div>Loading...</div>
    }

    function Employee(props) {
        return (
            <tr>
                <td><img src={props.data.picture.thumbnail} alt="pic"></img></td>
                <td>{props.data.name.first + " " + props.data.name.last}</td>
                <td>{props.data.dob.date.slice(0, 10)}</td>
                <td>{props.data.phone}</td>
                <td>{props.data.email}</td>
            </tr>
        )
    };

    return (
        <Table striped hover bordered>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map(i => <Employee data={i} key={i.id.value}/>)}
            </tbody>
        </Table>
    )
}

export default ResultList;