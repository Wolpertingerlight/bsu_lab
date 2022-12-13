import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {
    CNavbarNav,
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarToggler,
    CCollapse,
    CNavItem,
    CNavLink
} from '@coreui/react';
import {useState} from "react";
export default function Navbar() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CNavbar expand="lg" colorScheme="light" style={{ backgroundColor: '#e3f2fd' }}>
                <CContainer fluid>
                    <CNavbarBrand href="/">Главная</CNavbarBrand>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav>
                            <CNavItem>
                                <CNavLink href="/image" active>
                                    Картинка
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="/calendar">Календарь</CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
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