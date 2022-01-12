import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
    // <div
    //   className="card"
    //   style={{
    //     backgroundColor: reverse ? "black" : "blue",
    //   }}
    // ></div>
  );
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
};

export default Card;
