import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Theme from "../components/theme";

function InstantReward() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header mb-2">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Reward Association</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">
                          <span>
                            <i className="la la-home"></i> Home
                          </span>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <i className="la la-award"></i> Instant(User)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             

              <Tabs defaultActiveKey="individual" className="nav-tabs-bottom">
                <Tab eventKey="individual" title="Individual">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Instant</h4>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Employee
                              </label>
                              <div className="col-lg-9">
                                <div className="top-nav-search position-relative">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search Employee by Name.."
                                  />
                                  <button className="btn" type="submit">
                                    <i className="fa fa-search"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Employee ID
                              </label>
                              <div className="col-lg-9">
                                <div className="top-nav-search position-relative">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search Employee by ID.."
                                  />
                                  <button className="btn" type="submit">
                                    <i className="fa fa-search"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Award/Recognition
                              </label>
                              <div className="col-lg-9">
                                <select
                                  className="form-control"
                                  aria-label="Select Award"
                                >
                                  <option>-- Select Award --</option>
                                  <option value="0">
                                    Employee Of The Year
                                  </option>
                                  <option value="1">
                                    Recruiter of the Month (US IT Recruiters)
                                  </option>
                                  <option value="2">
                                    Recruiter of the Month (India IT Recruiters
                                    Only)
                                  </option>
                                  <option value="3">
                                    Team Lead of Half Year (US Team Leaders)
                                  </option>
                                  <option value="4">
                                    Team Lead of Half Year (India Team Leaders)
                                  </option>
                                  <option value="5">
                                    suprise spotlight award by sreneey (us IT
                                    recrutiers Only)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            Write Citation
                            <i className="text-danger small">*</i>
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              className="form-control shr"
                              placeholder="Min 5 Words and Max 35 Words"
                            />
                            <small>
                              (special charecters not allowed except , -_-&%! )
                            </small>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            Add Business Justification
                            <i className="text-danger small">*</i>
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Only for Review"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Single File Upload
                          </label>
                          <div className="col-lg-9">
                            <div
                              className="custom-file-container"
                              data-upload-id="myFirstImage"
                            >
                              <label className="mb-0">
                                Upload (Single File)
                                <Link
                                  href="javascript:void(0)"
                                  className="custom-file-container__image-clear"
                                  title="Clear Image"
                                >
                                  x
                                </Link>
                              </label>
                              <label className="custom-file-container__custom-file">
                                <input
                                  type="file"
                                  className="custom-file-container__custom-file__custom-file-input"
                                  accept="image/*"
                                />
                                <input
                                  type="hidden"
                                  name="MAX_FILE_SIZE"
                                  value="10485760"
                                />
                                <span className="custom-file-container__custom-file__custom-file-control"> Choose File...</span>
                              </label>
                              <div className="custom-file-container__image-preview">
                                <img src={require("../assets/img/fileupload.png")} />
                              </div>
                            </div>
                            <div
                              className="custom-file-container d-none"
                              data-upload-id="mySecondImage"
                            >
                              <label>
                                Upload (Allow Multiple)
                                <Link
                                  href="javascript:void(0)"
                                  className="custom-file-container__image-clear"
                                  title="Clear Image"
                                >
                                  x
                                </Link>
                              </label>
                              <label className="custom-file-container__custom-file">
                                <input
                                  type="file"
                                  className="custom-file-container__custom-file__custom-file-input"
                                  multiple
                                />
                                <input
                                  type="hidden"
                                  name="MAX_FILE_SIZE"
                                  value="10485760"
                                />
                                <span className="custom-file-container__custom-file__custom-file-control"></span>
                              </label>
                              <div className="custom-file-container__image-preview"></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      accept="image/*"
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      value="10485760"
                    />
                   
                  </label>
                </Tab>

                <Tab eventKey="bulkupdate" title="Bulk Update">
                  <div
                    className="tab-pane"
                    id="BulkUpload"
                    role="tabpanel"
                    aria-labelledby="bulkupload-tab"
                  >
                    <div className="faq-card">
                      <form>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            Upload Document
                          </label>
                          <div className="col-lg-7">
                            <input
                              type="file"
                              className="form-control"
                              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            />
                            <span className="form-text text-muted">
                              Recommended image size is 200px x 40px
                            </span>
                          </div>
                          <div className="col-lg-2">
                            <div className="img-thumbnail float-right">
                              <img
                                src="assets/img/logo.png"
                                className="img-fluid"
                                alt=""
                                width="140"
                                height="40"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            Template format <Link href="#"> Click here(.xls )</Link>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <Theme></Theme>
       
      </div>
    </>
  );
}

export default InstantReward;
