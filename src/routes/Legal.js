import React, {Component} from 'react';
import LegalContainer from 'containers/LegalContainer'

class LegalRoute extends Component {
    render() {
        return (
            <div>
                <LegalContainer >
                    {this.props.children}
                </LegalContainer>
            </div>
        )
    }
}

export default LegalRoute;