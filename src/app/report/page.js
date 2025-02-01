// src/app/report/page.js
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Industry Benchmarks
const BENCHMARKS = {
  financial: {
    profitMargin: 15,
    laborCost: 40,
    overheadCost: 20
  },
  salesMarketing: {
    monthlyLeads: 50,
    conversionRate: 25,
    leadCost: 150,
    marketingSpend: 10
  },
  projectPerformance: {
    avgProjectSize: 75000,
    projectWinRate: 40
  }
};

function ReportContent() {
    const searchParams = useSearchParams();
    
    // Safely get search params with fallback values
    const getParam = (key, defaultValue = '') => {
      const value = searchParams.get(key);
      return value !== null ? value : defaultValue;
    };
  
    // Convert search params to numbers
    const formData = {
      businessType: getParam('businessType'),
      employees: Number(getParam('employees', '0')),
      revenue: Number(getParam('revenue', '0')),
      profitMargin: Number(getParam('profitMargin', '0')),
      laborCost: Number(getParam('laborCost', '0')),
      overheadCost: Number(getParam('overheadCost', '0')),
      monthlyLeads: Number(getParam('monthlyLeads', '0')),
      conversionRate: Number(getParam('conversionRate', '0')),
      leadCost: Number(getParam('leadCost', '0')),
      marketingSpend: Number(getParam('marketingSpend', '0')),
      avgProjectSize: Number(getParam('avgProjectSize', '0')),
      projectWinRate: Number(getParam('projectWinRate', '0'))
    };

  // Prepare data for charts
  const financialData = [
    { 
      name: 'Profit Margin', 
      Your: formData.profitMargin, 
      Benchmark: BENCHMARKS.financial.profitMargin 
    },
    { 
      name: 'Labor Cost', 
      Your: formData.laborCost, 
      Benchmark: BENCHMARKS.financial.laborCost 
    },
    { 
      name: 'Overhead Cost', 
      Your: formData.overheadCost, 
      Benchmark: BENCHMARKS.financial.overheadCost 
    }
  ];

  const salesMarketingData = [
    { 
      name: 'Monthly Leads', 
      Your: formData.monthlyLeads, 
      Benchmark: BENCHMARKS.salesMarketing.monthlyLeads 
    },
    { 
      name: 'Conversion Rate', 
      Your: formData.conversionRate, 
      Benchmark: BENCHMARKS.salesMarketing.conversionRate 
    },
    { 
      name: 'Lead Cost', 
      Your: formData.leadCost, 
      Benchmark: BENCHMARKS.salesMarketing.leadCost 
    }
  ];

  const projectPerformanceData = [
    { 
      name: 'Avg Project Size', 
      Your: formData.avgProjectSize, 
      Benchmark: BENCHMARKS.projectPerformance.avgProjectSize 
    },
    { 
      name: 'Project Win Rate', 
      Your: formData.projectWinRate, 
      Benchmark: BENCHMARKS.projectPerformance.projectWinRate 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="mr-2" /> Back to Assessment
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8">
        Your Business Performance Report
      </h1>

      {/* Company Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Company Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <p><strong>Business Type:</strong> {formData.businessType}</p>
            <p><strong>Number of Employees:</strong> {formData.employees}</p>
            <p><strong>Annual Revenue:</strong> ${formData.revenue.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>

      {/* Financial Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Your" fill="#8884d8" />
              <Bar dataKey="Benchmark" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sales & Marketing */}
      <Card>
        <CardHeader>
          <CardTitle>Sales & Marketing Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesMarketingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Your" fill="#8884d8" />
              <Bar dataKey="Benchmark" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Project Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Project Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Your" fill="#8884d8" />
              <Bar dataKey="Benchmark" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReportContent />
    </Suspense>
  );
}