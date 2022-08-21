import React from 'react'
import './main.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import {RiDeleteBinLine} from 'react-icons/ri'

const main = () => {
  return (
    <>
    <div className='comp'>
    <div>
        <ul className='nav2'>
            <li>
                Business Hours
            </li>
            <li>
              Preferences  
            </li>
            <li>
            Accounts
            </li>
        </ul>
    </div>
    <hr/>
    <div>
        <h1 className='user'>Users</h1>
    </div>
    <div>
        <button className='btn'><AiOutlineUserAdd/>Add User</button>
    </div>
    <div>
    <Table className='table'>
      <thead>
        <tr className='tb'>
          <th>Name</th>
          <th>Email ID</th>
          <th>Mobile No.</th>
          <th>Remark</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fiona Gallagher</td>
          <td>Fiona07@Gallagher.com</td>
          <td>9201457854</td>
          <td>Head Physician</td>
          <td>
        <label className='switch'>
        <input type="checkbox"/>
        <span className="slider round"></span>
        </label>
          </td>
          <td><button><RiDeleteBinLine/>Delete</button></td>
        </tr>
        <tr>
        <td>Frank Gallagher</td>
          <td>Frank07@Gallagher.com</td>
          <td>9201434554</td>
          <td>Staff Account</td>
          <td>
          <label className='switch'>
          <input type="checkbox"/>
          <span className="slider round"></span>
          </label>
          </td>
          <td><button><RiDeleteBinLine/>Delete</button></td>
        </tr>
      </tbody>
    </Table>    
    </div>    
    </div>
    </>
  )
}

export default main