import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wand2, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Zap,
  BarChart3,
  Users,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => (
  <nav className="h-16 border-b border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
        <Zap className="text-black w-5 h-5 fill-current" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">AvarestSoft</span>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Documentation</button>
      <Link to="/login" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all">
        Get Started
      </Link>
    </div>
  </nav>
);

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Wand2, label: 'AI Tools', path: '/ai-tools' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Account', path: '/account' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 border-r border-white/10 bg-zinc-950 h-[calc(100vh-64px)] p-4 hidden md:block">
      <div className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-emerald-500/10 text-emerald-500" 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="absolute bottom-8 left-4 right-4">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-400/5 transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

const DashboardCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      {trend && (
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          trend > 0 ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
        )}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

// --- Pages ---

const LandingPage = () => (
  <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
    <Navbar />
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold uppercase tracking-wider"
        >
          <Zap className="w-3 h-3 fill-current" />
          The Future of AI SaaS is Here
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight"
        >
          Scale your agency <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            with AI intelligence.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed"
        >
          AvarestSoft provides the ultimate toolkit for digital marketing agencies. 
          Automate workflows, generate content, and manage clients in one unified platform.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-all">
            View Demo
          </button>
        </motion.div>
      </div>

      <div className="mt-32 grid md:grid-cols-3 gap-8">
        {[
          { title: 'AI Content Engine', desc: 'Generate high-converting copy, ads, and social posts in seconds.', icon: Wand2 },
          { title: 'Client Dashboard', desc: 'Give your clients a white-labeled portal to track their growth.', icon: LayoutDashboard },
          { title: 'Advanced Analytics', desc: 'Deep insights into your agency performance and ROI.', icon: BarChart3 },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-all"
          >
            <feature.icon className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  </div>
);

const Dashboard = () => (
  <div className="flex min-h-screen bg-black text-white">
    <Sidebar />
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
          <p className="text-zinc-400">Here's what's happening with your agency today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-white/5 text-sm font-medium">
            Mar 13, 2026
          </div>
          <button className="p-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-colors">
            <Zap className="w-5 h-5 fill-current" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <DashboardCard title="Active Clients" value="24" icon={Users} trend={12} />
        <DashboardCard title="Monthly Revenue" value="$12,450" icon={DollarSign} trend={8} />
        <DashboardCard title="AI Credits Used" value="842" icon={Zap} trend={-5} />
        <DashboardCard title="Conversion Rate" value="3.2%" icon={BarChart3} trend={24} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-3xl bg-zinc-900 border border-white/5">
          <h2 className="text-xl font-bold mb-6">Revenue Growth</h2>
          <div className="h-64 bg-black/40 rounded-2xl flex items-end justify-between p-6 gap-2">
            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
              <div key={i} className="w-full bg-emerald-500/20 rounded-t-lg relative group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="bg-emerald-500 rounded-t-lg w-full transition-all group-hover:bg-emerald-400"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[
              { user: 'Sarah J.', action: 'Generated Ad Copy', time: '2m ago' },
              { user: 'Mike R.', action: 'Upgraded to Pro', time: '15m ago' },
              { user: 'Agency X', action: 'New Client Added', time: '1h ago' },
              { user: 'Gemini AI', action: 'Model Updated', time: '3h ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold">
                    {item.user[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.user}</p>
                    <p className="text-xs text-zinc-500">{item.action}</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

const AITools = () => {
  const [prompt, setPrompt] = React.useState('');
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // In a real app, you'd call the Gemini service here
    setTimeout(() => {
      setResult("This is a simulated AI response for: " + prompt + ". In a production environment with a valid GEMINI_API_KEY, this would be a high-quality generated output from Google's Gemini model.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight">AI Content Engine</h1>
          <p className="text-zinc-400">Generate high-converting marketing materials in seconds.</p>
        </header>

        <div className="max-w-4xl space-y-8">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
            <label className="block text-sm font-medium text-zinc-400 mb-4">What would you like to create?</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Write a Facebook ad for a luxury watch brand targeting high-net-worth individuals..."
              className="w-full h-32 bg-black/50 border border-white/10 rounded-2xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            />
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {['Ad Copy', 'Blog Post', 'Email', 'Social'].map(tag => (
                  <button key={tag} className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="px-6 py-3 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                {loading ? 'Generating...' : <><Wand2 className="w-4 h-4" /> Generate</>}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-emerald-500 font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-current" /> AI Generated Result
                  </h3>
                  <button className="text-xs font-medium text-emerald-500 hover:underline">Copy to Clipboard</button>
                </div>
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {result}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const Account = () => (
  <div className="flex min-h-screen bg-black text-white">
    <Sidebar />
    <main className="flex-1 p-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-zinc-400">Manage your subscription and personal information.</p>
      </header>

      <div className="max-w-4xl space-y-8">
        <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
          <h2 className="text-xl font-bold mb-6">Current Plan</h2>
          <div className="flex items-center justify-between p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <div>
              <p className="text-emerald-500 font-bold text-lg">Pro Agency Plan</p>
              <p className="text-zinc-400 text-sm">$49/month • Renews on April 13, 2026</p>
            </div>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
              Manage Billing
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
            <h2 className="text-xl font-bold mb-6">Profile Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" defaultValue="Alex Rivera" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" defaultValue="alex@avarest.soft" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm" />
              </div>
              <button className="w-full py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors">
                Update Profile
              </button>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
            <h2 className="text-xl font-bold mb-6">Security</h2>
            <div className="space-y-4">
              <button className="w-full py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                Change Password
              </button>
              <button className="w-full py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                Enable 2FA
              </button>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-zinc-500 mb-4">Danger Zone</p>
                <button className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                  Delete Account...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-tools" element={<AITools />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<div className="min-h-screen bg-black flex items-center justify-center text-white">Login Page Placeholder</div>} />
    </Routes>
  );
}
