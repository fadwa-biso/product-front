import React, { useState, useEffect } from 'react';
import { FiFilter, FiChevronDown, FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { allProducts } from '../data/mockData';

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    brand: ''
  });

  const location = useLocation();
  const productsPerPage = 20;

  // Get initial search query and category from URL params
  const urlParams = new URLSearchParams(location.search);
  const initialQuery = urlParams.get('q') || '';
  const initialCategory = urlParams.get('category') || '';

  useEffect(() => {
    // Scroll to top when component mounts (when navigating from other pages)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Set initial category filter if provided
    if (initialCategory) {
      setFilters(prev => ({
        ...prev,
        category: initialCategory
      }));
    }
    
    // Handle initial search query
    if (initialQuery) {
      setSearchQuery(initialQuery);
      handleSearchFromQuery(initialQuery);
    }
  }, [initialQuery, initialCategory]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearchFromQuery = (query) => {
    // تجنب البحث المتكرر لنفس النص
    if (query === lastSearchTerm) {
      return;
    }
    
    setIsSearching(true);
    setLastSearchTerm(query);
    
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // Simulate search delay for better UX
    setTimeout(() => {
      setSearchResults(results);
      setHasSearched(true);
      setSearchQuery(query);
      setIsSearching(false);
      setCurrentPage(1); // Reset to first page
    }, 1500);
  };

  const handleSearch = (query) => {
    handleSearchFromQuery(query);
  };

  // Clear search when input is empty
  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
    
    // If search query is empty, clear search automatically
    if (query.trim() === '' && hasSearched) {
      clearSearch();
    }
  };

  // Get products to display (search results or filtered products)
  const getDisplayProducts = () => {
    if (hasSearched) {
      return searchResults;
    }
    
    // Apply filters to all products
    return allProducts.filter(product => {
      const categoryMatch = !filters.category || product.category === filters.category;
      const priceMatch = !filters.priceRange || checkPriceRange(product.price, filters.priceRange);
      
      return categoryMatch && priceMatch;
    });
  };

  const checkPriceRange = (price, range) => {
    switch (range) {
      case '0-25':
        return price <= 25;
      case '25-50':
        return price > 25 && price <= 50;
      case '50-100':
        return price > 50 && price <= 100;
      case '100+':
        return price > 100;
      default:
        return true;
    }
  };

  const displayProducts = getDisplayProducts();
  
  // Pagination logic
  const totalPages = Math.ceil(displayProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = displayProducts.slice(startIndex, startIndex + productsPerPage);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId) => {
    window.location.href = `/product/${productId}`;
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setHasSearched(false);
    setLastSearchTerm('');
    setIsSearching(false);
    setCurrentPage(1);
  };

  // Get unique values for filters
  const categories = [...new Set(allProducts.map(p => p.category))];
  const brands = [...new Set(allProducts.map(p => p.brand))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Section */}
      <section className="pt-8 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Search for Products
            </h1>
            <p className="text-lg text-gray-600">
              Find the products and healthcare items you need
            </p>
          </div>
          
          {/* Search Bar */}
          <SearchBar 
            onSearch={handleSearch}
            onInputChange={handleSearchInputChange}
            placeholder="Search for products (e.g., Vitamins, Cosmetics, Supplements...)"
            showDropdown={false}
            autoSearch={true}
            initialQuery={searchQuery}
          />

          {/* Search Status */}
          {hasSearched && (
            <div className="text-center mt-4">
              <p className="text-gray-600">
                {searchResults.length > 0 
                  ? `Found ${searchResults.length} results for "${searchQuery}"`
                  : `No results found for "${searchQuery}"`
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          {isSearching ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Searching...
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Please wait while we find products for "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="flex gap-8">
              {/* Filters Sidebar - Only show when not searching or search has results */}
              {(!hasSearched || searchResults.length > 0) && (
                <div className="hidden lg:block w-64 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                      <FiFilter className="w-5 h-5" />
                      Filters
                    </h3>
                    
                    {/* Category Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value=""
                            checked={filters.category === ''}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            className="text-teal-400 focus:ring-teal-400"
                            disabled={hasSearched}
                          />
                          <span className="ml-2 text-gray-600">All Categories</span>
                        </label>
                        {categories.map(category => (
                          <label key={category} className="flex items-center">
                            <input
                              type="radio"
                              name="category"
                              value={category}
                              checked={filters.category === category}
                              onChange={(e) => handleFilterChange('category', e.target.value)}
                              className="text-teal-400 focus:ring-teal-400"
                              disabled={hasSearched}
                            />
                            <span className="ml-2 text-gray-600">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="price"
                            value=""
                            checked={filters.priceRange === ''}
                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                            className="text-teal-400 focus:ring-teal-400"
                            disabled={hasSearched}
                          />
                          <span className="ml-2 text-gray-600">All Prices</span>
                        </label>
                        {['0-25', '25-50', '50-100', '100+'].map(range => (
                          <label key={range} className="flex items-center">
                            <input
                              type="radio"
                              name="price"
                              value={range}
                              checked={filters.priceRange === range}
                              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                              className="text-teal-400 focus:ring-teal-400"
                              disabled={hasSearched}
                            />
                            <span className="ml-2 text-gray-600">
                              ${range === '100+' ? '100+' : range.replace('-', ' - $')}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Filter Button */}
              {(!hasSearched || searchResults.length > 0) && (
                <div className="lg:hidden w-full mb-4">
                  <button
                    onClick={toggleFilter}
                    className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
                    disabled={hasSearched}
                  >
                    <span className="flex items-center gap-2 font-medium text-gray-700">
                      <FiFilter className="w-5 h-5" />
                      Filters
                    </span>
                    <FiChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Filters */}
                  {isFilterOpen && (
                    <div className="bg-white rounded-lg shadow-md p-4 mt-2">
                      <div className="grid grid-cols-1 gap-4">
                        {/* Category Filter */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Category</h4>
                          <select
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-400 focus:border-teal-400"
                            disabled={hasSearched}
                          >
                            <option value="">All Categories</option>
                            {categories.map(category => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </div>

                        {/* Price Filter */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                          <select
                            value={filters.priceRange}
                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-400 focus:border-teal-400"
                            disabled={hasSearched}
                          >
                            <option value="">All Prices</option>
                            <option value="0-25">$0 - $25</option>
                            <option value="25-50">$25 - $50</option>
                            <option value="50-100">$50 - $100</option>
                            <option value="100+">$100+</option>
                          </select>
                        </div>

                        {/* Brand Filter */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Brand</h4>
                          <select
                            value={filters.brand}
                            onChange={(e) => handleFilterChange('brand', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-400 focus:border-teal-400"
                            disabled={hasSearched}
                          >
                            <option value="">All Brands</option>
                            {brands.map(brand => (
                              <option key={brand} value={brand}>{brand}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Products Grid */}
              <div className="flex-1">
                {hasSearched && searchResults.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiSearch className="w-12 h-12 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      No Results Found
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We couldn't find any products matching "{searchQuery}". Try searching with different keywords.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Results Info */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        {hasSearched ? (
                          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Search Results for "{searchQuery}"
                          </h2>
                        ) : (
                          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            All Products
                          </h2>
                        )}
                        <p className="text-gray-600">
                          Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, displayProducts.length)} of {displayProducts.length} products
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Page {currentPage} of {totalPages}
                      </p>
                    </div>

                    {/* Products Grid */}
                    {currentProducts.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {currentProducts.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            <div className="relative">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                              />
                              {!product.inStock && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  Out of Stock
                                </div>
                              )}
                              {product.originalPrice > product.price && (
                                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  Sale
                                </div>
                              )}
                            </div>
                            
                            <div className="p-6">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded-full">
                                  {product.category}
                                </span>
                                <span className="text-xs text-gray-500">{product.brand}</span>
                              </div>
                              
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {product.name}
                              </h3>
                              
                              <p className="text-gray-600 mb-4">
                                {product.description.more_information}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-teal-600">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice > product.price && (
                                    <span className="text-lg text-gray-400 line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                
                                <div className="text-sm text-gray-600">
                                  {product.inStock ? (
                                    <span className="text-green-600 font-medium">
                                      {product.stockCount} in stock
                                    </span>
                                  ) : (
                                    <span className="text-red-600 font-medium">
                                      Out of stock
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FiFilter className="w-12 h-12 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                          No Products Found
                        </h2>
                        <p className="text-gray-600 max-w-md mx-auto">
                          No products match your current filters. Try adjusting your search criteria.
                        </p>
                      </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              currentPage === page
                                ? 'bg-teal-400 text-white'
                                : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;