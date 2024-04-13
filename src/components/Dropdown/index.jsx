// @ts-ignore image path
import arrowIcon from '../../assets/icon/arrow.svg';
function DropDown({ title, list, content }) {
  return (
    <details className="drop-down">
      <summary className="drop-down__summary">
        <h2 className="drop-down__summary-title">{title}</h2>
        <img
          className="drop-down__icon"
          src={arrowIcon}
          alt="icône d'une flèche"
        />
      </summary>
      <div className="drop-down__content">
        {list ? (
          <ul className="drop-down__list">
            {content.map((item, index) => (
              <li key={index} className="drop-down__description">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="drop-down__description">{content}</p>
        )}
      </div>
    </details>
  );
}

DropDown.defaultProps = {
  list: false,
};

export default DropDown;
