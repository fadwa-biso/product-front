import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// استيراد الصور
import personalizedImg from '../assets/images/personalized.png';
import pharmacyImg from '../assets/images/pharmacy-landing-pagecopy__1_ff-removebg-preview.png';
import skinCareImg from '../assets/images/skin-care.png';
import supplementImg from '../assets/images/suplement.png';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/products?category=${encodeURIComponent(categoryName)}`);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Your Shortcut for Healing
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Quickly find, track, and manage your medications from local pharmacies.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
                    <Link 
                      to="/products"
                      className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:text-lg transition-colors"
                    >
                      Order Now!
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <img 
                  alt="Pharmacist at a counter illustration" 
                  className="w-full" 
                  src={pharmacyImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Explore by Category</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Find what you need with our curated categories.</p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Cosmetics */}
              <div 
                onClick={() => handleCategoryClick('Cosmetics')}
                className="pt-6 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flow-root px-6 pb-8">
                  <div className="-mt-6">
                    <img 
                      alt="Cosmetics" 
                      className="w-30 h-30"
                      src={skinCareImg}
                    />
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cosmetics</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Discover skincare and beauty products for your daily routine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vitamins & Supplements */}
              <div 
                onClick={() => handleCategoryClick('Vitamins')}
                className="pt-6 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flow-root px-6 pb-8">
                  <div className="-mt-6">
                    <img 
                      alt="Vitamins and Supplements" 
                      className="w-30 h-30"
                      src={supplementImg}
                    />
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Vitamins & Supplements</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Boost your wellbeing with our selection of vitamins and supplements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Care */}
              <div 
                onClick={() => handleCategoryClick('Personal Care')}
                className="pt-6 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flow-root px-6 pb-8">
                  <div className="-mt-6">
                    <img 
                      alt="Personal Care" 
                      className="w-30 h-30"
                      src={personalizedImg}
                    />
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Personal Care</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Essential personal care items for your daily hygiene routine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">How It Works</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A simple path to better health
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Getting your medication is as easy as 1, 2, 3.
              </p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white mx-auto">
                    <FiSearch className="w-6 h-6" />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">1. Search for your product</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Use our powerful search to find the exact medication or product you need.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">2. View available pharmacies</h3>
                    <p className="mt-2 text-base text-gray-500">
                      See a list of local pharmacies that have your item in stock, along with prices.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">3. Connect and acquire</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Contact the pharmacy to reserve your item for pickup or delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <a className="flex items-center text-white" href="#">
                {/* <span className="material-icons text-3xl">monitor_heart</span> */}
                <span className="ml-2 text-2xl font-bold">RxCure</span>
              </a>
              <p className="text-gray-400 text-base">
                Your trusted partner in health and wellness.
                <br/>
                Your shortcut for healing.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">Patients</a></li>
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">Pharmacies</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">About Us</a></li>
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">Privacy Policy</a></li>
                    <li><a className="text-base text-gray-300 hover:text-white" href="#">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">© 2024 RxCure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;