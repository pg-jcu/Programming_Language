import ReduxCounter from "../components/ReduxCounter";
import { connect } from 'react-redux';
import { decrease, increase } from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  return (
    <ReduxCounter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase())
  },
  decrease: () => {
    dispatch(decrease());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);