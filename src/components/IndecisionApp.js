import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        //options : props.options //['option 1', 'option 2', 'option 4']
        options: [],
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
        
    // }

    handleDeleteOptions= (e) => {
        this.setState(() => ({ options : [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log('delete option ', optionToRemove);
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => {
                return optionToRemove !== option; // remove from array
            })
        }));
    }

    handleClearSelectedOption = () => {
        console.log('handleClearOption');
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handlePick = () => {
        console.log('handle pick');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
            
        //set state to set selectedOption
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        console.log(option);
        
        if (!option) {
            return 'Enter valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options : prevState.options.concat(option)
        }));
    }

    // lifecycle methods (accessible only in class components)
    componentDidMount() {
        try {
            console.log('comp did mount, fetch data');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            //console.log(options);
            // display on screen
            if (options) {
                this.setState(() => ({options : options}));
            }
        } catch (error) {
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('comp did update, save data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('comp will unmount');
    }
        
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer";
        //const options = ['option 1', 'option 2', 'option 3'];
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
}

// default props values
IndecisionApp.defaultProps = {
    options : []
};