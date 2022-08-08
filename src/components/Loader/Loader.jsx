import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function Loader({ visible }) {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        // wrapperStyle
        // wrapperClass
        visible={visible}
      />
    </div>
  );
}
Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
