import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Главная
            </Link>
            <ul>
                <CustomLink to="/about">Обо мне</CustomLink>
                <CustomLink to="/calculator">Задание №1</CustomLink>
                <CustomLink to="/slides">Задание №2</CustomLink>
                <CustomLink to="/scenario">Задание №3</CustomLink>
                <CustomLink to="/roundabout">Задание №4</CustomLink>
                <CustomLink to="/shop">Задание №5</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}