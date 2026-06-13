// lib/db.ts

export interface User {
  id: string;
  name: string;
  niche: string;
}

export interface Analytics {
  subscribers: number;
  views: number;
}

export interface Revenue {
  earnings: number;
  pending: number;
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getUserProfile(): Promise<User> {
  await delay(50);

  return {
    id: "1",
    name: "Alliza",
    niche: "Technology",
  };
}

export async function getQuickAnalytics(): Promise<Analytics> {
  await delay(200);

  return {
    subscribers: 15000,
    views: 850000,
  };
}

export async function getHeavyRevenueData(): Promise<Revenue> {
  await delay(1200);

  return {
    earnings: 5200,
    pending: 430,
  };
}

export async function updateProfileNiche(
  id: string,
  newNiche: string
): Promise<void> {
  console.log("Updated:", id, newNiche);
}
