export const dynamic = "force-dynamic";

async function getBitcoinPrice() {
  try {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return res.json();
  } catch (error) {
    console.error("Failed to fetch Bitcoin price:", error);
    return null;
  }
}

export default async function LiveMetricsPage() {
  const data = await getBitcoinPrice();
  if (!data) {
    return (
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Live Bitcoin Price</h1>
          <p className="text-gray-500 mt-1">This page is server-rendered on every request.</p>
        </div>

        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-gray-500">Live data is currently unavailable. Please check network or try again later.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Live Bitcoin Price</h1>
        <p className="text-gray-500 mt-1">This page is server-rendered on every request.</p>
      </div>

      <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Updated</div>
            <div className="text-2xl font-semibold mt-1">{data?.bpi?.USD?.rate}</div>
          </div>

          <div className="text-right text-sm text-gray-500">
            <div>{data?.time?.updated}</div>
            <div className="mt-2">Disclaimer: demo data</div>
          </div>
        </div>
      </div>
    </div>
  );
}