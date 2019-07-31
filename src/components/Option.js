import React from 'react'; 

// converted into stateless functional component
// class Option extends React.Component {
//     render() {
//         return  (
//             <div>
//                 <li>Option: {this.props.optionText}</li>
//             </div>
//         );
//     }
// }
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
);

export default Option; 
