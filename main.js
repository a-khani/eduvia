import React from 'react';
import Table from 'react-bootstrap/Table';

function submission_confirmation(e) {
    e.preventDefault();
    // TODO: Fill in the rest 
    function Example() {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        );
      }
      
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var incident = document.getElementById("incident").value;
    console.log("name: " + name)
    console.log("location: " + location)
    console.log("incident: " + location)
    alert("Your Mom's a hoe")
}