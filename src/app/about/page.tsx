import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
        {/* Header Section */}
        <div className="bg-[#FCCC0A] px-8 py-10 text-slate-900">
          <h1 className="text-4xl font-bold mb-2">About We Move New York</h1>
          <p className="text-lg font-medium opacity-90">Bus Dispatcher Exam Prep Platform</p>
        </div>

        <div className="p-8 space-y-8 text-slate-700 leading-relaxed">
          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Purpose</h2>
            <p>
              The WMNY Exam Prep platform is a comprehensive training ecosystem designed specifically 
              for candidates preparing for the NYC Bus Dispatcher certification[cite: 1, 5]. Our goal is to 
              ensure every candidate has the technical knowledge and situational readiness required 
              to lead in the New York transit system.
            </p>
          </section>

          {/* Features Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Training Excellence</h2>
            <p>
              Developed by <strong>Prometheus Workforce Analytics</strong>, this platform utilizes 
              advanced data structures and AI-powered tutoring to provide a personalized study 
              experience[cite: 3, 5]. With over 750 practice questions, real-time progress tracking, 
              and a dedicated Life &amp; Legacy center, we support the professional and personal 
              growth of the transit workforce[cite: 5, 14].
            </p>
          </section>

          {/* Legal Disclaimer Section */}
          <section className="bg-slate-50 p-6 rounded-md border border-slate-200 italic text-sm">
            <h3 className="font-bold text-slate-900 mb-2 not-italic">Official Disclaimer</h3>
            <p>
              This site is not affiliated with the Metropolitan Transportation Authority or 
              any of the agencies governed by the Metropolitan Transportation Authority[cite: 38]. 
              The content provided is for educational purposes only and does not guarantee 
              results on official examinations[cite: 38].
            </p>
          </section>

          {/* Developer Credit Section */}
          <section className="pt-6 border-t border-slate-100 text-sm text-slate-500 flex justify-between items-center">
            <div>
              <p className="font-semibold text-slate-900">Project Support</p>
              <p>Contact: <span className="text-blue-600">wmnyexamprep@gmail.com</span></p>
            </div>
            <div className="text-right">
              <p>Platform Developed &amp; Maintained by</p>
              <p className="font-bold text-slate-900 uppercase tracking-wider">Prometheus Workforce Analytics</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;