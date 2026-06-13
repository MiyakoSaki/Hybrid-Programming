import { Suspense } from "react";

import RevenueCard from "./RevenueCard";
import QuickAnalyticsCard from "./QuickAnalyticsCard";
import ProfileForm from "./ProfileForm";

import { getUserProfile, getQuickAnalytics } from "@/lib/db";

import { cacheLife, unstable_noStore as noStore } from "next/cache";

async function getCachedUserProfile() {
  "use cache";

  cacheLife({
    stale: 600,
    revalidate: 600,
    expire: 600,
  });

  return getUserProfile();
}

async function getLiveQuickAnalytics() {
  noStore();
  return getQuickAnalytics();
}

export default async function DashboardPage() {
  // Initiate both fetches in parallel
  const userPromise = getCachedUserProfile();
  const analyticsPromise = getLiveQuickAnalytics();
  
  // Only await cached profile to avoid blocking
  const user = await userPromise;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Creator Dashboard
              </h1>
              <p className="text-slate-500 mt-2">
                Welcome back, {user.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Current Niche</p>
              <p className="text-lg font-semibold text-slate-900">
                {user.niche}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Profile
              </h2>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl font-bold">
                  {user.name[0]}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 font-medium">Creator Name</p>
                <p className="text-lg text-slate-900 font-semibold">
                  {user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 font-medium">Niche</p>
                <div className="inline-block mt-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user.niche}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400">User ID: {user.id}</p>
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <Suspense
            fallback={
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="animate-pulse flex justify-center mb-2">
                    <div className="h-8 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <p className="text-slate-500">Loading analytics...</p>
                </div>
              </div>
            }
          >
            <QuickAnalyticsCard analyticsPromise={analyticsPromise} />
          </Suspense>
        </div>

        {/* Profile Management Section */}
        <div className="mb-12">
          <ProfileForm userId={user.id} currentNiche={user.niche} />
        </div>

        {/* Revenue Section */}
        <div>
          <Suspense
            fallback={
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 flex items-center justify-center min-h-[240px]">
                <div className="text-center">
                  <div className="animate-pulse flex justify-center mb-2">
                    <div className="h-8 w-40 bg-slate-200 rounded"></div>
                  </div>
                  <p className="text-slate-500">Loading revenue data...</p>
                </div>
              </div>
            }
          >
            <RevenueCard />
          </Suspense>
        </div>
      </div>
    </main>
  );
}