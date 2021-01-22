import { connect } from 'react-redux'
import { postData } from '../redux/actions'
import Hello from './Hello'
const mapStateToProps = (state) => ({
    user_data: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (user) => dispatch(postData(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello)