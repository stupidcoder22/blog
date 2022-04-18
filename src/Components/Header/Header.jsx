import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlessm">Welcome To My</span>
        <span className="headerTitleslg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
};

export default Header;
