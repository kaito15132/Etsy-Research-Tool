import { KeywordSnapshot, ListingSnapshot, ShopSnapshot } from "@/lib/types/domain";

export interface EtsyDataAdapter {
  searchListingsByKeyword(keyword: string): Promise<ListingSnapshot[]>;
  getListingDetails(listingId: string): Promise<ListingSnapshot | null>;
  getShopDetails(shopId: string): Promise<ShopSnapshot | null>;
  getKeywordSnapshot(keyword: string): Promise<KeywordSnapshot | null>;
}
