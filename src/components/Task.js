import { Outlet, Link } from "react-router-dom";
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskarray from './Taskarray';

import {useNavigate } from 'react-router-dom';

function Task() {

  let history = useNavigate()

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, TaskName, TaskInfo, TaskSuggestions) {
    localStorage.setItem('id', id);
    localStorage.setItem('TaskName', TaskName);
    localStorage.setItem('TaskInfo', TaskInfo);
    localStorage.setItem('TaskSuggestions', TaskSuggestions);
  }

  // Deleted function - functionality 
  // for deleting the entry
  function deleted(id) {

    var index = Taskarray.map(function (e) { return e.id; }).indexOf(id);

    // deleting the entry with index
    Taskarray.splice(index, 1)

    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/Task')
  }

  return (
    <div className="content-body">
    <div style={{ margin: '5rem' }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Task Name</th>
            
            <th>TaskInfo</th>
            <th>Task Suggestions</th>
              
          </tr>
         
        </thead>
        <tbody>

          {/* Mapping though every element in the array
and showing the data in the form of table */}
          {Taskarray.map((item) => {
            return (

              <tr>
                <td>{item.TaskName}</td>
                <td>{item.TaskInfo}</td>
                <td>{item.TaskSuggestions}</td>
                

                {/* getting theid,name, and age for storing these
      value in the jsx with onclick event */}
                <td><Link to={`/Edittask`}><Button onClick={(e) =>
                  setID(item.id, item.TaskName, item.TaskInfo, item.TaskSuggestions)} variant="info">
                  Update</Button></Link></td>

                {/* Using thr deleted function passing
   the id of an entry */}
                <td><Button onClick={e => deleted(item.id)}
                  variant="danger">Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      {/* Button for redirecting to create page for
insertion of values */}
      <Link className="d-grid gap-2" to='/Addtask'>
        <Button variant="warning" size="lg">Add Task</Button>
      </Link>
    </div>
  </div>
   )
}


export default Task