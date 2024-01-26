import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.nav}>
                    <li><NavLink to="/"
                    >Home</NavLink></li>
                    <li><NavLink to="/posts"
                    >Posts</NavLink></li>
                    <li><NavLink to="/contacts"
                    >Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export {Header};