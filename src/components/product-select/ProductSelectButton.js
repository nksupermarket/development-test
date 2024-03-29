import arrowLeftSVG from '../../assets/svg/arrow-left-s-line.svg';
import arrowRightSVG from '../../assets/svg/arrow-right-s-line.svg';

const ProductSelectButton = ({ isActive, isMobile, onClick }) => {
  const visibilityClass = isActive ? 'active' : '';
  return (
    <button
      className={`product-select-button ${visibilityClass} flex-centered border-box`}
      type="button"
      onClick={onClick}
    >
      <div className="icon-wrapper flex-centered">
        <img
          src={isActive ? arrowRightSVG : arrowLeftSVG}
          height={isMobile ? 25 : 35}
          width={isMobile ? 25 : 35}
          alt={isActive ? 'right arrow' : 'left arrow'}
          className="arrow-icon"
        />
      </div>
    </button>
  );
};

export default ProductSelectButton;
