import React from 'react'
import { Link } from 'react-router-dom';

export default function AddProduct() {
    /* 
    productId: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    require: true,
  },
  altName: [{ type: String }],
  description: {
    type: String,
    required: true,
  },
  img: [
    {
      type: String,
    },
  ],
  labelPrice: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
    */ 
   const [productId, setProductId] = React.useState("");
   const [productName, setProductName] = React.useState("");
   const [altName, setAltName] = React.useState([]);
    const [description, setDescription] = React.useState("");
    const [img, setImg] = React.useState([]);
    const [labelPrice, setLabelPrice] = React.useState(0);
    const [Price, setPrice] = React.useState(0);
    const [stock, setStock] = React.useState(0);
    const [isAvailable, setIsAvailable] = React.useState(true);
  return (
    <div className='w-full h-full flex flex-col justify-center items-center border border-amber-600 border-4'>
       <div className=' flex flex-col gap-2 bg-amber-500'>
        <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="text" placeholder="Alt Name (comma separated)" value={altName} onChange={(e) => setAltName(e.target.value.split(","))} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Image URLs (comma separated)" value={img} onChange={(e) => setImg(e.target.value.split(","))} />
        <input type="number" placeholder="Label Price" value={labelPrice} onChange={(e) => setLabelPrice(parseFloat(e.target.value))} />
        <input type="number" placeholder="Price" value={Price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
        <label>
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
          Is Available
        </label>
       </div>
        <div className="w-full flex flex-row justify-center items-center">
            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => {
                // Handle add product logic here
            }}>
                Add product
            </button>
            <Link to="/admin/product" className='bg-gray-500 text-white py-2 px-4 rounded ml-4'>
                Cancel
            </Link>
        </div>
    </div>
  )
}




import React from 'react'

export default function AddProduct() {
  const [productId, setProductId] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [altName, setAltName] = React.useState([]);
  const [altNameInput, setAltNameInput] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState([]);
  const [imgInput, setImgInput] = React.useState("");
  const [labelPrice, setLabelPrice] = React.useState(0);
  const [Price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [isAvailable, setIsAvailable] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  // Add alternative name to array
  const handleAddAltName = () => {
    if (altNameInput.trim()) {
      setAltName([...altName, altNameInput.trim()]);
      setAltNameInput("");
    }
  };

  // Remove alternative name from array
  const handleRemoveAltName = (index) => {
    setAltName(altName.filter((_, i) => i !== index));
  };

  // Add image URL to array
  const handleAddImg = () => {
    if (imgInput.trim()) {
      setImg([...img, imgInput.trim()]);
      setImgInput("");
    }
  };

  // Remove image URL from array
  const handleRemoveImg = (index) => {
    setImg(img.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const productData = {
      productId,
      productName,
      altName,
      description,
      img,
      labelPrice: Number(labelPrice),
      Price: Number(Price),
      stock: Number(stock),
      isAvailable,
    };

    console.log("Product Data:", productData);
    // TODO: Add your API call here
    
    setIsLoading(false);
  };

  // Reset form
  const handleReset = () => {
    setProductId("");
    setProductName("");
    setAltName([]);
    setAltNameInput("");
    setDescription("");
    setImg([]);
    setImgInput("");
    setLabelPrice(0);
    setPrice(0);
    setStock(0);
    setIsAvailable(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Add New Product</h1>
          <p className="text-gray-400">Fill in the details to add a new product to your inventory</p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8">
          
          {/* Basic Info Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">1</span>
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product ID */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Product ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="Enter unique product ID"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Product Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Enter product name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Alternative Names Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">2</span>
              Alternative Names
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={altNameInput}
                  onChange={(e) => setAltNameInput(e.target.value)}
                  placeholder="Add alternative name"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddAltName())}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={handleAddAltName}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-all hover:scale-105"
                >
                  Add
                </button>
              </div>
              {altName.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {altName.map((name, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded-lg text-sm"
                    >
                      {name}
                      <button 
                        type="button"
                        onClick={() => handleRemoveAltName(index)}
                        className="hover:text-red-400 transition-colors"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">3</span>
              Description
            </h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter detailed product description..."
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Images Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">4</span>
              Product Images
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="url"
                  value={imgInput}
                  onChange={(e) => setImgInput(e.target.value)}
                  placeholder="Enter image URL"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddImg())}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={handleAddImg}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-all hover:scale-105"
                >
                  Add
                </button>
              </div>
              {img.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {img.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Product ${index + 1}`}
                        className="w-full h-24 object-cover rounded-xl border border-gray-600"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=Invalid+URL'}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImg(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">5</span>
              Pricing & Inventory
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Label Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Label Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={labelPrice}
                    onChange={(e) => setLabelPrice(e.target.value)}
                    min="0"
                    step="0.01"
                    required
                    className="w-full pl-8 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Selling Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Selling Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="0"
                    step="0.01"
                    required
                    className="w-full pl-8 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Stock */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  min="0"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Discount Badge */}
            {labelPrice > 0 && Price > 0 && Price < labelPrice && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                <span className="text-green-400 font-medium">
                  🎉 {Math.round(((labelPrice - Price) / labelPrice) * 100)}% Discount Applied
                </span>
              </div>
            )}
          </div>

          {/* Availability Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">6</span>
              Availability
            </h2>
            <label className="flex items-center gap-4 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={(e) => setIsAvailable(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-14 h-8 rounded-full transition-colors ${isAvailable ? 'bg-green-500' : 'bg-gray-600'}`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isAvailable ? 'translate-x-7' : 'translate-x-1'}`}></div>
                </div>
              </div>
              <span className={`font-medium ${isAvailable ? 'text-green-400' : 'text-gray-400'}`}>
                {isAvailable ? 'Product is Available' : 'Product is Unavailable'}
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-amber-500/25"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Adding Product...
                </span>
              ) : (
                '✓ Add Product'
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-xl transition-all hover:scale-[1.02]"
            >
              Reset Form
            </button>
          </div>
        </form>

        {/* Preview Card */}
        {productName && (
          <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-amber-500 mb-4">Live Preview</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gray-700 rounded-xl overflow-hidden">
                {img[0] ? (
                  <img src={img[0]} alt={productName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold text-white">{productName}</h4>
                <p className="text-sm text-gray-400">ID: {productId || 'N/A'}</p>
                <p className="text-gray-300 line-clamp-2">{description || 'No description'}</p>
                <div className="flex items-center gap-3 pt-2">
                  {labelPrice > Price && (
                    <span className="text-gray-500 line-through">${labelPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-amber-500">${Price}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${isAvailable ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isAvailable ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
