import './app-filter.css';

const AppFilter = ({ onChangeFilter, filter }) => {
  const buttonsData = [
    { name: 'all', label: 'All product', colored: false },
    { name: 'star', label: 'Star product', colored: false },
    { name: 'sale', label: 'Sale more 1000', colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    const style = colored ? { color: 'blue' } : null;

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => onChangeFilter(name)}
        style={style}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
