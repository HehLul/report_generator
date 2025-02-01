'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function BenchmarkForm() {
  const [formData, setFormData] = useState({
    // Company Info
    businessType: '',
    employees: '',
    
    // Financial
    revenue: '',
    profitMargin: '',
    laborCost: '',
    overheadCost: '',
    
    // Sales & Marketing
    monthlyLeads: '',
    conversionRate: '',
    leadCost: '',
    marketingSpend: '',
    
    // Projects
    avgProjectSize: '',
    projectWinRate: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  // Convert formData to a query string
  const queryParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.toString()])
    )
  ).toString();

  // Navigate to report page with form data
  router.push(`/report?${queryParams}`);
};

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Company Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <select 
              id="businessType"
              name="businessType" 
              value={formData.businessType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select your business type</option>
              <option value="electrical">Electrical Contractor</option>
              <option value="plumbing">Plumbing Contractor</option>
              <option value="hvac">HVAC Contractor</option>
              <option value="general">General Contractor</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="employees">Number of Employees</Label>
            <Input 
              type="number" 
              id="employees"
              name="employees" 
              value={formData.employees} 
              onChange={handleChange} 
              placeholder="Total number of employees"
              required 
            />
          </div>
        </CardContent>
      </Card>

      {/* Financial Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Financial Performance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="revenue">Annual Revenue ($)</Label>
            <Input 
              type="number" 
              id="revenue"
              name="revenue" 
              value={formData.revenue} 
              onChange={handleChange} 
              placeholder="Enter your annual revenue"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="profitMargin">Profit Margin (%)</Label>
            <Input 
              type="number" 
              id="profitMargin"
              name="profitMargin" 
              value={formData.profitMargin} 
              onChange={handleChange} 
              placeholder="Your profit margin percentage"
              min="0"
              max="100"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="laborCost">Labor Cost (% of Revenue)</Label>
            <Input 
              type="number" 
              id="laborCost"
              name="laborCost" 
              value={formData.laborCost} 
              onChange={handleChange} 
              placeholder="Labor cost as percentage of revenue"
              min="0"
              max="100"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="overheadCost">Overhead Cost (% of Revenue)</Label>
            <Input 
              type="number" 
              id="overheadCost"
              name="overheadCost" 
              value={formData.overheadCost} 
              onChange={handleChange} 
              placeholder="Overhead cost as percentage of revenue"
              min="0"
              max="100"
              required 
            />
          </div>
        </CardContent>
      </Card>

      {/* Sales & Marketing */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Sales & Marketing</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="monthlyLeads">Monthly Leads</Label>
            <Input 
              type="number" 
              id="monthlyLeads"
              name="monthlyLeads" 
              value={formData.monthlyLeads} 
              onChange={handleChange} 
              placeholder="Average number of leads per month"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="conversionRate">Lead Conversion Rate (%)</Label>
            <Input 
              type="number" 
              id="conversionRate"
              name="conversionRate" 
              value={formData.conversionRate} 
              onChange={handleChange} 
              placeholder="Percentage of leads converted"
              min="0"
              max="100"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="leadCost">Cost per Lead ($)</Label>
            <Input 
              type="number" 
              id="leadCost"
              name="leadCost" 
              value={formData.leadCost} 
              onChange={handleChange} 
              placeholder="Average cost to acquire one lead"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="marketingSpend">Marketing Spend (% of Revenue)</Label>
            <Input 
              type="number" 
              id="marketingSpend"
              name="marketingSpend" 
              value={formData.marketingSpend} 
              onChange={handleChange} 
              placeholder="Marketing budget as percentage of revenue"
              min="0"
              max="100"
              required 
            />
          </div>
        </CardContent>
      </Card>

      {/* Project Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Project Performance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="avgProjectSize">Average Project Size ($)</Label>
            <Input 
              type="number" 
              id="avgProjectSize"
              name="avgProjectSize" 
              value={formData.avgProjectSize} 
              onChange={handleChange} 
              placeholder="Average revenue per project"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectWinRate">Project Win Rate (%)</Label>
            <Input 
              type="number" 
              id="projectWinRate"
              name="projectWinRate" 
              value={formData.projectWinRate} 
              onChange={handleChange} 
              placeholder="Percentage of proposals that convert"
              min="0"
              max="100"
              required 
            />
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full py-6 text-lg">
        Generate My Performance Report
      </Button>
    </form>
  );
}