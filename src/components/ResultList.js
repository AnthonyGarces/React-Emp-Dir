import React from 'react';
import Table from 'react-bootstrap/Table'; 

function ResultList(props) {

    if(!props.data) {
        return <div>Loading...</div>
    }

    // function Employee(props) {
    //     return (
    //         <tr>
    //             <td>{props.data.picture.thumbnail}</td>
    //             <td>{props.data.name.first + "" + props.data.name.last}</td>
    //             <td>{props.data.dob}</td>
    //             <td>{props.data.phone}</td>
    //             <td>{props.data.email}</td>
    //         </tr>
    //     )
    // };

    console.log(props.data[0]);
    console.log(props.data[0].picture.thumbnail);
    console.log(props.data[0].name.first)
    return (
        <Table>
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
                {<tr>
                    <td><img src={props.data[0].picture.thumbnail} alt="pic"></img></td>
                    <td>{props.data[0].name.first + " " + props.data[0].name.last}</td>
                    <td>{props.data[0].dob.date.slice(0, 10)}</td>
                    <td>{props.data[0].phone}</td>
                    <td>{props.data[0].email}</td>
                </tr>}
                {/* {props.data && props.data.map(i => <Employee data={i}/>)} */}
            </tbody>
        </Table>
    )
}

export default ResultList;