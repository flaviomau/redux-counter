import React from 'react'
import { connect } from 'react-redux'

export const DisplayCounter = ( { count } ) => {
    return <p> The actual counter is: {count} </p>
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter)