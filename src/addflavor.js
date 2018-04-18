import React, { Component } from 'react';
import {
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form, FormGroup, Label, Input, FormText, Modal
} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

class AddFlavor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            flavornumber: "",
            flavorname: ""
        };

        this.closeModal = this.closeModal.bind(this);
        this.submitData = this.submitData.bind(this);
        this.flavornumber = this.flavornumber.bind(this);
        this.flavorname = this.flavorname.bind(this);
        this.toggle = this.toggle.bind(this);
        this.flavornameChange = this.flavornameChange.bind(this);
        this.flavornumberChange = this.flavornumberChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    submitData() {
        axios.post('/submitData', {
            // flavornumber: this.state.flavornumber,
            flavorname: this.state.flavorname,
        }).then(() => {
            this.toggle()
        })
    }

    flavornameChange(e) {
        this.setState({
            flavorname: e.target.value
        });
    }

    flavorname(e) {
        this.setState({
            flavorname: e.target.value
        });
    }

    flavornumberChange(e) {
        this.setState({
            flavornumber: e.target.value
        });
    }

    flavornumber(e) {
        this.setState({
            flavornumber: e.target.value
        });
    }

    closeModal() {
        this.props.dispatch({
            type: "closeModal"
        });
    }

    render() {
        return (
            <div className="popup">
                <Button color="#000000" onClick={this.toggle}>{this.props.buttonLabel}Contribute to the flavor list.</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a Flavor</ModalHeader>
                    <ModalBody>
                        {/* <div> */}
                        <Form>
                            <FormGroup>
                                <Label for="flavorInput">Have I missed something?  Add a flavor to the database:</Label>
                                <Input onChange={this.flavornameChange} type="textarea" value={this.state.flavorname} placeholder="Type a flavor here"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="primarySecondary">Main Flavor or Accompanying Flavor?</Label>
                                <Input onChange={this.flavornumberChange} type="select" value={this.state.flavornumber} name="select" id="primaryorsecondary">
                                    <option>Primary Flavor</option>
                                    <option>... or maybe a hint of...</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        {/* </div> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="light" onClick={this.submitData}>Submit!</Button>{' '}
                        {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal>
            </div>
            
        )
    }
}

// export default connect ((state) => (state))(AddFlavor);
export default AddFlavor;