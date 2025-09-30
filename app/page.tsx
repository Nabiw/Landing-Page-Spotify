        "use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-20 bg-[#121212] flex items-center justify-between px-6 py-3 border-b border-gray-700 w-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-6">
            <div className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 168 168"
                fill="none"
              >
                <circle cx="84" cy="84" r="84" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M120.5 120.5c-2.4 3.2-6.4 4.8-10.4 3.2-28-16.8-63.2-20.8-104-12-4 0-7.2-3.2-7.2-7.2 0-4 3.2-7.2 7.2-7.2 36-7.2 67.2-4 92 10.4 3.2 1.6 4.8 6.4 3.2 10.4z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M134.9 96.5c-3.2 4-8 5.6-12.8 3.2-32-19.2-81.6-24-119.2-14.4-4 0-7.2-3.2-7.2-7.2 0-4 3.2-7.2 7.2-7.2 40-8 92 0 126.4 16 4 1.6 5.6 6.4 3.2 9.6z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M134.9 72.5c-36-22.4-95.2-24-131.2-14.4-4 0-7.2-3.2-7.2-7.2 0-4 3.2-7.2 7.2-7.2 40-8 104 0 142.4 19.2 4 1.6 5.6 6.4 3.2 9.6z"
                  fill="black"
                />
              </svg>
            </div>
            <button className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 10h1v8a1 1 0 001 1h5v-6h2v6h5a1 1 0 001-1v-8h1a1 1 0 00.707-1.707l-7-7z" />
              </svg>
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-[#121212] rounded-full pl-10 pr-10 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 h-6 border-l border-gray-600"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none" aria-label="Printer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6h12V9M6 9V7a2 2 0 012-2h8a2 2 0 012 2v2M6 15v2a2 2 0 002 2h8a2 2 0 002-2v-2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 22h6" />
              </svg>
            </button>
          </div>
        </div>
        {/* Right side links */}
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-300">
          <a href="#" className="hover:text-white">Premium</a>
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Download</a>
          <div className="border-l border-gray-600 h-6 mx-3"></div>
          <a href="#" className="hover:text-white inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v8m0 0l-3-3m3 3l3-3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v8" />
            </svg>
            Install App
          </a>
          <a href="#" className="hover:text-white">Sign up</a>
          <button className="bg-white text-black rounded-full px-4 py-1 font-semibold hover:bg-gray-200 transition">
            Log in
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#121212] p-6 flex flex-col gap-4 overflow-y-auto sticky top-0 text-white scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
          <div className="font-bold text-lg flex justify-between items-center mb-4">
          <span>Your Library</span>
          <button className="text-2xl font-bold leading-none">+</button>
        </div>
        <div className="bg-[#181818] p-4 rounded-md mb-4">
          <p className="font-semibold mb-1">Create your first playlist</p>
          <p className="text-xs text-gray-400 mb-2">It's easy, we'll help you</p>
          <button className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold hover:bg-gray-200 transition">
            Create playlist
          </button>
        </div>
        <div className="bg-[#181818] p-4 rounded-md mb-4">
          <p className="font-semibold mb-1">Let's find some podcasts to follow</p>
          <p className="text-xs text-gray-400 mb-2">We'll keep you updated on new episodes</p>
          <button className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold hover:bg-gray-200 transition">
            Browse podcasts
          </button>
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Safety & Privacy Center</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">About Ads</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
          <a href="#" className="inline-flex items-center gap-1 border border-gray-500 rounded-full px-3 py-1 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4 0-7 2-7 6v2h14v-2c0-4-3-6-7-6z" />
            </svg>
            English
          </a>
        </div>
        </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Trending Songs */}
        <section className="mb-12 mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Trending songs</h2>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Show all
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:bg-[#282828]">
              <div className="aspect-square w-full relative">
                <Image
                  src="/ngapain repot.jpg"
                  alt="Ngapain Repot"
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-white mb-1">Ngapain Repot</p>
                <p className="text-sm text-gray-400">
                  Toton Caribo, Wizz Baker, Fresly Nikijuluw
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:bg-[#282828]">
              <div className="aspect-square w-full relative">
                <Image
                  src="/blue.jpg"
                  alt="blue"
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-white mb-1">blue</p>
                <p className="text-sm text-gray-400">yung kai</p>
              </div>
            </div>
            <div className="flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:bg-[#282828]">
              <div className="aspect-square w-full relative">
                <Image
                  src="/hoRRReg.jpg"
                  alt="hoRRReg"
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-white mb-1">hoRRReg</p>
                <p className="text-sm text-gray-400">
                  Tenxi, Naufal Syachreza, Jemsii
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:bg-[#282828]">
              <div className="aspect-square w-full relative">
                <Image
                  src="/lihat kebunku.jpeg"
                  alt="Lihat Kebunku (Taman Bunga)"
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-white mb-1">Lihat Kebunku (Taman Bunga)</p>
                <p className="text-sm text-gray-400">Aku Jeje</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Artists */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Popular artists</h2>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Show all
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <div className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-green-500 transition-colors rounded-full p-1">
              <Image
                src="/fourtwnty.jpg"
                alt="Fourtwnty"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 font-semibold">Fourtwnty</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
            <div className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-green-500 transition-colors rounded-full p-1">
              <Image
                src="/raim laode.jpg"
                alt="Raim Laode"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 font-semibold">Raim Laode</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
            <div className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-green-500 transition-colors rounded-full p-1">
              <Image
                src="/hindia.jpg"
                alt="Hindia"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 font-semibold">Hindia</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
            <div className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-green-500 transition-colors rounded-full p-1">
              <Image
                src="/for revenge.jpg"
                alt="For Revenge"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 font-semibold">For Revenge</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
            <div className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-green-500 transition-colors rounded-full p-1 relative">
              <Image
                src="/niki.jpg"
                alt="NIKI"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="absolute bottom-10 right-4 bg-green-500 rounded-full p-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-2 font-semibold">NIKI</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
          </div>
        </section>

        {/* Popular Albums and Singles */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Popular albums and singles</h2>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Show all
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <div className="relative flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/hindia.jpg"
                alt="Menari Dengan Bayangan"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Menari Dengan Bayangan</p>
              <p className="text-sm text-gray-400">Hindia</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/for revenge.jpg"
                alt="Membangun & Menghancurkan"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Membangun & Menghancurkan</p>
              <p className="text-sm text-gray-400">.Feast</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/niki.jpg"
                alt="You'll Be In My Heart"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">You'll Be In My Heart</p>
              <p className="text-sm text-gray-400">NIKI</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/fourtwnty.jpg"
                alt="Nalar"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Nalar</p>
              <p className="text-sm text-gray-400">Fourtwnty</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/raim laode.jpg"
                alt="Kisah Klasik Untuk Masa Depan"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Kisah Klasik Untuk Masa Depan</p>
              <p className="text-sm text-gray-400">Sheila On 7</p>
            </div>
          </div>
        </section>

        {/* Popular Radio */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Popular radio</h2>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Show all
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <div className="relative flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/sheila on 7 radio.jpg"
                alt="Sheila On 7"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Sheila On 7</p>
              <p className="text-sm text-gray-400">With Yovie & Nuno, Hivi!, Vierra and more</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/fourtwnty radio.jpg"
                alt="Fourtwnty"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Fourtwnty</p>
              <p className="text-sm text-gray-400">With Pamungkas, Bernadya, Nadin...</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/bruno mars radio.jpg"
                alt="Bruno Mars"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Bruno Mars</p>
              <p className="text-sm text-gray-400">With Maroon 5, Ed Sheeran, Katy Perry...</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/bernadya radio.jpg"
                alt="Bernadya"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Bernadya</p>
              <p className="text-sm text-gray-400">With Juicy Luicy, Nadin Amizah, Sal...</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/niki radio.jpg"
                alt="NIKI"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">NIKI</p>
              <p className="text-sm text-gray-400">With LANY, 88rising, wave to earth and...</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:bg-[#282828] rounded-md p-2">
              <Image
                src="/hindia radio.jpg"
                alt="Hindia"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="mt-2 font-semibold text-white">Hindia</p>
              <p className="text-sm text-gray-400">With Juicy Luicy, Nadin Amizah, Sal...</p>
            </div>
          </div>
        </section>

        {/* Featured Charts */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Featured Charts</h2>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Show all
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:text-green-500 transition-colors bg-purple-700 rounded-md p-4">
              <p className="text-white font-bold text-lg">Top Songs Global</p>
              <p className="text-white text-xs mt-2">Weekly Music Charts</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:text-green-500 transition-colors bg-pink-500 rounded-md p-4">
              <p className="text-white font-bold text-lg">Top Songs Indonesia</p>
              <p className="text-white text-xs mt-2">Weekly Music Charts</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:text-green-500 transition-colors bg-teal-700 rounded-md p-4">
              <p className="text-white font-bold text-lg">Top 50 Global</p>
              <p className="text-white text-xs mt-2">Your daily update of the most played tracks right now</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:text-green-500 transition-colors bg-red-500 rounded-md p-4">
              <p className="text-white font-bold text-lg">Top 50 Indonesia</p>
              <p className="text-white text-xs mt-2">Your daily update of the most played tracks right now</p>
            </div>
            <div className="flex flex-col min-w-[150px] cursor-pointer hover:text-green-500 transition-colors bg-purple-900 rounded-md p-4">
              <p className="text-white font-bold text-lg">Viral 50 Global</p>
              <p className="text-white text-xs mt-2">Your daily update of the most viral tracks right now</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-700 pt-8 text-gray-400 text-sm">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Communities</h3>
              <ul>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Useful links</h3>
              <ul>
                <li>Support</li>
                <li>Free Mobile App</li>
                <li>Popular by Country</li>
                <li>Import your music</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Spotify Plans</h3>
              <ul>
                <li>Premium Individual</li>
                <li>Premium Duo</li>
                <li>Premium Family</li>
                <li>Premium Student</li>
                <li>Spotify Free</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <p>© 2025 Spotify AB</p>
          </div>
        </footer>
        </div>
      </main>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-700 to-blue-500 text-white p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">Preview of Spotify</p>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className="bg-white text-black rounded-full px-4 py-2 font-semibold hover:bg-gray-200 transition">
          Sign up free
        </button>
      </div>
    </div>
  );
}
