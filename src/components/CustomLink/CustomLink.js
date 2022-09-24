import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({to, children, ...props}) => {
    let resolve = useResolvedPath(to)
    let match = useMatch({path: resolve.pathname, end: true})
    return (
            <Link style={{color: match ? '#0991B1':'black'}} to={to} {...props}>
                {children}
            </Link>
    );
};

export default CustomLink;