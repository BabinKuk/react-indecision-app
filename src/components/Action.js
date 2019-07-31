import React from 'react'; 

// converted into stateless functional component
// class Action extends React.Component {
//     // handlePick() {
//     //     console.log('handle');
//     // }

//     render() {
//         return  (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
const Action = (props) => (
    <div>
        <button 
        className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;