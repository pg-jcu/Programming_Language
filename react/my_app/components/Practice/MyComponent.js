import PropTypes from 'prop-types';
import '../../styles/Practice/MyComponent.css';

function MyComponent({name, children, number}) {
  return (
    <div className='MyComponent'>
      <div>My Component</div>
      <div>{name}</div>
      <div>{children}</div>
      <div>{number}</div>
    </div>
  );
}

MyComponent.defaultProps = {
  name: '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
}

export default MyComponent;