import { revalidatePath } from "next/cache";

import { updateProfileNiche } from "@/lib/db";

interface ProfileFormProps {
  userId: string;
  currentNiche: string;
}

export default function ProfileForm({
  userId,
  currentNiche,
}: ProfileFormProps) {
  async function updateNiche(formData: FormData) {
    "use server";

    const nicheValue = formData.get("niche");

    if (typeof nicheValue !== "string") {
      throw new Error("Niche is required.");
    }

    const niche = nicheValue.trim();

    if (!niche) {
      throw new Error("Niche is required.");
    }

    await updateProfileNiche(userId, niche);
    revalidatePath("/dashboard");
  }

  return (
    <form action={updateNiche} className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Profile Management
        </h2>
        <p className="text-slate-600 mt-2">
          Update your creator niche to reflect your current content focus.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Current niche:</span> {currentNiche}
          </p>
        </div>

        <div>
          <label htmlFor="niche" className="block text-sm font-semibold text-slate-700 mb-2">
            New Niche
          </label>
          <input
            type="text"
            id="niche"
            name="niche"
            defaultValue={currentNiche}
            placeholder="e.g., Technology, Lifestyle, Gaming"
            required
            minLength={2}
            maxLength={50}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <p className="text-xs text-slate-500 mt-2">
            Between 2 and 50 characters
          </p>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>💾</span>
          Update Niche
        </button>
      </div>
    </form>
  );
}