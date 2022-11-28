import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateStudent extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onChangeStudentEducation = this.onChangeStudentEducation.bind(this);
    this.onChangeStudentLocation = this.onChangeStudentLocation.bind(this);
    this.onChangeStudentAbout = this.onChangeStudentAbout.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: '',
      email: '',
      dob: '',
      education: '',
      location: '',
      about: ''
    }
  }
  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeStudentDob(e) {
    this.setState({ dob: e.target.value })
  }
  onChangeStudentEducation(e) {
    this.setState({ education: e.target.value })
  }
  onChangeStudentLocation(e) {
    this.setState({ location: e.target.value })
  }
  onChangeStudentAbout(e) {
    this.setState({ about: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      dob: this.state.dob,
      education: this.state.education,
      location: this.state.location,
      about: this.state.about
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));
    this.setState({ name: '', email: '', dob: '', education: '', location: '', about: '' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>
        <Form.Group controlId="Dob">
          <Form.Label>Dob</Form.Label>
          <Form.Control type="text" value={this.state.dob} onChange={this.onChangeStudentDob} />
        </Form.Group>
        <Form.Group controlId="Education">
          <Form.Label>Education</Form.Label>
          <Form.Control type="text" value={this.state.education} onChange={this.onChangeStudentEducation} />
        </Form.Group>
        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={this.state.location} onChange={this.onChangeStudentLocation} />
        </Form.Group>
        <Form.Group controlId="About">
          <Form.Label>About</Form.Label>
          <Form.Control type="text" value={this.state.about} onChange={this.onChangeStudentAbout} />
        </Form.Group>
        <Button variant="danger" size="md" block="block" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </div>);
  }
}