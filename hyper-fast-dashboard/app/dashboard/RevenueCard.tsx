import { getHeavyRevenueData } from "@/lib/db";

export default async function RevenueCard() {
  const revenue = await getHeavyRevenueData();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Revenue
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
          <div>
            <p className="text-sm text-slate-600 font-medium">Earnings</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">
              ${revenue.earnings.toLocaleString()}
            </p>
          </div>
          <div className="text-4xl">💰</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <div>
            <p className="text-sm text-slate-600 font-medium">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">
              ${revenue.pending.toLocaleString()}
            </p>
          </div>
          <div className="text-4xl">⏳</div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">
              Total Balance
            </p>
            <p className="text-lg font-bold text-slate-900">
              ${(revenue.earnings + revenue.pending).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}