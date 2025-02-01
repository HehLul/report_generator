'use client';

import { useRef } from 'react';
import BenchmarkForm from '@/components/BenchmarkForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Know Your True Business Performance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Stop guessing. Get AI-powered insights that show exactly how your contracting business stacks up against industry leaders.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            >
              Get Your Free Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-blue-100 mt-4">
              Takes less than 2 minutes • No credit card required
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Identify Profit Leaks</h3>
              <p className="text-blue-100">
                See exactly where you're leaving money on the table compared to industry benchmarks.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimize Marketing</h3>
              <p className="text-blue-100">
                Find out if your lead costs and conversion rates match top performers.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scale Confidently</h3>
              <p className="text-blue-100">
                Get AI recommendations on hiring, pricing, and growth strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 mb-4">TRUSTED BY CONTRACTORS ACROSS THE COUNTRY</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-50">
              {/* Replace with actual client logos */}
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Performance Analysis
            </h2>
            <p className="text-gray-600">
              Fill out the form below to receive your personalized report comparing your business to industry benchmarks.
            </p>
          </div>
          
          <BenchmarkForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Business Benchmark AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}