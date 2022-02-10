import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer>
        <article class="partA">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <br />
          <Link to="/Bracelets">
            <button type="button">bracelets</button>
          </Link>
          <br />
          <Link to="/Rings">
            <button type="button">Rings</button>
          </Link>
          <br />
          <Link to="/Watches">
            <button type="button">Watches</button>
          </Link>
          <br />
          <Link to="/Necklaces">
            <button type="button">Necklaces</button>
          </Link>
        </article>
        <article class="partB">
          <li>
            <a href="">More About Us</a>
          </li><br />
          <li>
            <a href="">Context</a>
          </li><br />
          <li>
            <a href="">Questions</a>
          </li><br />
          <li>
            <a href="">Whats app</a>
          </li><br />
        </article>
        <article class="partC">
          <h2>
            we are a gruop from <br />
            keren , oshri , lior , haim <br />
            we do this side in 20 hours <br />
            hope you like it
          </h2>
        </article>
      </footer>
    </div>
  );
};
export default Footer;
