"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterFamilyPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Register as a Host Family</h1>
          <p className="text-gray-600 text-center mb-12">
            Create your family profile and start connecting with qualified au pairs from around the world.
          </p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > index + 1 
                        ? 'bg-green-600 text-white' 
                        : step === index + 1 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > index + 1 ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-sm mt-1 text-gray-600">
                    {index === 0 ? 'Account' : index === 1 ? 'Family Details' : 'Preferences'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${(step / totalSteps) * 100}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>

          {/* Step 1: Account Information */}
          {step === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Create a secure password"
                  />
                  <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters with a mix of letters, numbers, and symbols</p>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the <Link href="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>
                  </label>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Family Details */}
          {step === 2 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Family Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="familyName" className="block text-gray-700 font-medium mb-2">Family Name</label>
                  <input 
                    type="text" 
                    id="familyName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your family name"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Family Members</label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="adults" className="block text-gray-700 text-sm mb-1">Number of Adults</label>
                        <select 
                          id="adults" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4+">4+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="children" className="block text-gray-700 text-sm mb-1">Number of Children</label>
                        <select 
                          id="children" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4+">4+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="pets" className="block text-gray-700 text-sm mb-1">Pets</label>
                        <select 
                          id="pets" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="none">None</option>
                          <option value="dog">Dog(s)</option>
                          <option value="cat">Cat(s)</option>
                          <option value="other">Other</option>
                          <option value="multiple">Multiple types</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="childrenAges" className="block text-gray-700 text-sm mb-1">Children's Ages</label>
                      <input 
                        type="text" 
                        id="childrenAges" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., 3, 5, 7"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="accommodation" className="block text-gray-700 font-medium mb-2">Accommodation Details</label>
                  <textarea 
                    id="accommodation" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe the accommodation you'll provide for the au pair"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="childcareNeeds" className="block text-gray-700 font-medium mb-2">Childcare Needs</label>
                  <textarea 
                    id="childcareNeeds" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe your childcare needs and expectations"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  onClick={prevStep}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {step === 3 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Nationalities</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['Any', 'European', 'North American', 'South American', 'Asian', 'Australian/NZ'].map((nationality) => (
                      <div key={nationality} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`nationality-${nationality}`} 
                          className="mr-2"
                        />
                        <label htmlFor={`nationality-${nationality}`} className="text-gray-700">{nationality}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Language Skills</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['English (Fluent)', 'English (Conversational)', 'French', 'Spanish', 'German', 'Mandarin', 'Other'].map((language) => (
                      <div key={language} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`language-${language}`} 
                          className="mr-2"
                        />
                        <label htmlFor={`language-${language}`} className="text-gray-700">{language}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Experience Level</label>
                  <select 
                    id="experience" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="any">Any experience level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="experienced">Experienced (3+ years)</option>
                    <option value="professional">Professional (5+ years)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Availability</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-gray-700 text-sm mb-1">Earliest Start Date</label>
                      <input 
                        type="date" 
                        id="startDate" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="duration" className="block text-gray-700 text-sm mb-1">Preferred Duration</label>
                      <select 
                        id="duration" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="3-6">3-6 months</option>
                        <option value="6-9">6-9 months</option>
                        <option value="9-12">9-12 months</option>
                        <option value="12+">12+ months</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea 
                    id="additionalInfo" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any other preferences or information you'd like to share"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Membership Plan</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'Silver', price: '$49', duration: '1 Month' },
                      { name: 'Gold', price: '$69', duration: '3 Months' },
                      { name: 'Platinum', price: '$99', duration: '6 Months', recommended: true },
                      { name: 'Diamond', price: '$499', duration: 'Full Service' }
                    ].map((plan) => (
                      <div 
                        key={plan.name} 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          plan.recommended 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="flex items-start">
                          <input 
                            type="radio" 
                            id={`plan-${plan.name}`} 
                            name="plan" 
                            className="mt-1 mr-2"
                            defaultChecked={plan.recommended}
                          />
                          <label htmlFor={`plan-${plan.name}`} className="flex-1">
                            <span className="block font-semibold">{plan.name}</span>
                            <span className="block text-lg font-bold text-green-600">{plan.price}</span>
                            <span className="block text-sm text-gray-500">{plan.duration}</span>
                            {plan.recommended && (
                              <span className="inline-block mt-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Recommended
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  onClick={prevStep}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Back
                </button>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-gray-600">
            Already have an account? <Link href="/login" className="text-green-600 hover:underline">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
