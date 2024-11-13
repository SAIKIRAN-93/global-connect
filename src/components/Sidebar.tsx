import React from 'react';
import { 
  LayoutDashboard, 
  Box, 
  Ship, 
  FileText, 
  MessageSquare, 
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Box, label: 'Inventory', href: '#' },
  { icon: Ship, label: 'Shipments', href: '#' },
  { icon: FileText, label: 'Documents', href: '#' },
  { icon: MessageSquare, label: 'Messages', href: '#' },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-4 flex flex-col">
      <div className="flex items-center gap-3 px-2 py-4">
        <Ship className="w-8 h-8 text-emerald-400" />
        <span className="text-xl font-bold">Global Connect</span>
      </div>
      
      <nav className="flex-1 mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-700 pt-4">
        <a
          href="#settings"
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors mt-2"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}