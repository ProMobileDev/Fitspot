import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrainWorkoutDetail from '@Booking/components/TrainWorkoutDetail'
import { selectActivity } from '@store/modules/booking/actions'
import CONSTS from '@utils/Consts'

type Props = {
  activities: Array,
  bookingState: Object,
  selectActivity: Function,
}


class BookingTrainWorkoutDetailsContainer extends Component {

  props: Props

  render() {
    return (
      <TrainWorkoutDetail {...this.props }  />
    )
  }

}


const mapStateToProps = (state) => {
  return {
    activities: state.booking.bookingType === CONSTS.BOOKING_TYPE.BY_TRAINER ? state.booking.chosenTrainer.trainer.activities :
    state.auth.appSettings.activities,
    bookingState: state.booking
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectActivity: (activity) => {
      dispatch(selectActivity(activity))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookingTrainWorkoutDetailsContainer)
