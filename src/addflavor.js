import React, { Component } from 'react';
import {
    Alert,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form, FormGroup, Label, Input, FormText, Modal
} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import './generator.css';
import './App.css';
import SubmitError from './error.js'


class AddFlavor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            flavornumber: "Select",
            flavorname: "",
            selectState: "Select"
        };

        this.closeModal = this.closeModal.bind(this);
        this.submitData = this.submitData.bind(this);
        this.flavornumber = this.flavornumber.bind(this);
        this.flavorname = this.flavorname.bind(this);
        this.toggle = this.toggle.bind(this);
        this.flavornameChange = this.flavornameChange.bind(this);
        this.flavornumberChange = this.flavornumberChange.bind(this);
    }

    toggle() 
    {
        this.setState({
            modal: !this.state.modal
        });
    }

    submitData() {
        //add if/else statement
        console.log(this.state.flavornumber);
        console.log(this.state.selectState);
       if(this.state.flavornumber != this.state.selectState) {
           axios.post('/submitData', {
            flavornumber: this.state.flavornumber,
            flavorname: this.state.flavorname,
        }).then(() => {
            this.toggle()
        })
    } else {
        this.setState({
            error:true
        })
        console.log('somethingFailed');
} 
    }
//these are all methods!!!!!!!!!
 
    

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

        if(this.state.error){
            var error = <SubmitError modalToggle={this.state.toggle} />
        }
        return (
            <div className="popup">
                <Button className="generateButton" onClick={this.toggle}>{this.props.buttonLabel}Contribute to the flavor list.</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                    <div className="modalTitle">
                    Add a Flavor
                    </div>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="flavorInput">
                                <div className="addFlavorText">
                                Have I missed something?  Add a flavor to the database:
                                </div>
                                </Label>
                                <Input className="generateButton" onChange={this.flavornameChange} type="textarea" value={this.state.flavorname} placeholder="Type a flavor here"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="primarySecondary">
                                <div className="addFlavorText">
                                Main Flavor or Accompanying Flavor?
                                </div>
                                </Label>
                                <Input className="generateButton" onChange={this.flavornumberChange} type="select" value={this.state.flavornumber} name="select" id="primaryorsecondary">
                                    <option value="Select">{this.state.selectState}</option>
                                    <option value="1">Primary Flavor</option>
                                    <option value="2">... or add a hint of...</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        {/* </div> */}
                    </ModalBody>
                    <ModalFooter>
                        {error}
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



/*
        if (this.state.flavornumber = 0) {
            console.log("please select an option");
                    }
*/