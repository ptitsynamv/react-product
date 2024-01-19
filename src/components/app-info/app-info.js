import './app-info.css';

const AppInfo = ({ count, like }) => {
  return (
    <div className="app-info">
      <h1>My products</h1>
      <h2>Count: {count}</h2>
      <h2>Like: {like}</h2>
    </div>
  );
};

export default AppInfo;
