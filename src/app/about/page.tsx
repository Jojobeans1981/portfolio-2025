'use client';

import React from 'react';
import { ArrowLeft, Target, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg mb-12">
              <div className="bg-gray-900 rounded-lg p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Our Mission
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200 italic">
                  "At Prometheus Workforce Analytics, we don’t use AI to replace the worker; we use it to ignite their potential. Our flagship platform, WMNY Exam Prep, is a testament to this human-centric approach—providing transit professionals with the digital scaffolding they need to achieve mastery, physical wellness, and financial security."
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target size={32} className="text-blue-400" />
                WMNY Exam Prep Dashboard
              </h2>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <div className="aspect-video relative bg-gray-800 flex items-center justify-center">
                    <Image 
                      src="/prometheus-Dash.png"
                      alt="WMNY Exam Prep Dashboard"
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Placeholder overlay if image is missing or for additional context */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 pointer-events-none">
                      <span className="text-gray-400 text-sm">Application Dashboard Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                <Zap size={24} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ignite Potential</h3>
                <p className="text-gray-400">Empowering workers with AI tools that enhance their natural skills and capabilities.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                <Shield size={24} className="text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Human-Centric</h3>
                <p className="text-gray-400">Design focused on the physical wellness and financial security of transit professionals.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                <Target size={24} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Digital Scaffolding</h3>
                <p className="text-gray-400">Structured support systems that guide users toward professional mastery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
