import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { useSelector } from "react-redux";

const Header = () => {
  const [count, setCount] = useState(0)
  const items = useSelector(items=> items.items)
  useEffect(()=>{
    setCount(items.length) 
  })
	const handleChange = () => {

	}
	const handleSubmit = () => {

	}

  return(
		<nav className=" header d-flex align-items-center">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <form
        className="header__search d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="header__searchText"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button className="btn search__btn">
          <BsSearch size={40} className="header__searchIcon" />
        </button>
      </form>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart size={32} />
            <span>{count}</span>
          </div>
        </Link>
      </div>
    </nav>
	);
}

export default Header