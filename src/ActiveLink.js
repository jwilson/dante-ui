import {  Link, useRouteMatch, useLocation } from 'react-router-dom';

function ActiveLink({ label, to, variant, activeOnlyWhenExact }) {
    let location = useLocation();
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    let rootMatch = (location.pathname === '/index.html' || location.pathname === '/') 
        && to.toString() === '/character';
    let activeClass = " active shadow bg-" + variant;

    return (
        <Link className={`p-1 mr-1 nav-link${(rootMatch ? rootMatch : match) ? activeClass : ""}`} to={to}>{label}</Link>
    );
}

export default ActiveLink;
