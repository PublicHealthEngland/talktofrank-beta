import { connect } from 'react-redux'

import PageNotFound from '../../components/PageNotFound/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app
}

export default connect(mapStateToProps)(PageNotFound)
