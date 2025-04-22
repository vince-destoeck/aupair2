import Link from 'next/link';

export default function ForAuPairsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Host Family in Australia</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Begin your cultural exchange journey as an au pair with a welcoming Australian family. Gain valuable experience while exploring a new country.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register-au-pair" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-block">
              Register as an Au Pair
            </Link>
            <p className="text-white text-lg font-semibold mt-2">All our services are free for Au Pairs!</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Register and showcase your skills, experience, and preferences to potential host families.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Families</h3>
              <p className="text-gray-600">Search for host families that match your preferences and location interests.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Interview</h3>
              <p className="text-gray-600">Message and interview with potential host families through our platform.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prepare for Your Journey</h3>
              <p className="text-gray-600">Sign a contract, arrange your visa, and plan your travel to Australia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Being an Au Pair</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                Experience Australian culture firsthand by living with a local family, participating in their daily life, and celebrating traditions together.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Language Skills</h3>
              <p className="text-gray-600">
                Improve your English through daily conversations with your host family and the local community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6l3 3m0 0l3-3m-3 3V2m0 16l3 3m-3-3l-3 3m3-3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel Opportunities</h3>
              <p className="text-gray-600">
                Explore Australia's beautiful landscapes, cities, and attractions during your free time and holidays.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Connections</h3>
              <p className="text-gray-600">
                Build lifelong relationships with your host family and make friends with other au pairs and locals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accommodation & Meals</h3>
              <p className="text-gray-600">
                Enjoy free room and board with your host family, making your stay in Australia more affordable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Develop valuable skills in childcare, communication, problem-solving, and adaptability that enhance your resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visa Information</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Working Holiday Visa Requirements</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Age Requirement</h4>
                  <p className="text-gray-600">You must be between 18 and 35 years old (inclusive) at the time of application.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Eligible Countries</h4>
                  <p className="text-gray-600">You must hold a passport from an eligible country that participates in the Working Holiday Program (subclass 417 or 462).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Health Requirements</h4>
                  <p className="text-gray-600">You must meet health requirements and may need to undergo a medical examination.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Character Requirements</h4>
                  <p className="text-gray-600">You must provide a police clearance certificate from your home country.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Financial Requirements</h4>
                  <p className="text-gray-600">You must have sufficient funds to support yourself during your stay (typically AUD $5,000).</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              The Working Holiday visa (subclass 417 or 462) allows you to stay in Australia for up to 12 months and work with each employer for up to 6 months. This makes it ideal for au pair placements.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                Our platform will help guide you through the visa application process, but the final application must be submitted through the Australian Department of Home Affairs website.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/visa-information" className="text-green-700 font-semibold hover:text-green-800 inline-flex items-center">
                Detailed Visa Information
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Au Pairs Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophie</h4>
                  <p className="text-sm text-gray-600">From France</p>
                </div>
              </div>
              <p className="text-gray-700">"Being an au pair in Australia has been the adventure of a lifetime! I've improved my English, made amazing friends, and fallen in love with the Australian way of life. My host family has become my second family."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Lukas</h4>
                  <p className="text-sm text-gray-600">From Germany</p>
                </div>
              </div>
              <p className="text-gray-700">"This platform made finding a host family so easy. The matching process helped me connect with a family that shares my interests and values. I've been able to explore Australia on weekends and holidays while gaining valuable childcare experience."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Maria</h4>
                  <p className="text-sm text-gray-600">From Spain</p>
                </div>
              </div>
              <p className="text-gray-700">"I was nervous about moving to a new country, but the support I received through this platform made everything easier. From visa guidance to connecting with my host family, the process was smooth. Now I'm having the time of my life in beautiful Australia!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do I need childcare experience to be an au pair?</h3>
              <p className="text-gray-600">
                While previous childcare experience is highly valued, it's not always mandatory. However, having some experience with children (babysitting, tutoring, coaching, etc.) will make your profile more attractive to host families.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How many hours will I work as an au pair?</h3>
              <p className="text-gray-600">
                Typically, au pairs work 25-35 hours per week, depending on the agreement with your host family. This usually includes evenings and occasional weekends, with at least 1.5 days off per week.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How much pocket money will I receive?</h3>
              <p className="text-gray-600">
                Au pairs in Australia typically receive between $200-350 AUD per week, depending on hours worked and experience level. This is in addition to free accommodation and meals with your host family.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I study while being an au pair?</h3>
              <p className="text-gray-600">
                Yes, many au pairs take language or other courses during their free time. This should be discussed with your host family to ensure it doesn't conflict with your childcare responsibilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What if things don't work out with my host family?</h3>
              <p className="text-gray-600">
                If issues arise, we encourage open communication first. If problems can't be resolved, our support team can help mediate or assist you in finding a new host family if necessary.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/for-au-pairs/faq" className="text-green-700 font-semibold hover:text-green-800 inline-flex items-center">
              View all FAQs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Australian Adventure Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of au pairs who have experienced the cultural exchange of a lifetime in Australia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register-au-pair" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-block">
              Register as an Au Pair
            </Link>
            <p className="text-white text-lg font-semibold mt-2">It's completely free!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
