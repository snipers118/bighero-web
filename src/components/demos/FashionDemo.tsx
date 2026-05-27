"use client";

import { useState } from "react";

const products = [
  { 
    id: 1, 
    name: "Pleated Midi Dress", 
    price: 1290, 
    imgFront: "https://loremflickr.com/400/600/dress,fashion?lock=121", 
    imgBack: "https://loremflickr.com/400/600/dress,woman?lock=122", 
    colors: ["#f4f1ea", "#2c2c2c"],
    sizes: ["S", "M", "L"],
    badge: "NEW"
  },
  { 
    id: 2, 
    name: "Linen Tailored Blazer", 
    price: 1890, 
    imgFront: "https://loremflickr.com/400/600/blazer,woman?lock=123", 
    imgBack: "https://loremflickr.com/400/600/blazer,fashion?lock=124", 
    colors: ["#e0d8cc", "#8c9b9d"],
    sizes: ["S", "M", "L", "XL"],
    badge: null
  },
  { 
    id: 3, 
    name: "Silk Slip Camisole", 
    price: 890, 
    imgFront: "https://loremflickr.com/400/600/silk,top?lock=125", 
    imgBack: "https://loremflickr.com/400/600/camisole,fashion?lock=126", 
    colors: ["#d9b8b8", "#1a1a1a", "#ffffff"],
    sizes: ["XS", "S", "M"],
    badge: "BESTSELLER"
  },
  { 
    id: 4, 
    name: "High-Waisted Wide Leg Trousers", 
    price: 1490, 
    imgFront: "https://loremflickr.com/400/600/trousers,fashion?lock=127", 
    imgBack: "https://loremflickr.com/400/600/pants,woman?lock=128", 
    colors: ["#2c2c2c", "#d1cdc2"],
    sizes: ["S", "M", "L"],
    badge: null
  }
];

export default function FashionDemo() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewId, setQuickViewId] = useState<number | null>(null);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-100 bg-white font-sans flex flex-col min-h-[850px] text-gray-900 animate-fade-in-up">
      
      {/* Announcement Bar */}
      <div className="bg-[#f2ece4] text-[#5c544d] text-[10px] uppercase tracking-[0.2em] py-2 text-center font-medium">
        Free shipping on all orders over ฿2,000
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 bg-white sticky top-0 z-40 border-b border-gray-50">
        <div className="flex gap-6 hidden md:flex text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500">
           <span className="text-gray-900 cursor-pointer">Shop</span>
           <span className="hover:text-gray-900 cursor-pointer transition-colors">Collections</span>
           <span className="hover:text-gray-900 cursor-pointer transition-colors">About</span>
        </div>
        
        <div className="text-2xl tracking-[0.2em] font-serif text-gray-900 mx-auto md:mx-0 uppercase">
          Elysian
        </div>

        <div className="flex items-center gap-5 text-gray-600">
          <button className="hover:text-gray-900 transition-colors">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="hover:text-gray-900 transition-colors relative">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
             {wishlist.length > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full"></span>}
          </button>
          <button className="hover:text-gray-900 transition-colors relative">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#faf9f7]">
        <div className="absolute inset-0 z-0">
           {/* Replace with loremflickr banner */}
           <img src="https://loremflickr.com/1200/600/fashion,editorial?lock=150" className="w-full h-full object-cover opacity-80" alt="New Collection" />
        </div>
        <div className="relative z-10 text-center bg-white/80 backdrop-blur-md p-10 max-w-lg border border-white/40 shadow-sm animate-fade-in-up">
           <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">Spring / Summer 2026</p>
           <h1 className="text-4xl font-serif text-gray-900 mb-6 italic">The Minimalist Wardrobe</h1>
           <button className="px-8 py-3 bg-gray-900 text-white text-[11px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
              Explore Collection
           </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-serif text-gray-900 italic">New Arrivals</h2>
            <div className="hidden md:flex gap-4 text-[10px] uppercase tracking-[0.1em] text-gray-500 font-medium">
               <span className="text-gray-900 border-b border-gray-900 pb-1 cursor-pointer">View All</span>
               <span className="hover:text-gray-900 cursor-pointer transition-colors">Dresses</span>
               <span className="hover:text-gray-900 cursor-pointer transition-colors">Tops</span>
               <span className="hover:text-gray-900 cursor-pointer transition-colors">Bottoms</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative flex flex-col"
                onMouseLeave={() => setQuickViewId(null)}
              >
                {/* Product Image Area */}
                <div className="relative aspect-[3/4] bg-[#f7f7f7] overflow-hidden mb-4">
                   {/* Front Image */}
                   <img 
                     src={product.imgFront} 
                     alt={product.name} 
                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0" 
                     loading="lazy" 
                   />
                   {/* Back Image (Revealed on hover) */}
                   <img 
                     src={product.imgBack} 
                     alt={product.name} 
                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100" 
                     loading="lazy" 
                   />

                   {/* Badges */}
                   {product.badge && (
                     <div className="absolute top-3 left-3 bg-white/90 text-gray-900 text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
                       {product.badge}
                     </div>
                   )}

                   {/* Wishlist Button */}
                   <button 
                     onClick={() => toggleWishlist(product.id)}
                     className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                   >
                     <svg className={`w-4 h-4 ${wishlist.includes(product.id) ? 'text-rose-400 fill-current' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                   </button>

                   {/* Quick View Trigger (Desktop) */}
                   <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block z-20">
                     <button 
                       onClick={() => setQuickViewId(quickViewId === product.id ? null : product.id)}
                       className="w-full bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-widest py-3 font-medium hover:bg-gray-900 hover:text-white transition-colors border border-gray-100"
                     >
                       Quick Add
                     </button>
                   </div>
                </div>

                {/* --- Interactive Quick Add Panel (Overlays the info below) --- */}
                {quickViewId === product.id && (
                  <div className="absolute top-full left-0 w-full bg-white p-4 shadow-xl border border-gray-100 z-30 animate-fade-in-up mt-2 hidden md:block before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-white">
                     <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 text-center">Select Size</p>
                     <div className="flex justify-center gap-2 mb-4">
                        {product.sizes.map(size => (
                           <button key={size} className="w-8 h-8 border border-gray-200 text-[11px] font-medium hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                              {size}
                           </button>
                        ))}
                     </div>
                     <button className="w-full bg-gray-900 text-white text-[10px] uppercase tracking-widest py-3 font-medium">Add to Cart</button>
                  </div>
                )}

                {/* Product Info */}
                <div className="text-center mt-2 flex-1 flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    <h3 className="text-[13px] text-gray-800 font-medium mb-1 truncate">{product.name}</h3>
                    <p className="text-[12px] text-gray-500 mb-3">฿{product.price.toLocaleString()}</p>
                  </div>
                  
                  {/* Color Swatches */}
                  <div className="flex justify-center gap-1.5 mt-auto">
                     {product.colors.map((color, idx) => (
                        <div key={idx} className="w-3 h-3 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color }}></div>
                     ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
