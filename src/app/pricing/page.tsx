import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership Options for Families</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full Flexibility: Search Independently or Enjoy Agency-like Personal Services.
            <br />
            <strong>All Services Free for Au Pairs.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Silver Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-gray-100 p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Silver</h2>
              <div className="mt-4">
                <span className="text-5xl font-bold text-green-600">$49</span>
                <span className="text-gray-600 ml-2">AUD</span>
              </div>
              <p className="mt-2 text-gray-600">$49 Per Month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1-Month Premium Membership</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to Chat</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal Support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Search Filters</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/register-family?plan=silver" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-gray-100 p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Gold</h2>
              <div className="mt-4">
                <span className="text-5xl font-bold text-green-600">$69</span>
                <span className="text-gray-600 ml-2">AUD</span>
              </div>
              <p className="mt-2 text-gray-600">$23 Per Month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3-Month Premium Membership</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to Chat</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal Support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Search Filters</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/register-family?plan=gold" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Platinum Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border-2 border-green-500">
            <div className="bg-green-50 p-6 text-center relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                Popular
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Platinum</h2>
              <div className="mt-4">
                <span className="text-5xl font-bold text-green-600">$99</span>
                <span className="text-gray-600 ml-2">AUD</span>
              </div>
              <p className="mt-2 text-gray-600">$16.5 Per Month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>6-Month Premium Membership</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to Chat</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal Support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Search Filters</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/register-family?plan=platinum" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Diamond Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-gray-100 p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Diamond</h2>
              <div className="mt-4">
                <span className="text-5xl font-bold text-green-600">$499</span>
                <span className="text-gray-600 ml-2">AUD</span>
              </div>
              <p className="mt-2 text-gray-600">Full Service</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Platinum benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Candidate recruitment & shortlisting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interview organization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing support & conflict resolution</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Candidate replacement guarantee</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/register-family?plan=diamond" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            All purchases are one-time transactions, there is <strong>no automatic renewal</strong>.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Free for Au Pairs</h3>
            <p className="text-gray-600 mb-6">
              We believe in making cultural exchange accessible to everyone. That's why all our services are completely free for au pairs.
            </p>
            <Link href="/register-au-pair" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Register as an Au Pair
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What's included in each membership?</h3>
              <p className="text-gray-600">
                All memberships include access to our database of verified au pairs, messaging capabilities, personal support, and advanced search filters. The difference is in the duration and level of service provided.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I upgrade my membership later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your membership at any time. The remaining value of your current membership will be applied as a credit toward your new plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for your convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee if you haven't contacted any au pairs. Please contact our support team for more information about our refund policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
