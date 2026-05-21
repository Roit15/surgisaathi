import { BarChart3, TrendingUp, Users, Activity, Target, ShieldCheck, Zap, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Analytics Dashboard | Admin",
  robots: "noindex, nofollow", // Prevent indexing of admin panel
};

const metrics = [
  { label: "Total Leads (30d)", value: "1,248", change: "+14.5%", trend: "up", icon: Users },
  { label: "Conversion Rate", value: "24.2%", change: "+2.1%", trend: "up", icon: Target },
  { label: "Consultations Booked", value: "302", change: "+8.4%", trend: "up", icon: Activity },
  { label: "Est. Revenue (Pipeline)", value: "₹4.5M", change: "+18.2%", trend: "up", icon: TrendingUp },
];

const topCities = [
  { city: "Mumbai", leads: 482, conversion: 26, color: "bg-blue-500" },
  { city: "Chandigarh", leads: 310, conversion: 28, color: "bg-[var(--color-primary)]" },
  { city: "Pune", leads: 185, conversion: 22, color: "bg-purple-500" },
  { city: "Jaipur", leads: 142, conversion: 20, color: "bg-amber-500" },
  { city: "Lucknow", leads: 129, conversion: 18, color: "bg-emerald-500" },
];

const trafficSources = [
  { source: "Organic Search", visitors: "24,592", percentage: 45, color: "bg-[var(--color-primary)]" },
  { source: "Google Ads", visitors: "18,204", percentage: 33, color: "bg-[var(--color-accent)]" },
  { source: "Direct Traffic", visitors: "8,401", percentage: 15, color: "bg-blue-400" },
  { source: "Social Media", visitors: "3,822", percentage: 7, color: "bg-pink-500" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-[72px]">
      {/* Admin Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-[60px] lg:top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white">
                <BarChart3 size={16} />
              </div>
              <span className="font-bold text-gray-900">Admin Console</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                System Healthy
              </span>
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Growth Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Real-time overview of SURGISAATHI performance.</p>
          </div>
          <div className="flex gap-2">
            <select className="bg-white border border-gray-200 text-sm rounded-lg px-4 py-2 font-medium outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>This Quarter</option>
            </select>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <metric.icon size={20} className="text-gray-600" />
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                  <ArrowUpRight size={14} /> {metric.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{metric.label}</h3>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area (Visualized with CSS for simplicity) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Lead Generation Trend</h3>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></span>Organic</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-200"></span>Paid</span>
              </div>
            </div>
            
            {/* Simulated Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 border-b border-gray-100 pb-2">
              {[40, 55, 45, 70, 65, 85, 75, 95, 80, 100, 90, 110].map((val, i) => (
                <div key={i} className="w-full flex flex-col justify-end gap-1 group relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {val * 4}
                  </div>
                  <div className={"w-full rounded-t-sm transition-all duration-500 " + (i % 2 === 0 ? "bg-[var(--color-primary)]" : "bg-[var(--color-accent)]")} style={{ height: `${val}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe size={18} className="text-gray-400" /> Traffic Sources
            </h3>
            <div className="space-y-6">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{source.source}</span>
                    <span className="font-bold text-gray-900">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className={`h-2 rounded-full ${source.color}`} style={{ width: `${source.percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{source.visitors} visitors</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Cities */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Top Performing Cities</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-sm font-medium text-gray-500">City</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Leads Generated</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Conversion Rate</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topCities.map((city) => (
                    <tr key={city.city} className="border-b border-gray-50 last:border-0">
                      <td className="py-4 font-semibold text-gray-900">{city.city}</td>
                      <td className="py-4 text-gray-600">
                        <div className="flex items-center gap-3">
                          {city.leads}
                          <div className="w-24 bg-gray-100 rounded-full h-1.5 hidden sm:block">
                            <div className={`h-1.5 rounded-full ${city.color}`} style={{ width: `${(city.leads / 500) * 100}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-gray-600 font-medium">{city.conversion}%</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-md">
                          <CheckCircle2 size={12} /> Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
              <Zap size={150} />
            </div>
            <h3 className="text-lg font-bold mb-2">Platform Status</h3>
            <p className="text-gray-400 text-sm mb-6">All systems are running optimally.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-green-400" />
                  <span className="text-sm font-medium">SSL Certificate</span>
                </div>
                <span className="text-xs text-gray-400">Valid</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Activity size={18} className="text-green-400" />
                  <span className="text-sm font-medium">API Endpoints</span>
                </div>
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
            
            <Link href="/" className="mt-8 block w-full text-center bg-white text-gray-900 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
              View Live Website
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
