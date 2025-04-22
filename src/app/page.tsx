import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Au Pair Match</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">
            Connect with qualified au pairs and loving host families for a cultural exchange experience that changes lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register-family" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Register as a Family
            </Link>
            <Link href="/register-au-pair" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Register as an Au Pair
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Au Pair Agency</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">All our profiles are thoroughly verified to ensure safety and authenticity.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">Our advanced algorithm helps you find the perfect match based on your preferences.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Our team provides personalized support throughout your entire journey.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legal Guidance</h3>
              <p className="text-gray-600">We provide comprehensive guidance on visas, contracts, and legal requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Families */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">For Families</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium">Create your profile</p>
                    <p className="text-gray-600 text-sm">Register and share details about your family and needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium">Browse au pairs</p>
                    <p className="text-gray-600 text-sm">Search our database of qualified au pairs.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium">Connect and interview</p>
                    <p className="text-gray-600 text-sm">Message and interview your favorite candidates.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium">Finalize arrangements</p>
                    <p className="text-gray-600 text-sm">Sign a contract and prepare for your au pair's arrival.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-6">
                <Link href="/for-families" className="text-green-700 font-semibold hover:text-green-800 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* For Au Pairs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">For Au Pairs</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium">Create your profile</p>
                    <p className="text-gray-600 text-sm">Register and showcase your skills and experience.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium">Browse families</p>
                    <p className="text-gray-600 text-sm">Search for host families that match your preferences.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium">Connect and interview</p>
                    <p className="text-gray-600 text-sm">Message and interview with potential host families.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium">Prepare for your journey</p>
                    <p className="text-gray-600 text-sm">Sign a contract and arrange your travel plans.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-6">
                <Link href="/for-au-pairs" className="text-green-700 font-semibold hover:text-green-800 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Membership */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Membership Plans</h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-semibold">Silver</h4>
                  <p className="text-gray-600 text-sm">1-month access with basic features</p>
                  <p className="text-lg font-bold mt-1">$49</p>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-semibold">Gold</h4>
                  <p className="text-gray-600 text-sm">3-month access with all features</p>
                  <p className="text-lg font-bold mt-1">$69</p>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-semibold">Platinum</h4>
                  <p className="text-gray-600 text-sm">6-month access with premium support</p>
                  <p className="text-lg font-bold mt-1">$99</p>
                </div>
                <div>
                  <h4 className="font-semibold">Diamond</h4>
                  <p className="text-gray-600 text-sm">Full-service placement and support</p>
                  <p className="text-lg font-bold mt-1">$499</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/pricing" className="text-green-700 font-semibold hover:text-green-800 flex items-center">
                  View pricing details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Host Family</p>
                </div>
              </div>
              <p className="text-gray-700">"Finding our au pair through this platform was incredibly easy. The matching system helped us connect with someone who fits perfectly with our family dynamic. Our children adore her!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emma Garcia</h4>
                  <p className="text-sm text-gray-600">Au Pair from Spain</p>
                </div>
              </div>
              <p className="text-gray-700">"This platform made it so simple to find a wonderful host family. The support team helped me with visa questions and made sure I was prepared for my journey. I'm having an amazing cultural exchange experience!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">David & Lisa Thompson</h4>
                  <p className="text-sm text-gray-600">Host Family</p>
                </div>
              </div>
              <p className="text-gray-700">"We've used other au pair services before, but this one stands out for its attention to detail and quality of candidates. The verification process gave us peace of mind, and we found our perfect match quickly."</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/testimonials" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Au Pair Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of families and au pairs who have found their perfect match on our platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register-family" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Register as a Family
            </Link>
            <Link href="/register-au-pair" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Register as an Au Pair
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
