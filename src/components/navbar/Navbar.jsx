import Style from './nav.module.css';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [login, setLogin] = useState(false); 
    const [dropdown, setDropDown] = useState(false);

    const showDropdown = () => {
        setDropDown(!dropdown);
    };

    return (
        <>
            <div className={Style.navbar}>
                <article>
                    <Left />
                </article>

                {/* Middle: only visible on large screens */}
                <article className={`${Style.items} ${Style.hideOnMobile}`}>
                    <Middle />
                </article>

                {/* Menu toggle icon (mobile only) */}
                <div onClick={showDropdown} className={Style.menuIcon}>
                    {dropdown ? <MdClose /> : <HiMenuAlt3 />}
                </div>

                {/* Dropdown for mobile */}
                {dropdown && (
                    <div className={Style.dropdownWrapper}>
                        <Dropdown closeDropdown={showDropdown} />
                    </div>
                )}

                {/* Right section visible only if login is true */}
                {login && (
                    <article className={Style.search}>
                        <Right />
                    </article>
                )}
            </div>
        </>
    );
};

export default Navbar;
