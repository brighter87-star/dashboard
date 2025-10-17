import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Tabs() {
    return (
        <div>
            <nav className="tabs">
                <NavLink to="/screening" end>
                    미너비니 종목
                </NavLink>
                <NavLink to="/company">기업 정보</NavLink>
            </nav>
        </div>
    );
}
