import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-700">AuPair Connect</span>
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-700 font-medium">
                For Families
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/for-families" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How It Works</Link>
                <Link href="/for-families/benefits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Benefits</Link>
                <Link href="/for-families/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                <Link href="/register-family" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-700 font-medium">
                For Au Pairs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/for-au-pairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How It Works</Link>
                <Link href="/for-au-pairs/benefits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Benefits</Link>
                <Link href="/for-au-pairs/visa-info" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visa Information</Link>
                <Link href="/for-au-pairs/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                <Link href="/register-au-pair" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register</Link>
              </div>
            </div>
            
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium">About Us</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-700 font-medium">Pricing</Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium">Blog</Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-green-700 font-medium hidden md:block">
              Login
            </Link>
            <Link href="/register" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Register
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div>
            <button className="w-full text-left px-3 py-2 text-gray-700 font-medium">
              For Families
            </button>
            <div className="pl-4 space-y-1 hidden">
              <Link href="/for-families" className="block px-3 py-2 text-gray-600">How It Works</Link>
              <Link href="/for-families/benefits" className="block px-3 py-2 text-gray-600">Benefits</Link>
              <Link href="/for-families/faq" className="block px-3 py-2 text-gray-600">FAQ</Link>
              <Link href="/register-family" className="block px-3 py-2 text-gray-600">Register</Link>
            </div>
          </div>
          
          <div>
            <button className="w-full text-left px-3 py-2 text-gray-700 font-medium">
              For Au Pairs
            </button>
            <div className="pl-4 space-y-1 hidden">
              <Link href="/for-au-pairs" className="block px-3 py-2 text-gray-600">How It Works</Link>
              <Link href="/for-au-pairs/benefits" className="block px-3 py-2 text-gray-600">Benefits</Link>
              <Link href="/for-au-pairs/visa-info" className="block px-3 py-2 text-gray-600">Visa Information</Link>
              <Link href="/for-au-pairs/faq" className="block px-3 py-2 text-gray-600">FAQ</Link>
              <Link href="/register-au-pair" className="block px-3 py-2 text-gray-600">Register</Link>
            </div>
          </div>
          
          <Link href="/about" className="block px-3 py-2 text-gray-700 font-medium">About Us</Link>
          <Link href="/pricing" className="block px-3 py-2 text-gray-700 font-medium">Pricing</Link>
          <Link href="/blog" className="block px-3 py-2 text-gray-700 font-medium">Blog</Link>
          <Link href="/login" className="block px-3 py-2 text-gray-700 font-medium">Login</Link>
        </div>
      </div>
    </header>
  );
}
