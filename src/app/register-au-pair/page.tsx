"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterAuPairPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Register as an Au Pair</h1>
          <p className="text-gray-600 text-center mb-12">
            Create your profile and start connecting with Australian host families. Registration is completely free!
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
                    {index === 0 ? 'Account' : index === 1 ? 'Personal Details' : 'Experience & Preferences'}
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

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="birthdate" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      id="birthdate" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">Nationality</label>
                    <select 
                      id="nationality" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select your nationality</option>
                      <option value="fr">France</option>
                      <option value="de">Germany</option>
                      <option value="it">Italy</option>
                      <option value="es">Spain</option>
                      <option value="uk">United Kingdom</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="br">Brazil</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="languages" className="block text-gray-700 font-medium mb-2">Languages Spoken</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                    {['English', 'French', 'German', 'Spanish', 'Italian', 'Mandarin', 'Japanese', 'Portuguese', 'Other'].map((language) => (
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
                  <div>
                    <label htmlFor="languageProficiency" className="block text-gray-700 text-sm mb-1">English Proficiency</label>
                    <select 
                      id="languageProficiency" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="basic">Basic</option>
                      <option value="conversational">Conversational</option>
                      <option value="fluent">Fluent</option>
                      <option value="native">Native</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Include country code"
                  />
                </div>
                
                <div>
                  <label htmlFor="currentLocation" className="block text-gray-700 font-medium mb-2">Current Location</label>
                  <input 
                    type="text" 
                    id="currentLocation" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
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

          {/* Step 3: Experience & Preferences */}
          {step === 3 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Experience & Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Childcare Experience</label>
                  <textarea 
                    id="experience" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe your childcare experience, including ages of children and responsibilities"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Childcare Skills</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      'Infant Care', 'Toddler Care', 'School-Age Children', 'Multiple Children',
                      'Special Needs', 'Meal Preparation', 'Homework Help', 'Arts & Crafts',
                      'Sports Activities', 'Music', 'Swimming Supervision', 'First Aid Certified'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} 
                          className="mr-2"
                        />
                        <label htmlFor={`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700">{skill}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="availabilityStart" className="block text-gray-700 font-medium mb-2">Availability Start Date</label>
                    <input 
                      type="date" 
                      id="availabilityStart" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="availabilityEnd" className="block text-gray-700 font-medium mb-2">Availability End Date</label>
                    <input 
                      type="date" 
                      id="availabilityEnd" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="stayDuration" className="block text-gray-700 font-medium mb-2">Preferred Stay Duration</label>
                  <select 
                    id="stayDuration" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="3-6">3-6 months</option>
                    <option value="6-9">6-9 months</option>
                    <option value="9-12">9-12 months</option>
                    <option value="12+">12+ months</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Locations in Australia</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
                      'Gold Coast', 'Canberra', 'Regional Areas', 'Any Location'
                    ].map((location) => (
                      <div key={location} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`location-${location.replace(/\s+/g, '-').toLowerCase()}`} 
                          className="mr-2"
                        />
                        <label htmlFor={`location-${location.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700">{location}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="driverLicense" className="block text-gray-700 font-medium mb-2">Driver's License</label>
                  <select 
                    id="driverLicense" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="yes">Yes, I have a valid driver's license</option>
                    <option value="no">No, I don't have a driver's license</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="aboutMe" className="block text-gray-700 font-medium mb-2">About Me</label>
                  <textarea 
                    id="aboutMe" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell host families about yourself, your personality, interests, and why you want to be an au pair"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea 
                    id="additionalInfo" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any other information you'd like to share with potential host families"
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
