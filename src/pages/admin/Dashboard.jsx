import { useAuth } from "@/hooks/useAuth";
import React from "react";

const Dashboard = () => {
  const { auth, login, logout, loading, error } = useAuth();
  console.log(auth);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </header>
        <main className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 custom-mb-20">
              Welcome to Your Dashboard!
            </h2>
            <p className="text-gray-600">
              Start exploring your data and insights here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
