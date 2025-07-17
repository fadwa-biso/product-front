import React, { useState } from 'react';
import { FiMenu, FiX, FiUser, FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getActiveClass = (path) => {
    if (path === '/' && location.pathname === '/') {
      return 'text-teal-600 border-b-2 border-teal-600 font-medium';
    }
    if (path === '/products' && location.pathname === '/products') {
      return 'text-teal-600 border-b-2 border-teal-600 font-medium';
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return 'text-teal-600 border-b-2 border-teal-600 font-medium';
    }
    return 'text-gray-600 hover:text-teal-600 font-medium';
  };

  const getMobileActiveClass = (path) => {
    if (path === '/' && location.pathname === '/') {
      return 'text-teal-600 font-medium bg-teal-50 border-l-4 border-teal-600';
    }
    if (path === '/products' && location.pathname === '/products') {
      return 'text-teal-600 font-medium bg-teal-50 border-l-4 border-teal-600';
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return 'text-teal-600 font-medium bg-teal-50 border-l-4 border-teal-600';
    }
    return 'text-gray-600 font-medium hover:text-teal-600 hover:bg-teal-50 transition-all';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a className="flex items-center text-teal-600" href="/">
              <span className="material-icons text-3xl">RxCure</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 ml-auto pr-6">
            <a className={getActiveClass('/')} href="/">
              Home
            </a>
            <a className={getActiveClass('/products')} href="/products">
              Products
            </a>
            <a className={getActiveClass('/about')} href="#">
              About Us
            </a>
            <a className={getActiveClass('/contact')} href="#">
              Contact Us
            </a>
          </nav>

          {/* Search Bar and Actions */}
<div className="flex items-center space-x-2 my-1 ">
            {/* البحث دايمًا ظاهر جنب الأيقونة */}
            <div className="flex items-center space-x-2">
<div className="w-67" >
                <SearchBar
                  placeholder="Search for medicine"
                  showDropdown={true}
                />
              </div>
            </div>

            {/* Login / Sign Up */}
            <a
              className="hidden sm:inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-600 bg-teal-100 hover:bg-teal-200"
              href="#"
            >
              Login
            </a>
            <a
              className="hidden sm:inline-block px-4 py-2 border border-teal-600 text-sm font-medium rounded-md text-teal-600 hover:bg-teal-50"
              href="#"
            >
              Sign Up
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-500 hover:text-teal-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
            <a href="/" className={`block py-3 px-4 ${getMobileActiveClass('/')}`}>
              Home
            </a>
            <a href="/products" className={`block py-3 px-4 ${getMobileActiveClass('/products')}`}>
              Products
            </a>
            <a href="#" className={`block py-3 px-4 ${getMobileActiveClass('/about')}`}>
              About Us
            </a>
            <a href="#" className={`block py-3 px-4 ${getMobileActiveClass('/contact')}`}>
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
