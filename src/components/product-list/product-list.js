import ProductListItem from '../product-list-item/product-list-item';
import './product-list.css';

const ProductList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ProductListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default ProductList;
