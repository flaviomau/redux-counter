import React /*,{Component}*/ from 'react'
import propTypes from 'prop-types'

/*
class Greeting extends Component{
    render(){
        return(
            <span> Hello {this.props.name}</span>
        )
    }
}
*/

const Greeting = ({ name }) => {
    return <span> Hello {name}</span>
}

Greeting.propTypes = {
    name: propTypes.string
}

Greeting.defaultProps = {
    name: 'Peter'
}

export default Greeting