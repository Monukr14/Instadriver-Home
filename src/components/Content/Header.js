import React, { useState } from "react";
import HeaderImage from "../../Images/banner.png";
import {
  Form,
  InputGroup,
  Col,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="content-head"
      style={{ backgroundImage: "url(" + HeaderImage + ")" }}
    >
      <div className="container">
        <div className="col-lg-5" style={{ paddingTop: "40px" }}>
          <div className="center-box">
            <div className="head-content">
              <h3>Find and Hire A Driver. Its Free and No Login Requirement</h3>
            </div>
            <div className="form-details">
              <div>
                <Form.Group>
                  <Form.Control
                    as="select"
                    size="lg"
                    className="form-select-size"
                  >
                    <option>Select Category</option>
                    <option>Personal Driver</option>
                    <option>
                      Public Commuter Driver (e.g. Bus, Ambulance)
                    </option>
                    <option>Ride-Sharing Driver e.g Uber, Taxify</option>
                    <option>School Bus Driver</option>
                    <option>Truck Driver</option>
                    <option>Forklift Driver</option>
                    <option>On-Demand Driver</option>
                  </Form.Control>
                  <br />
                  <Form.Row className="align-items-center">
                    <Col size="lg" className="form-select-size">
                      <InputGroup className="mb-2">
                        <FormControl
                          id="inlineFormInputGroup"
                          placeholder="Enter a location"
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Control
                    as="select"
                    size="lg"
                    className="form-select-size"
                  >
                    <option>Select Search Type</option>
                    <option>Search All Drivers</option>
                    <option>Search Verified Drivers</option>
                  </Form.Control>
                  <br />
                  <div className="row">
                    <div className="col-lg-2 col-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text onClick={handleShow}>
                          @
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </div>
                    <div className="col-lg-10 col-10">
                      <Button
                        className="s-btn-stl"
                        style={{ width: "inherit" }}
                        variant="primary"
                      >
                        Search
                      </Button>

                      {/* Modal */}

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Filter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>
                                  Select currency used in your country
                                </Form.Label>
                                <Form.Control
                                  as="select"
                                  defaultValue="Choose..."
                                >
                                  <option>INR</option>
                                  <option>USD</option>
                                  <option>CAD</option>
                                </Form.Control>
                              </Form.Group>
                            </Form.Row>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control placeholder="Minimum" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                <Form.Label style={{ visibility: "hidden" }}>
                                  State
                                </Form.Label>
                                <Form.Control placeholder="Maximum" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                  as="select"
                                  defaultValue="Choose..."
                                >
                                  <option>Male</option>
                                  <option>Female</option>
                                </Form.Control>
                              </Form.Group>
                            </Form.Row>

                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>
                                  Years since driving Licence was issued
                                </Form.Label>
                                <InputGroup className="mb-2">
                                  <FormControl
                                    id="inlineFormInputGroup"
                                    placeholder="Atleast"
                                  />
                                  <InputGroup.Prepend>
                                    <InputGroup.Text>Years</InputGroup.Text>
                                  </InputGroup.Prepend>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Driving <br /> experience</Form.Label>

                                <InputGroup className="mb-2">
                                  <FormControl
                                    id="inlineFormInputGroup"
                                    placeholder="Atleast"
                                  />
                                  <InputGroup.Prepend>
                                    <InputGroup.Text>Years</InputGroup.Text>
                                  </InputGroup.Prepend>
                                </InputGroup>
                              </Form.Group>
                            </Form.Row>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button className="s-btn-stl" variant="primary" onClick={handleClose}>
                            Apply
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
