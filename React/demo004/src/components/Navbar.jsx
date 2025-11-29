import { Link } from "react-router"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header">
                <div>
                    <Link className="link"><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul className="ul-style">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
