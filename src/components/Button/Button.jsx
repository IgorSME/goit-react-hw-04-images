import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export function ButtonLoad({ onClick }) {
  return <ButtonLoadMore onClick={onClick}>Load More</ButtonLoadMore>;
}
ButtonLoad.propTypes = {
  onClick: PropTypes.func.isRequired,
};
