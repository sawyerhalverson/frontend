import { Link } from "react-router-dom";


function Nav(props: any) {
  return (
    <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
      <li style={{ marginRight: "1rem" }}>
        <Link to="/" style={{ color: "black", textDecoration: "none", fontWeight:"bolder"}}>
          Home Page
        </Link>
      </li>
      <li style={{ marginRight: "1rem" }}>
        <Link to="/podcast" style={{ color: "black", textDecoration: "none" , fontWeight:"bolder"}}>
          Podcast
        </Link>
      </li>
      <li style={{ marginRight: "1rem" }}>
        <Link to="/movies" style={{ color: "black", textDecoration: "none", fontWeight:"bolder" }}>
          Movie Collection
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
