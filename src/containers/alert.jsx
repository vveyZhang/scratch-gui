import React from 'react';
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';

import AlertComponent from '../components/alerts/alert.jsx';

class Alert extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleOnCloseAlert'
        ]);
    }
    handleOnCloseAlert () {
        this.props.onCloseAlert(this.props.index);
    }
    render () {
        return (
            <AlertComponent
                iconURL={this.props.iconURL}
                message={this.props.message}
                onCloseAlert={this.handleOnCloseAlert}
            />
        );
    }
}

Alert.propTypes = {
    iconURL: PropTypes.string,
    index: PropTypes.number,
    message: PropTypes.string,
    onCloseAlert: PropTypes.func.isRequired
};

export default Alert;
