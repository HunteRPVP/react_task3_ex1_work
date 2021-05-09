import React from "react";

export class He extends React.Component {

    render() {
        return (
                 <h1>
                   Mr. {this.props.name} {this.props.age}
                 </h1>
               );
    }

}

// export function He(props) {
//   return (
//     <h1>
//       Mr. {props.name} {props.age}
//     </h1>
//   );
// }
