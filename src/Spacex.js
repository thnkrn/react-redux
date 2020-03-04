import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchSpacex from './actions'
import Result from './Result'

function Spacex({ fetchData }) {
  const onClick = () => {
    fetchData()
  }

  return (
    <div>
      <h1>SPACEX!</h1>
      <button onClick={onClick}>FETCH DATA</button>
      <Result />
    </div>
  )
}

Spacex.propTypes = {
  fetchData: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => { dispatch(fetchSpacex()) }
})

export default connect(undefined, mapDispatchToProps)(Spacex)
