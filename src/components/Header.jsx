import React from "react";


export function Header() {
    return (
        <header>
            <a href="/" className="logo">Shoe<span>Brand</span></a>
            <nav>
                <svg className="close" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#sneakers">sneakers</a></li>
                    <li><a href="#playes">players</a></li>
                </ul>
            </nav>

            <svg className="menu" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" fill="white" />
            </svg>
        </header>
    );
}