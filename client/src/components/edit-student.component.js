import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onChangeStudentEducation = this.onChangeStudentEducation.bind(this);
    this.onChangeStudentLocation = this.onChangeStudentLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: '',
      email: '',
      dob: '',
      education: '',
      location: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          dob: res.data.dob,
          education: res.data.education,
          location: res.data.location
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      dob: this.state.dob,
      education: this.state.education,
      location: this.state.location
    };
    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/student-list')
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
        <Button variant="danger" size="md" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}