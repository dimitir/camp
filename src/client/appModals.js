import { Component } from 'react';
import React from 'react'
import uuid from 'uuid';
import './app.css';
import ModalContainer from './container/modalContainer';
import { openModal } from './store/modals/actions';
import CustomModalContent from './container/customModalContent';




export default class App extends Component {


    render() {

        console.log(this.props);
        return (
            <div>
                <button
                    className="test-button"
                    onClick={() => this.props.dispatch(openModal({
                        id: uuid.v4(),
                        type: 'confirmation',
                        text: 'Are you sure to do this?',
                        onClose: () => console.log('fire at closing event'),
                        onConfirm: () => console.log('fire at confirming event'),
                    }))}
                >
                    Open confirmation modal

        </button>

                <button
                    className="test-button"
                    onClick={() => this.props.dispatch(openModal({
                        id: uuid.v4(),
                        type: 'custom',
                        content: <CustomModalContent />
                    }))}
                >
                    Open custom modal

        </button>

                <ModalContainer />
            </div>
        );
    }
}
