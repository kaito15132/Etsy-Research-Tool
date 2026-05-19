import { EtsyDataAdapter } from "@/lib/adapters/etsy-data-adapter";
import { keywordSnapshots, listingSnapshots, shopSnapshots, keywords } from "@/lib/mock/data";

export class MockEtsyDataAdapter implements EtsyDataAdapter {
  async searchListingsByKeyword(keyword: string) { const kw = keywords.find(k=>k.normalizedKeyword===keyword.toLowerCase()); return listingSnapshots.filter(l=>!kw || l.keywordId===kw.id); }
  async getListingDetails(listingId: string) { return listingSnapshots.find(l=>l.etsyListingId===listingId) ?? null; }
  async getShopDetails(shopId: string) { return shopSnapshots.find(s=>s.etsyShopId===shopId) ?? null; }
  async getKeywordSnapshot(keyword: string) { const kw = keywords.find(k=>k.normalizedKeyword===keyword.toLowerCase()); return kw ? keywordSnapshots.find(s=>s.keywordId===kw.id) ?? null : null; }
}
