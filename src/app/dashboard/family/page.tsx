"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FamilyDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-700 font-bold text-xl">TF</span>
              </div>
              <div>
                <h2 className="font-semibold">The Thompson Family</h2>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'dashboard' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </button>
              
              <button 
                onClick={() => setActiveTab('search')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'search' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Au Pairs
              </button>
              
              <button 
                onClick={() => setActiveTab('favorites')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'favorites' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Saved Au Pairs
              </button>
              
              <button 
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'messages' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Messages
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">3</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'profile' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </button>
              
              <button 
                onClick={() => setActiveTab('membership')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'membership' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Membership
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                  activeTab === 'settings' 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
              
              <hr className="my-4 border-gray-200" />
              
              <button 
                className="w-full flex items-center px-4 py-2 rounded-md text-left text-gray-700 hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">Welcome back, Thompson Family!</h2>
                  <p className="text-gray-600 mb-4">
                    Your premium membership is active until <span className="font-medium">October 15, 2025</span>.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Platinum Plan</span>
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span>3 New Messages</span>
                    </div>
                    <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-md flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>12 Profile Views</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Sophie Martin</h3>
                            <span className="ml-2 text-xs text-gray-500">2 hours ago</span>
                          </div>
                          <p className="text-gray-600 text-sm">Hello! I'm very interested in your family profile and would love to discuss the opportunity further...</p>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">Read more</button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Emma Garcia</h3>
                            <span className="ml-2 text-xs text-gray-500">Yesterday</span>
                          </div>
                          <p className="text-gray-600 text-sm">Thank you for your message. I have experience with children of similar ages and would be happy to...</p>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">Read more</button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Lukas Weber</h3>
                            <span className="ml-2 text-xs text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-gray-600 text-sm">I'm available for a video call this weekend if you'd like to chat more about the position...</p>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">Read more</button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="text-green-600 font-medium hover:underline text-sm">View all messages</button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Recommended Au Pairs</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">Maria Santos</h3>
                              <p className="text-sm text-gray-500">26 • Brazil • 3 years experience</p>
                            </div>
                            <button className="text-gray-400 hover:text-green-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Portuguese</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Cooking</span>
                          </div>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">View profile</button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">Anna Müller</h3>
                              <p className="text-sm text-gray-500">24 • Germany • 2 years experience</p>
                            </div>
                            <button className="text-gray-400 hover:text-green-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">German</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">First Aid</span>
                          </div>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">View profile</button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">Camille Dubois</h3>
                              <p className="text-sm text-gray-500">23 • France • 1 year experience</p>
                            </div>
                            <button className="text-gray-400 hover:text-green-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">French</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Music</span>
                          </div>
                          <button className="text-green-600 text-sm font-medium hover:underline mt-1">View profile</button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="text-green-600 font-medium hover:underline text-sm">View all recommendations</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Your Application Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Profile Created</h3>
                          <span className="text-xs text-gray-500">April 15, 2025</span>
                        </div>
                        <p className="text-sm text-gray-600">Your family profile has been created and is visible to au pairs.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Membership Activated</h3>
                          <span className="text-xs text-gray-500">April 15, 2025</span>
                        </div>
                        <p className="text-sm text-gray-600">Your Platinum membership has been activated.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium text-sm">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Ongoing Conversations</h3>
                        <p className="text-sm text-gray-600">You're currently chatting with 3 potential au pairs.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-medium text-sm">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Next Step: Schedule Interviews</h3>
                        <p className="text-sm text-gray-600">Start scheduling video interviews with your favorite candidates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Search Tab */}
            {activeTab === 'search' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Search Au Pairs</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="nationality" className="block text-gray-700 text-sm font-medium mb-1">Nationality</label>
                      <select 
                        id="nationality" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Nationality</option>
                        <option value="european">European</option>
                        <option value="north_american">North American</option>
                        <option value="south_american">South American</option>
                        <option value="asian">Asian</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="language" className="block text-gray-700 text-sm font-medium mb-1">Language</label>
                      <select 
                        id="language" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="german">German</option>
                        <option value="italian">Italian</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-gray-700 text-sm font-medium mb-1">Experience</label>
                      <select 
                        id="experience" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-3">2-3 years</option>
                        <option value="3+">3+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block text-gray-700 text-sm font-medium mb-1">Age Range</label>
                      <select 
                        id="age" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Age</option>
                        <option value="18-21">18-21</option>
                        <option value="22-25">22-25</option>
                        <option value="26-30">26-30</option>
                        <option value="31+">31+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="availability" className="block text-gray-700 text-sm font-medium mb-1">Availability</label>
                      <select 
                        id="availability" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="skills" className="block text-gray-700 text-sm font-medium mb-1">Special Skills</label>
                      <select 
                        id="skills" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Any Skills</option>
                        <option value="cooking">Cooking</option>
                        <option value="driving">Driving</option>
                        <option value="first-aid">First Aid</option>
                        <option value="swimming">Swimming</option>
                        <option value="music">Music</option>
                        <option value="arts">Arts & Crafts</option>
                        <option value="sports">Sports</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md font-medium mr-3">
                      Reset Filters
                    </button>
                    <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-medium">
                      Search
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Search Results</h2>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                      <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                        <option value="relevance">Relevance</option>
                        <option value="recent">Most Recent</option>
                        <option value="experience">Experience</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Au Pair Card */}
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg mb-4 md:mb-0 md:mr-4 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="text-xl font-semibold">Maria Santos</h3>
                              <p className="text-gray-600">26 • Brazil • 3 years experience</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Portuguese</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Cooking</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">First Aid</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Driving</span>
                              </div>
                            </div>
                            <div className="flex mt-3 md:mt-0">
                              <button className="text-gray-400 hover:text-green-600 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                              <button className="text-gray-400 hover:text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-3">
                            I'm a passionate and experienced au pair who loves working with children of all ages. I'm fluent in English and Portuguese, and I enjoy cooking, outdoor activities, and arts & crafts...
                          </p>
                          <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <p className="text-sm text-gray-500">Available from: <span className="font-medium">June 1, 2025</span></p>
                              <p className="text-sm text-gray-500">Preferred stay: <span className="font-medium">6-12 months</span></p>
                            </div>
                            <button className="mt-3 md:mt-0 bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Au Pair Card */}
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg mb-4 md:mb-0 md:mr-4 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="text-xl font-semibold">Anna Müller</h3>
                              <p className="text-gray-600">24 • Germany • 2 years experience</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">German</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">First Aid</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Swimming</span>
                              </div>
                            </div>
                            <div className="flex mt-3 md:mt-0">
                              <button className="text-gray-400 hover:text-green-600 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                              <button className="text-gray-400 hover:text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-3">
                            I'm a friendly and reliable au pair from Germany with a background in early childhood education. I have experience working with children from 6 months to 10 years old and I'm certified in first aid...
                          </p>
                          <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <p className="text-sm text-gray-500">Available from: <span className="font-medium">May 15, 2025</span></p>
                              <p className="text-sm text-gray-500">Preferred stay: <span className="font-medium">12+ months</span></p>
                            </div>
                            <button className="mt-3 md:mt-0 bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Au Pair Card */}
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg mb-4 md:mb-0 md:mr-4 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="text-xl font-semibold">Camille Dubois</h3>
                              <p className="text-gray-600">23 • France • 1 year experience</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">English</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">French</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Music</span>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">Arts & Crafts</span>
                              </div>
                            </div>
                            <div className="flex mt-3 md:mt-0">
                              <button className="text-gray-400 hover:text-green-600 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                              <button className="text-gray-400 hover:text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-3">
                            I'm a creative and energetic au pair from France with a passion for music and arts. I play piano and guitar, and love to engage children in creative activities. I have experience with toddlers and school-aged children...
                          </p>
                          <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <p className="text-sm text-gray-500">Available from: <span className="font-medium">July 1, 2025</span></p>
                              <p className="text-sm text-gray-500">Preferred stay: <span className="font-medium">6-9 months</span></p>
                            </div>
                            <button className="mt-3 md:mt-0 bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <nav className="flex items-center">
                      <button className="px-3 py-1 rounded-md mr-1 text-gray-500 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="px-3 py-1 rounded-md mx-1 bg-green-600 text-white">1</button>
                      <button className="px-3 py-1 rounded-md mx-1 text-gray-700 hover:bg-gray-100">2</button>
                      <button className="px-3 py-1 rounded-md mx-1 text-gray-700 hover:bg-gray-100">3</button>
                      <button className="px-3 py-1 rounded-md mx-1 text-gray-500">...</button>
                      <button className="px-3 py-1 rounded-md mx-1 text-gray-700 hover:bg-gray-100">8</button>
                      <button className="px-3 py-1 rounded-md ml-1 text-gray-500 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other tabs would be implemented similarly */}
            {activeTab !== 'dashboard' && activeTab !== 'search' && (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tab</h2>
                <p className="text-gray-600">This tab is under development.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
