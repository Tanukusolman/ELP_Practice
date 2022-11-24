import { Link } from "react-router-dom";
import EmployeeData from "../components/EmployeeData";
import SearchBar from "../components/SearchBar";
import Footer from "../components/footer";
import Theme from "../components/theme";
import { Nav, Tab, Dropdown } from "react-bootstrap";

function Employees() {




  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Tab.Container id="left-tabs-example" defaultActiveKey="listView">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Employee</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">
                        <span>
                          <i className="la la-home"></i> Home
                        </span>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="la la-users"></i> Employees
                    </li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <Link to href="#" className="btn add-btn">
                    Sync Employees
                  </Link>
                  <Nav as="ul" variant="pills" className="view-icons">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="listView" className="grid-view btn">
                        <i className="fa fa-th"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="gridView" className="grid-view btn">
                        <i className="fa fa-bars"></i>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
            <SearchBar />
            <Tab.Content>
              <Tab.Pane eventKey="listView">
                <div className="row staff-grid-row">
                  <EmployeeData />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="gridView">
                <div className="staff-list-row">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table datatable">
                      <thead>
                        <tr>
                          <th>Recognized</th>
                          <th>Email</th>
                          <th>Type</th>
                          <th>Points</th>
                          <th className="text-nowrap">Date</th>
                          <th>Reward Citation</th>
                          <th className="text-right no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-02.jpg")}
                                />
                              </span>
                              <span>Sridhar Kambala</span>
                            </h2>
                          </td>
                          <td>sridhar.kambala@evolutyz.com</td>
                          <td>Spot Award</td>
                          <td>500</td>
                          <td>6/6/2022</td>
                          <td>Congrats on the great work</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-09.jpg")}
                                />
                              </span>
                              <span>Ganesh Varikuti</span>
                            </h2>
                          </td>
                          <td>ganesh.varikuti@evoutyz.com</td>
                          <td>Happy Birthday</td>
                          <td>500</td>
                          <td>25-05-2022</td>
                          <td>yes they are great at doing their work</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-10.jpg")}
                                />
                              </span>
                              <span>Srikanth Guttula</span>
                            </h2>
                          </td>
                          <td>srikanth.guttula@evoutyz.com</td>
                          <td>Spot Award</td>
                          <td>500</td>
                          <td>2/5/2022</td>
                          <td>Great job done by him this month</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-05.jpg")}
                                />
                              </span>
                              <span>Aditya Ramella</span>
                            </h2>
                          </td>
                          <td>aditya.ramella@evolutyz.com</td>
                          <td>Service Award</td>
                          <td>5000</td>
                          <td>12/4/2022</td>
                          <td>Congrats on reaching this milestone</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-11.jpg")}
                                />
                              </span>
                              <span>Rajinikant Sharma</span>
                            </h2>
                          </td>
                          <td>rajinikant.sharma@evolutyz.com</td>
                          <td>Spot Award</td>
                          <td>500</td>
                          <td>28-03-2022</td>
                          <td>Well done kudos good job</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-04.jpg")}
                                />
                              </span>
                              <span>Dungi Pravalika Reddy</span>
                            </h2>
                          </td>
                          <td>pravalika.dungi@evolutyz.com</td>
                          <td>Happy Birthday</td>
                          <td>500</td>
                          <td>28-03-2022</td>
                          <td>Many Happy Returns of the Day</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-08.jpg")}
                                />
                              </span>
                              <span>Shalini Vinolia</span>
                            </h2>
                          </td>
                          <td>shalini.vinolia@evolutyz.com</td>
                          <td>Thank You Card</td>
                          <td></td>
                          <td>24-02-2022</td>
                          <td>Thank you for all the help</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-13.jpg")}
                                />
                              </span>
                              <span>Sai Paturi</span>
                            </h2>
                          </td>
                          <td>sai.paturi@evolutyz.com</td>
                          <td>Spot Award</td>
                          <td>1000</td>
                          <td>24-02-2022</td>
                          <td>Great work done by Anki</td>
                          <td className="text-right">
                            <Dropdown className="dropdown-action" as="div">
                              <Dropdown.Toggle
                                className="nav-link action-icon"
                                as="a"
                                id="dropdown-basic1"
                              >
                                <i className="material-icons">more_vert</i>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Footer/>
        <Theme/>
        
      </div>
    </>
  );
}

export default Employees;
