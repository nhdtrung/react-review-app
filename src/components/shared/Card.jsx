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
    reserve: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
};

export default Card;
