import './product-list-item.css';

const ProductListItem = ({
  name,
  sale,
  onDelete,
  onToggleProp,
  increase,
  like,
}) => {
  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ' increase';
  }
  if (like) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="like"
        style={{ fontSize: '2rem' }}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={sale + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie" />
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
};

export default ProductListItem;
