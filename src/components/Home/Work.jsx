import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
    return (
        <>
            <h2>QUALITY WORKS</h2>
            <h2>RECENTLY DONE PROJECT</h2>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>
                            All
                        </Link>
                    </li>
                    <li>
                        <Link to={'/web'}>
                            Web Developement
                        </Link>
                    </li>
                    <li>
                        <Link to={'/graphic'}>
                            Graphic Desing
                        </Link>
                    </li>
                    <li>
                        <Link to={'/cad'}>
                            CAD Design
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Work