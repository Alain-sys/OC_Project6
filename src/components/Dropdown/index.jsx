// @ts-ignore image path
import arrowIcon from '../../assets/icon/arrow.svg';
function DropDown({ title, content }) {
  return (
    <details className="drop-down">
      <summary className="drop-down__summary">
        <h2 className="drop-down__summary-title">{title}</h2>
        <img className="drop-down__icon" src={arrowIcon} alt="arrow icon" />
      </summary>
      <div className="drop-down__content">
        <p className="drop-down__description">{content}</p>
      </div>
    </details>
  );
}

export default DropDown;
