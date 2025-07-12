import PropTypes from 'prop-types';

const Right = ({ login }) => {
    return (
        <div>
            {login && (
                <p className="text-white">Welcome, user!</p>
            )}
        </div>
    );
};

Right.propTypes = {
    login: PropTypes.bool
};

export default Right;
