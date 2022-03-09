import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import check from '../check.png';
import cross from '../cross.png';

export const WorkList = () => {
  return (
    <div className="Client">
      <table class="table table-dark table-hover">
        <caption className="caption">
          <center>
            <h2>CLIENT-WORKLIST</h2>
          </center>
        </caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Applies To</th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col">Individual</th>
            <th scope="col">Propertier</th>
            <th scope="col">Partner</th>
            <th scope="col">Firm</th>
            <th scope="col">CoOpSoc</th>
            <th scope="col">Company</th>
            <th scope="col">Trust</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">PAN Apply</th>
            <td>
              <img src={check} width="25%"></img>
            </td>
            <td>
              <img src={cross} width="25%"></img>
            </td>
            <td><img src={cross} width="25%"></img></td>
            <td><img src={cross} width="25%"></img></td>
            <td><img src={check} width="25%"></img></td>
            <td><img src={cross} width="25%"></img></td>
            <td><img src={cross} width="25%"></img></td>
          </tr>
          
          <tr>
            <th scope="row">PAN Apply</th>
            <td>
              <img src={check} width="20%"></img>
            </td>
            <td>
              <img src={cross} width="20%"></img>
            </td>
            <td></td>
          </tr>
          
          <tr>
            <th scope="row">PAN Apply</th>
            <td>
              <img src={check} width="20%"></img>
            </td>
            <td>
              <img src={cross} width="20%"></img>
            </td>
            <td></td>
          </tr>
          
          <tr>
            <th scope="row">PAN Apply</th>
            <td>
              <img src={check} width="20%"></img>
            </td>
            <td>
              <img src={cross} width="20%"></img>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Link to="/worklist/addlist">
        <center>
          <button type="button" className="btn btn-primary btn-lg">
            Add Worklist
          </button>
        </center>
      </Link>
    </div>
  );
};
