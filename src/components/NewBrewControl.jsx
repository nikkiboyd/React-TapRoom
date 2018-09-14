import React from 'react';
import NewBrew from './NewBrew';
import PropTypes from 'prop-types';

class NewBrewControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleAddBrewConfirmation = this.hamdleAddBrewConfirmation.bind(this);
    }

    handleAddBrewConfirmation() {
        this.setState({formVisibleOnPage: true});
    }

    render(){
        let currentlyVisibleContent = null;
        if (this.state.formVisisbleOnPage){
            currentlyVisibleContent = <NewBrew onNewBrewCreation={this.props.onNewBrewCreation}/>;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onAddBrewConfirmation={this.handleAddBrewConfirmation}/>;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewBrewControl.propTypes = {
    onNewBrewCreation: PropTypes.func
};

export default NewBrewControl;