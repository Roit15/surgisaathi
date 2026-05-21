"use client";

import { useState } from "react";
import { Shield, CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";

const insurers = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz", "New India Assurance",
  "Max Bupa", "Care Health", "Niva Bupa", "Aditya Birla Health", "ManipalCigna",
  "Tata AIG", "Cholamandalam", "National Insurance", "United India Insurance", "Other"
];

export default function InsuranceChecker() {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-[var(--color-bg-warm)] p-8 rounded-2xl border border-[var(--color-card-border)] text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Request Received Successfully!</h3>
        <p className="text-[var(--color-text-body)] mb-6">
          Our insurance desk has received your details. We are verifying your coverage with your insurer and will call you within 15 minutes.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="btn-secondary !bg-white mx-auto"
        >
          Check Another Policy
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[var(--color-card-border)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Shield size={120} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Shield className="text-[var(--color-primary)]" size={24} /> 
          Instant Insurance Eligibility Check
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-6">
          Enter your details below to instantly verify if your laser surgery is covered by your policy.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">
                Select Your Insurer
              </label>
              <div className="relative">
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none appearance-none">
                  <option value="">Choose Insurer...</option>
                  {insurers.map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">
                Policy Number (Optional)
              </label>
              <input 
                type="text" 
                placeholder="e.g. 123456789" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">
                Patient Name
              </label>
              <input 
                type="text" 
                required
                placeholder="Full Name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  placeholder="Mobile Number" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full btn-primary !bg-[var(--color-accent)] !py-4 mt-2 flex justify-center items-center gap-2"
          >
            {status === "loading" ? (
              <span className="animate-pulse">Verifying Details...</span>
            ) : (
              <>Check My Coverage Now <ArrowRight size={18} /></>
            )}
          </button>
          
          <p className="text-xs text-center text-gray-500 mt-3">
            Your details are secure. By submitting, you agree to receive a call back from our insurance experts.
          </p>
        </form>
      </div>
    </div>
  );
}
