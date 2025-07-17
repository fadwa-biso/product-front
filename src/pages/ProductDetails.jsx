import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiMinus, FiPlus, FiTruck, FiShield, FiRefreshCw, FiMapPin, FiPhone } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { allProducts } from '../data/mockData';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= (product?.stockCount || 1)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiRefreshCw className="w-8 h-8 text-teal-400 animate-spin" />
          </div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-4 pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-teal-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-teal-400 transition-colors">Products</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.description.more_information}
                </p>
              </div>

        
              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-teal-600">
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice > product.price && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">
                      In Stock ({product.stockCount} available)
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Quantity Selector */}
              {product.inStock && (
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stockCount}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-teal-400 text-white py-4 px-6 rounded-xl font-semibold hover:bg-teal-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <FiHeart className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FiTruck className="w-6 h-6 text-teal-400" />
                  </div>
                  <p className="text-sm text-gray-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FiShield className="w-6 h-6 text-teal-400" />
                  </div>
                  <p className="text-sm text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FiRefreshCw className="w-6 h-6 text-teal-400" />
                  </div>
                  <p className="text-sm text-gray-600">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Pharmacies Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FiMapPin className="w-6 h-6 text-teal-400" />
              Available at These Pharmacies
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.pharmacies.map((pharmacy) => (
                <div
                  key={pharmacy.id}
                  className={`bg-white rounded-xl p-6 shadow-md border-2 transition-all ${
                    pharmacy.available 
                      ? 'border-green-200 hover:border-green-300' 
                      : 'border-red-200 opacity-75'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {pharmacy.name}
                      </h3>
                      <p className="text-gray-600 flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {pharmacy.location} • {pharmacy.distance}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pharmacy.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {pharmacy.available ? 'Available' : 'Out of Stock'}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiPhone className="w-4 h-4" />
                      <span className="text-sm">{pharmacy.phone}</span>
                    </div>
                    
                    {pharmacy.available && (
                      <button className="bg-teal-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-500 transition-colors">
                        Contact
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Availability and prices may vary. Please contact the pharmacy directly to confirm stock and reserve your item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Description</h3>
                  <p className="text-gray-600 mb-6">{product.description.more_information}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Scientific Name</h3>
                  <p className="text-gray-600 mb-4">{product.description.scientific_name}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Belongs To</h3>
                  <p className="text-gray-600 mb-6">{product.description.belongs_to}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Medical Uses</h3>
                  <ul className="space-y-2">
                    {product.description.medical_uses.map((use, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Instructions</h3>
                  <ul className="space-y-2 mb-6">
                    {product.description.usage_instructions.map((instruction, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {instruction}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Side Effects</h3>
                  <ul className="space-y-2 mb-6">
                    {product.description.side_effects.map((effect, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {effect}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Warnings & Precautions</h3>
                  <ul className="space-y-2 mb-6">
                    {product.description.warnings_precautions.map((warning, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {warning}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Additional Information</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><span className="font-medium">Mechanism of Action:</span> {product.description.mechanism_of_action}</p>
                      <p><span className="font-medium">Pregnancy & Breastfeeding:</span> {product.description.pregnancy_breastfeeding}</p>
                    </div>
                    
                    <h5 className="font-semibold text-gray-800 mt-4 mb-2">Storage Instructions</h5>
                    <ul className="space-y-1">
                      {product.description.storage_instructions.map((instruction, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {instruction}
                        </li>
                      ))}
                    </ul>
                    
                    {product.description.helpful_tips.length > 0 && (
                      <>
                        <h5 className="font-semibold text-gray-800 mt-4 mb-2">Helpful Tips</h5>
                        <ul className="space-y-1">
                          {product.description.helpful_tips.map((tip, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;