import React from 'react';
import { Alert } from 'reactstrap';


class SubmitError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

render() {
    return (
        <div>
            <Alert color="danger">
                Please Select an Option
            </Alert>
        </div>
        )
    }
}

export default SubmitError;