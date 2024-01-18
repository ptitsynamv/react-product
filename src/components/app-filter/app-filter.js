import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All product
      </button>
      <button className="btn btn-outline-light" type="button">
        Sale product
      </button>
      <button className="btn btn-outline-light" type="button">
        Sale more 1000
      </button>
    </div>
  );
};

export default AppFilter;
