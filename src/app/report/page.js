'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Color palette
const COLORS = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  accent1: '#45B7D1',
  accent2: '#96CEB4',
  accent3: '#FFEEAD',
  accent4: '#D4A5A5',
  accent5: '#9B5DE5',
  accent6: '#F15BB5'
};

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

// Custom tooltip for pie charts
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

function ReportContent() {
  const searchParams = useSearchParams();
  
  const getParam = (key, defaultValue = '') => {
    const value = searchParams.get(key);
    return value !== null ? value : defaultValue;
  };

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

  // Cost breakdown for pie chart
  const costBreakdownData = [
    { name: 'Labor Cost', value: formData.laborCost },
    { name: 'Overhead', value: formData.overheadCost },
    { name: 'Profit Margin', value: formData.profitMargin },
    { name: 'Other Costs', value: 100 - formData.laborCost - formData.overheadCost - formData.profitMargin }
  ];

  // Sales metrics for pie chart
  const salesMetricsData = [
    { name: 'Converted', value: formData.conversionRate },
    { name: 'Not Converted', value: 100 - formData.conversionRate }
  ];

  // Bar chart data
  const performanceComparisonData = [
    { 
      name: 'Monthly Leads',
      You: formData.monthlyLeads,
      Benchmark: BENCHMARKS.salesMarketing.monthlyLeads,
    },
    {
      name: 'Lead Cost ($)',
      You: formData.leadCost,
      Benchmark: BENCHMARKS.salesMarketing.leadCost,
    },
    {
      name: 'Project Win Rate (%)',
      You: formData.projectWinRate,
      Benchmark: BENCHMARKS.projectPerformance.projectWinRate,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="mr-2" /> Back to Assessment
      </Link>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Your Business Performance Report
        </h1>
        <p className="text-center text-blue-100">
          Comprehensive analysis of your {formData.businessType} contracting business
        </p>
      </div>

      {/* Company Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Company Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="text-pink-600 font-semibold">Business Type</p>
              <p className="text-2xl font-bold capitalize">{formData.businessType}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-600 font-semibold">Employees</p>
              <p className="text-2xl font-bold">{formData.employees}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-600 font-semibold">Annual Revenue</p>
              <p className="text-2xl font-bold">${formData.revenue.toLocaleString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Structure */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={costBreakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {costBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={Object.values(COLORS)[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Lead Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={salesMetricsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {salesMetricsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[COLORS.primary, COLORS.secondary][index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Performance vs. Industry Benchmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={performanceComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="You" fill={COLORS.primary} />
              <Bar dataKey="Benchmark" fill={COLORS.secondary} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Insights Card */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-xl">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {formData.profitMargin < BENCHMARKS.financial.profitMargin && (
              <p className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                Your profit margin is below industry average. Consider reviewing pricing strategy.
              </p>
            )}
            {formData.conversionRate < BENCHMARKS.salesMarketing.conversionRate && (
              <p className="flex items-center gap-2">
                <span className="text-orange-500">•</span>
                Lead conversion rate could be improved through better qualification processes.
              </p>
            )}
            {formData.leadCost > BENCHMARKS.salesMarketing.leadCost && (
              <p className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                Your cost per lead is higher than benchmark. Review marketing channels for efficiency.
              </p>
            )}
          </div>
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