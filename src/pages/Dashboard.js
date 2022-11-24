import { useState } from "react";

import { useMsal } from "@azure/msal-react";
import Footer from "../components/footer";
import Theme from "../components/theme";
import Carousel from "react-grid-carousel";

function Dashboard() {
  const ProfileData = (props) => {
    console.log(props.graphData);
  };

  const { accounts } = useMsal();
  // eslint-disable-next-line no-unused-vars
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ProfileData graphData={graphData} />
                <h3 className="page-title">Welcome {name} ,</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">
                    <i className="la la-home"></i> Home
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop
            slide="false"
            indicators="false"
            controls="false"
            nextIcon='<span aria-hidden="true" className="carousel-control-next-icon"></span>'
          >
            <Carousel.Item>
              <div className="row">
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-list-alt"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>12</h3>
                        <span>Program 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-rupee"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>36</h3>
                        <span>Program 2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-id-badge"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>48</h3>
                        <span>Program 3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-trophy"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>39</h3>
                        <span>Program 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-list-alt"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>22</h3>
                        <span>Program 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-rupee"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>33</h3>
                        <span>Program 6</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-id-badge"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>98</h3>
                        <span>Program 7</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className="dash-widget-icon">
                        <i className="fa fa-trophy"></i>
                      </span>
                      <div className="dash-widget-info">
                        <h3>69</h3>
                        <span>Program 8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-3 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h4 className="card-title">
                    Top Performers{" "}
                    <span className="badge bg-inverse-danger ml-2">5</span>
                  </h4>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <a href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </a>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Pravalika Reddy
                        </div>
                        <span className="badge bg-inverse-warning">500</span>
                        <span className="text-xs font-weight-light text-muted">
                          Points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <a href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </a>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Avinash GM
                        </div>
                        <span className="badge bg-inverse-success">800</span>
                        <span className="text-xs font-weight-light text-muted">
                          Points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="load-more text-center">
                    <a className="text-dark" href="javascript:void(0);">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h4 className="card-title">
                    Recent Awardees{" "}
                    <span className="badge bg-inverse-danger ml-2">2</span>
                  </h4>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <a href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </a>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Venkat Chaitanya
                        </div>
                        <span className="text-xs font-weight-light text-muted">
                          Permanent
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-6">
                        <h6 className="mb-0">4 Sep 2019</h6>
                        <span className="text-sm text-muted">5k Run</span>
                      </div>
                      <div className="col-6 text-right">
                        <span className="badge bg-inverse-warning">
                          runner-up
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <a href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </a>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Alekhya
                        </div>
                        <span className="text-xs font-weight-light text-muted">
                          Intern
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-6">
                        <h6 className="mb-0">4 Sep 2019</h6>
                        <span className="text-sm text-muted">5k Run</span>
                      </div>
                      <div className="col-6 text-right">
                        <span className="badge bg-inverse-success">Winner</span>
                      </div>
                    </div>
                  </div>
                  <div className="load-more text-center">
                    <a className="text-dark" href="javascript:void(0);">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 d-flex">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h3 className="card-title mb-0">Active Reward Programs</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Program Name </th>
                          <th>Progress</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.html">Emoji Quiz</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>16</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.html">
                                Friendship Day Event
                              </a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>21</span>{" "}
                              <span className="text-muted">Participants.</span>
                            </small>
                          </td>
                          <td className="pro-teams">
                            <div className="avatar-group">
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-11.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-01.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-16.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <a
                                  href=""
                                  className="avatar-title rounded-circle border border-white"
                                  data-toggle="modal"
                                  data-target="#assign_leader"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                              </div>
                            </div>
                          </td>

                          {/* <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i> Delete
                                  </a>
                                </div>
                              </div>
                            </td> */}

                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.html">
                                Icream co-worker bonding
                              </a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>09</span>{" "}
                              <span className="text-muted">Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.html">5k Run</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>18</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td className="pro-teams">
                            <div className="avatar-group">
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-11.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-01.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Image"
                                  src={require("../assets/img/profiles/avatar-16.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <a
                                  href=""
                                  className="avatar-title rounded-circle border border-white"
                                  data-toggle="modal"
                                  data-target="#assign_leader"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.html">Independence Day</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>27</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="projects.html">View all activities</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h3 className="card-title mb-0">Social-Media Leadboard</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="#" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-19.jpg")}
                                ></img>
                              </a>
                              <a href="client-profile.html">
                                Sudeep Sehgal <span>Fullstack</span>
                              </a>
                            </h2>
                          </td>
                          <td>Sudeep.Sehgal@evolutyz.com</td>
                          <td>
                            <a className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-success"></i>{" "}
                              Online
                            </a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="#" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-19.jpg")}
                                ></img>
                              </a>
                              <a href="client-profile.html">
                                Sanjay Ramadugu <span>Devops</span>
                              </a>
                            </h2>
                          </td>
                          <td>Sanjay.Ramadugu@evolutyz.com</td>
                          <td>
                            <a className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-07.jpg")}
                                ></img>
                              </a>
                              <a href="client-profile.html">
                                Florence Masih <span>HR | Noida</span>
                              </a>
                            </h2>
                          </td>
                          <td>Florence.Masih@evolutyz.com</td>
                          <td>
                            <a className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-06.jpg")}
                                ></img>
                              </a>
                              <a href="client-profile.html">
                                {" "}
                                Rajnikant Sharma <span>Delivery Manager</span>
                              </a>
                            </h2>
                          </td>
                          <td>Rajnikant.Sharma@evolutyz.com</td>
                          <td>
                            <div className="dropdown action-label">
                              <a
                                className="btn btn-white btn-sm btn-rounded "
                                href="#"
                                // data-toggle="dropdown"
                                // aria-expanded="false"
                              >
                                <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                Online
                              </a>
                              {/* <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                  Online
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                  Offline
                                </a>
                              </div> */}
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-14.jpg"
                                ></img>
                              </a>
                              <a href="client-profile.html">
                                {" "}
                                Voonna Sowmya <span>QA Automation</span>
                              </a>
                            </h2>
                          </td>
                          <td>Sowmya.Voonna@evolutyz.com</td>
                          <td>
                            <a className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="clients.html">complete leading board</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Theme />
      </div>
    </>
  );
}

export default Dashboard;
