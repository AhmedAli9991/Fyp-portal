import React from "react";

import { sessionWiseData, sessionWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function MakeSynopsisSchedule() {
  const alertHandler = () => {
    alert("Schedule Updated!");
  };
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Programs :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option selected="selected" value="5">
                      -
                    </option>
                    <option value="1">MS (CS)</option>
                    <option value="2">MS (CS)</option>
                    <option value="3">MS (CS)</option>
                    <option value="4">MS (CS)</option>
                    <option value="5">MS (CS)</option>
                    <option value="6">MS (CS)</option>
                  </select>

                  <div className="col-md-2 col-sm-4">Session :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="1">N/A</option>
                    <option value="15">SP11</option>
                    <option value="16">FA11</option>
                    <option value="17">SP12</option>
                    <option value="18">FA12</option>
                    <option value="19">SP13</option>
                    <option value="20">FA13</option>
                    <option value="21">SP14</option>
                    <option value="22">FA14</option>
                    <option value="23">SP15</option>
                    <option value="24">FA15</option>
                    <option value="25">SP16</option>
                    <option value="26">FA16</option>
                    <option value="27">SP17</option>
                    <option value="28">FA17</option>
                    <option value="29">SP18</option>
                    <option value="30">FA18</option>
                    <option value="31">SPRING 2019</option>
                    <option value="32">FALL 2019</option>
                    <option value="33">SPRING 2020</option>
                    <option value="1033">FALL 2020</option>
                    <option value="1034">SPRING 2021</option>
                    <option value="1036">FALL 2021</option>
                  </select>
                  <div className="col-md-2 col-sm-4">Programs :</div>
                  <div className="col-md-2 col-sm-4">Students :</div>
                </div>
              </div>

              <div className="col-lg-12 mt-2">
                <DataTable header={sessionWiseHeader} data={sessionWiseData} />
                <button
                  className="btn btn-sm btn-dark"
                  type="number"
                  min={0}
                  name="tutionFeePaid"
                  // value={saveModal.tutionFeePaid}
                  // onChange={this.changeHandler}
                  onClick={alertHandler}
                >
                  Update Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
