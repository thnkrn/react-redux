import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Result({ data }) {
  const { isFetching, payload } = data

  if (isFetching) {
    return (
      <div>LOADING...</div>
    )
  }

  if (!Object.keys(payload).length) {
    return (
      <div>NO RESULT!</div>
    )
  }

  return (
    <div>
      <div>Flight Number: {payload.flight_number}</div>
      <div>Mission Name: {payload.mission_name}</div>
      <div>Ships: {[...payload.ships].join()}</div>
      <img src={payload.links.flickr_images[4]} alt=""/>
    </div>
  )
}

Result.defaultProps = {
  data: {
    isFetching: false,
    payload: {},
  },
}

Result.propTypes = {
  data: PropTypes.shape({
    isFetching: PropTypes.bool,
    payload: PropTypes.shape({
      flight_number: PropTypes.number,
      mission_name: PropTypes.string,
      ships: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.shape({
        flickr_images: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }),
}

const mapStateToprops = (state) => ({
  data: state.spacex,
})

export default connect(mapStateToprops)(Result)
