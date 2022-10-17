import React, { Component } from 'react'
import { tableHeadColor } from '../Utils/colors'
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap'

export class MyTable extends Component {
  render() {
    return (
        <Table  borderless className="table" >
        <thead  style={{background: tableHeadColor}}>
          <tr className="tr-head " >
            <th scope="col">AMOUNT</th>
            <th scope="col">DATE</th>
            <th scope="col">TIME</th>
            <th scope="col">CONTRIBUTION ID</th>
          </tr>
        </thead>
            <tbody >
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
                <tr className="tr-row">
                    <th scope="row">¢200</th>
                    <td>20-02-2022</td>
                    <td>12:PM</td>
                    <td>0000000000</td>
                </tr>
           


            </tbody>
      </Table>
    )
  }
}

export default MyTable