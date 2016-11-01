import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let process = (formType === login) ? login : signup;
  return {
  processForm: user => dispatch(process(user)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
