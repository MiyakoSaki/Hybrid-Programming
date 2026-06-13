import { Analytics } from "@/lib/db";

interface QuickAnalyticsCardProps {
  analyticsPromise: Promise<Analytics>;
}

export default async function QuickAnalyticsCard({
  analyticsPromise,
}: QuickAnalyticsCardProps) {
  const analytics = await analyticsPromise;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Performance Metrics
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div>
            <p className="text-sm text-slate-600 font-medium">Subscribers</p>
            <p className="text-3xl font-bold text-green-600 mt-1">
              {analytics.subscribers.toLocaleString()}
            </p>
          </div>
          <div className="text-4xl text-green-300">👥</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <div>
            <p className="text-sm text-slate-600 font-medium">Total Views</p>
            <p className="text-3xl font-bold text-purple-600 mt-1">
              {analytics.views.toLocaleString()}
            </p>
          </div>
          <div className="text-4xl text-purple-300">👁️</div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            Last updated: Real-time data
          </p>
        </div>
      </div>
    </div>
  );
}