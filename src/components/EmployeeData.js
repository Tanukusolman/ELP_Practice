import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Modal, Dropdown } from "react-bootstrap";
import axios from "axios";

function EmployeeData() {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/user/all?page=1&size=50`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setUserData(response.data);
          })
          .catch(function (error) {});
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
        {Array.isArray(userData.items) &&
          userData.items.map((req) => (
            <>
              <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div>
                    <div className="profile-img">
                      <span className="avatar">
                        <img
                          src={require("../assets/img/profiles/avatar-02.jpg")}
                          alt=""
                        ></img>
                      </span>
                    </div>
                    <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                      {req.first_name} {req.last_name}
                    </h4>
                    <div className="small text-muted">{req.designation}</div>
                  </div>
                  <Dropdown className="profile-action" as="div">
                    <Dropdown.Toggle
                      className="nav-link action-icon"
                      as="a"
                      id="dropdown-basic1"
                    >
                      <i className="material-icons">more_vert</i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-right">
                      <Dropdown.Item href="#" onClick={handleShow}>
                        <i className="fa fa-pencil m-r-5"></i> Edit
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </>
          ))}

      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <div className="modal-content p-2">
          <div className="modal-heading">
            <h2>Sridhar Kambala </h2>
            <span className="popDown" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </span>
          </div>
          <div className="modalBody">
            <div className="profile">
              <img
                src={require("../assets/img/profiles/avatar-02.jpg")}
                alt="EITS1616"
              />
              <h5>
                <strong>
                  <i className="fa fa-address-card"></i> EITS1616
                </strong>
              </h5>
            </div>
            <div className="infos">
              <ul className="personal-info">
                <li>
                  <div className="text">
                    <i className="fa fa-envelope"></i>{" "}
                    sridhar.kambala@evolutyz.com
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="fa fa-mobile"></i> 8767960625
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="fa fa-trophy"></i> Spot Award
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="la la-award"></i> 500
                  </div>
                </li>
              </ul>
            </div>

            {/* <div id="edit_employee" class="modal custom-modal fade" role="dialog">
               <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title">Assign Group</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <form>
                           <div class="row">
                              <div class="col-md-8">
                                 <div class="form-group">
                                    <label>Department <span class="text-danger">*</span></label>
                                    <select class="select">
                                       <option>Select Department</option>
                                       <option>Employees on Probation</option>
                                       <option>Interns</option>
                                       <option> Consultants</option>
                                       <option>Confirmed Employees</option>
                                       <option>Trainees</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="col-md-4">
                                 <div class="text-center mt-4">
                                    <button class="btn btn-primary submit-btn">Save</button>
                                 </div>                                 
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EmployeeData;
