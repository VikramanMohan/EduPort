import Style from './nav.module.css';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import Dropdown from './Dropdown';

import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [login] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const showDropdown = () => {
        setDropDown((prev) => !prev);
    };

    // Auto-close dropdown on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setDropDown(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={Style.navbar}>
                {/* Left Section */}
                <article>
                    <Left />
                </article>

                {/* Middle Section (visible only on large screens) */}
                <article className={`${Style.items} ${Style.hideOnMobile}`}>
                    <Middle />
                </article>

                {/* Mobile Menu Icon */}
                <div
                    onClick={showDropdown}
                    className={Style.menuIcon}
                    role="button"
                    aria-label="Toggle menu"
                    tabIndex={0}
                >
                    {dropdown ? <MdClose /> : <HiMenuAlt3 />}
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {dropdown && (
                        <motion.div
                            className={Style.dropdownWrapper}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Dropdown closeDropdown={showDropdown} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right Section - only when login is true */}
                {login && (
                    <article className={Style.search}>
                        <Right login={login} />
                    </article>
                )}
            </div>
        </>
    );
};

export default Navbar;
