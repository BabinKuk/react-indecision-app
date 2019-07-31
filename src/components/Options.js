import React from 'react'; 
import Option from './Option';

// converted into stateless functional component
// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.onRemoveAll = this.onRemoveAll.bind(this); // set this
//     // }
    
//     // onRemoveAll() {
//     //     console.log('onRemoveAll', this.props.options);
//     // }

//     render() {
//         return  (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//                 </ol>
//             </div>
//         );
//     }
// }
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message"
        >Please add an option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;