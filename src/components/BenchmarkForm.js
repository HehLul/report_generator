'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BenchmarkForm() {
  const [formData, setFormData] = useState({
    revenue: '',
    employees: '',
    leadCost: '',
    conversionRate: ''
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
    // Navigate to report page with form data
    router.push({
      pathname: '/report',
      query: formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
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

      <div className="space-y-2">
        <Label htmlFor="leadCost">Average Lead Cost ($)</Label>
        <Input 
          type="number" 
          id="leadCost"
          name="leadCost" 
          value={formData.leadCost} 
          onChange={handleChange} 
          placeholder="Cost to acquire a lead"
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="conversionRate">Conversion Rate (%)</Label>
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

      <Button type="submit" className="w-full">
        Generate My Performance Report
      </Button>
    </form>
  );
}