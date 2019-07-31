import React from 'react'; 

export default class AddOption extends React.Component {
    state = {
        error : undefined
    }
    
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // }

    handleAddOption = (e) => {
        console.log('onFormSubmit');
        e.preventDefault();

        // field value
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error : error }));

        // clear input if there was no error
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return  (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form 
                    className="add-option"
                    onSubmit={this.handleAddOption}
                >
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}