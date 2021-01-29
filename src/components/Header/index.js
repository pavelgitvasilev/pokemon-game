import stylesHeader from './style.module.css' 

const Header = ({ title, description }) => {
  return (
    <header className={stylesHeader.root}>
      <div className={stylesHeader.forest}></div>
      <div className={stylesHeader.container}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}

export default Header;