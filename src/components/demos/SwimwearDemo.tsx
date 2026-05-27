"use client";

import { useState } from "react";

// Mock Product Data with Unsplash Images
const products = [
  { id: 1, name: "Ocean Breeze Bikini Set", category: "Two-Piece", price: 1490, img: "https://loremflickr.com/400/600/bikini,swimwear?lock=11", color: "blue", new: true },
  { id: 2, name: "Sunset Glow One-Piece", category: "One-Piece", price: 1890, img: "https://loremflickr.com/400/600/swimsuit,model?lock=22", color: "orange", new: false },
  { id: 3, name: "Tropical Leaf Swimsuit", category: "One-Piece", price: 1690, img: "https://loremflickr.com/400/600/beach,swimwear?lock=33", color: "emerald", new: true },
  { id: 4, name: "Coral Reef High-Waist", category: "Two-Piece", price: 1590, img: "https://loremflickr.com/400/600/bikini,model?lock=44", color: "rose", new: false },
  { id: 5, name: "Midnight Black Monokini", category: "Monokini", price: 2190, img: "https://loremflickr.com/400/600/swimwear,fashion?lock=55", color: "black", new: false },
  { id: 6, name: "White Sand Cover-up", category: "Beachwear", price: 1290, img: "https://loremflickr.com/400/600/beachwear,resort?lock=66", color: "white", new: false },
];

export default function SwimwearDemo() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const cartCount = cart.reduce((count, item) => count + item.qty, 0);

  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-amber-100 bg-white font-sans flex flex-col min-h-[850px] animate-fade-in-up">
      
      {/* Top Banner */}
      <div className="bg-amber-600 text-white text-[10px] sm:text-xs font-bold text-center py-2 tracking-widest uppercase">
        🔥 SUMMER SALE: Free Shipping on orders over 3,000 THB 🔥
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="flex gap-6 hidden md:flex">
          <span className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-1 cursor-pointer">Shop</span>
          <span className="text-sm font-medium text-slate-500 hover:text-slate-800 cursor-pointer">Collections</span>
          <span className="text-sm font-medium text-slate-500 hover:text-slate-800 cursor-pointer">About</span>
        </div>
        
        <div className="text-2xl font-extrabold tracking-tighter text-slate-900 mx-auto md:mx-0">
          AQUA<span className="text-amber-500 font-light">MARE</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-slate-900 hidden sm:block">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="text-slate-600 hover:text-slate-900 hidden sm:block">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </button>
          <button onClick={() => setCartOpen(true)} className="relative text-slate-600 hover:text-slate-900 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
        {/* Placeholder for Beach Video/Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-200">
           {/* Abstract Sun/Wave shapes */}
           <div className="absolute top-10 right-20 w-48 h-48 bg-amber-300 rounded-full blur-2xl opacity-60 mix-blend-multiply"></div>
           <div className="absolute bottom-0 left-0 w-full h-40 bg-white/20 backdrop-blur-3xl rounded-t-[100px] border-t border-white/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Summer Collection 2026</p>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">Embrace the <br/><span className="italic text-cyan-700">Sun & Sea</span></h1>
          <button className="px-8 py-3 bg-slate-900 text-white text-sm font-bold tracking-wider hover:bg-slate-800 transition-colors rounded-none">
            SHOP THE COLLECTION
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#fcfcfc] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-serif text-slate-900">New Arrivals</h2>
              <p className="text-slate-500 mt-2 text-sm">Discover our latest swimwear designed for confidence and comfort.</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
               {["All", "Two-Piece", "One-Piece", "Beachwear"].map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                {/* Product Image */}
                <div className={`aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden relative mb-4 flex items-center justify-center transition-transform duration-500 group-hover:shadow-lg`}>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                   
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                   {/* Badges */}
                   {product.new && (
                     <div className="absolute top-3 left-3 bg-white text-slate-900 text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm shadow-sm">NEW</div>
                   )}

                   {/* Hover Action */}
                   <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <button 
                       onClick={() => addToCart(product)}
                       className="w-full bg-white/90 backdrop-blur text-slate-900 font-bold text-xs py-3 hover:bg-slate-900 hover:text-white transition-colors flex justify-center items-center gap-2"
                     >
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                       ADD TO BAG
                     </button>
                   </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 cursor-pointer hover:text-amber-600 transition-colors">{product.name}</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">{product.category}</p>
                  <p className="text-sm font-medium text-slate-800">฿{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- NEW SECTION: Features / Benefits --- */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Premium Fabric", desc: "Italian recycled nylon that feels like second skin.", icon: "🌊" },
            { title: "UV Protection", desc: "UPF 50+ protection built into every thread.", icon: "☀️" },
            { title: "Eco-Friendly", desc: "Sustainable production processes.", icon: "♻️" },
            { title: "Perfect Fit", desc: "Designed to flatter every body type.", icon: "✨" }
          ].map((feat, i) => (
            <div key={i} className="p-6">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-xs text-slate-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW SECTION: Instagram Feed --- */}
      <div className="py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-slate-900 mb-2">#AquaMareGirls</h2>
          <p className="text-slate-500 text-sm">Follow us on Instagram for daily inspiration @aquamare.swim</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square relative overflow-hidden group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://loremflickr.com/400/400/bikini,beach?lock=${i+100}`} alt={`IG feed ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-extrabold tracking-tighter text-white mb-6">
              AQUA<span className="text-amber-500 font-light">MARE</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">Sustainable, stylish, and comfortable swimwear for every body. Embrace the sun and sea with confidence.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">FB</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">IG</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">PIN</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">All Swimwear</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">One-Pieces</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Bikinis</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Beachwear</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to receive 10% off your first order.</p>
            <div className="flex border-b border-slate-600 pb-2">
              <input type="email" placeholder="Your email address" className="bg-transparent border-none outline-none w-full text-sm text-white placeholder-slate-500" />
              <button className="text-xs font-bold text-white uppercase tracking-wider hover:text-amber-500 transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 AQUAMARE. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* --- Slide-out Cart (Interactive Feature) --- */}
      {/* Overlay */}
      {cartOpen && (
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity" 
          onClick={() => setCartOpen(false)}
        ></div>
      )}
      
      {/* Cart Panel */}
      <div className={`absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Cart Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-slate-900">Your Bag ({cartCount})</h2>
          <button onClick={() => setCartOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
              <svg className="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p>Your bag is currently empty.</p>
              <button onClick={() => setCartOpen(false)} className="text-amber-600 font-bold text-sm hover:underline mt-2">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className={`w-20 h-24 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-sm`}>
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase">{item.category}</p>
                    <div className="flex justify-between items-end mt-auto pt-4">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button className="px-2 py-1 text-slate-500 hover:text-slate-900">-</button>
                        <span className="text-xs font-medium w-6 text-center">{item.qty}</span>
                        <button className="px-2 py-1 text-slate-500 hover:text-slate-900">+</button>
                      </div>
                      <p className="text-sm font-bold text-slate-900">฿{(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-slate-50">
             <div className="flex justify-between mb-2 text-sm text-slate-600">
               <span>Subtotal</span>
               <span>฿{cartTotal.toLocaleString()}</span>
             </div>
             <div className="flex justify-between mb-4 text-sm text-slate-600">
               <span>Shipping</span>
               <span>{cartTotal > 3000 ? <span className="text-green-600 font-bold">Free</span> : 'Calculated at checkout'}</span>
             </div>
             <div className="flex justify-between mb-6 text-base font-bold text-slate-900 border-t border-slate-200 pt-4">
               <span>Total</span>
               <span>฿{cartTotal.toLocaleString()}</span>
             </div>
             <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 text-sm tracking-widest uppercase transition-colors shadow-lg">
               Checkout
             </button>
          </div>
        )}
      </div>

    </div>
  );
}
