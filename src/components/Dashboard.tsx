import React from 'react';
import { TrendingUp, TrendingDown, Package, Clock, AlertTriangle } from 'lucide-react';

const stats = [
  {
    title: "Active Shipments",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Pending Documents",
    value: "7",
    change: "-3",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Alerts",
    value: "3",
    change: "New",
    trend: "warning",
    icon: AlertTriangle,
  },
];

const recentShipments = [
  {
    id: "SH-2024-001",
    destination: "Hamburg, Germany",
    status: "In Transit",
    eta: "Mar 15, 2024",
    type: "Sea Freight"
  },
  {
    id: "SH-2024-002",
    destination: "Dubai, UAE",
    status: "Customs Clearance",
    eta: "Mar 12, 2024",
    type: "Air Freight"
  },
  {
    id: "SH-2024-003",
    destination: "Singapore",
    status: "Delivered",
    eta: "Mar 8, 2024",
    type: "Sea Freight"
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.trend === 'up' ? 'bg-green-100' :
                stat.trend === 'down' ? 'bg-blue-100' : 'bg-amber-100'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.trend === 'up' ? 'text-green-600' :
                  stat.trend === 'down' ? 'text-blue-600' : 'text-amber-600'
                }`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
              {stat.trend === 'down' && <TrendingDown className="h-4 w-4 text-blue-500 mr-1" />}
              <span className={`text-sm ${
                stat.trend === 'up' ? 'text-green-500' :
                stat.trend === 'down' ? 'text-blue-500' : 'text-amber-500'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Shipments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Shipment ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Destination</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">ETA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Type</th>
              </tr>
            </thead>
            <tbody>
              {recentShipments.map((shipment) => (
                <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="font-medium text-emerald-600">{shipment.id}</span>
                  </td>
                  <td className="py-3 px-4">{shipment.destination}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      shipment.status === 'Customs Clearance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{shipment.eta}</td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{shipment.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}