import React, {Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                subject: false, 
            }
        }
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        });
    }

    handleSubmit = (event) => {
            console.log('Current state is: ' + JSON.stringify(this.state));
            alert('Current state is: ' + JSON.stringify(this.state));
            event.preventDefault();
    }

    validate(firstName, lastName, email, subject) {

        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            subject: ''
        };

        if(this.state.touched.firstName) {
            if(firstName.length < 2) {
                errors.firstName='First name must be at least than 2 characters'
            } else if (firstName.length > 15) {
                errors.firstName= 'First name must be 15 or less characters'
            }
        }

        if(this.state.touched.lastName) {
            if(lastName.length < 2) {
                errors.lastName='Last name must be at least than 2 characters'
            } else if (lastName.length > 15) {
                errors.lastName= 'Last name must be 15 or less characters'
            }
        }

        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(this.state.touched.email && !reg.test(email)) {
            errors.email= 'Email must be valid'
        }

        if(this.state.subject) {
            if (subject.length > 15){
                errors.subject= 'subject must be 15 or less characters'
            }
        }
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.subject)
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-sm-8 col-md-6 contact-form">
                        <h1 className="contact-header"> Contact Me </h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" className="form-label">First Name</Label>
                                <Input type="text" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    invalid={errors.firstName}
                                    onBlur={this.handleBlur("firstName")}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" className="form-label" >Last Name</Label>
                                <Input type="text" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    invalid={errors.lastName}
                                    onBlur={this.handleBlur("lastName")}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" className="form-label" >Email</Label>
                                <Input type="text" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="subject" className="form-label" >Subject</Label>
                                <Input type="text" id="subject" name="subject"
                                    placeholder="Subject"
                                    value={this.state.subject}
                                    invalid={errors.subject}
                                    onBlur={this.handleBlur("subject")}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.subject}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" className="form-label" >Message</Label>
                                <Input type="textarea" id="message" name="message"
                                    row= "12"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <div className="col-5 mt-3">
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;