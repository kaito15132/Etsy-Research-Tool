export type ConfidenceLabel = "High" | "Medium" | "Low";
export type Verdict = "Build" | "Watch" | "Avoid";
export type ListingType = "Digital" | "Physical";

export interface Keyword { id: string; keyword: string; normalizedKeyword: string; createdAt: string; lastCheckedAt: string; }
export interface KeywordSnapshot { id: string; keywordId: string; snapshotTime: string; etsyResultCount: number; avgPriceTop20: number; medianPriceTop20: number; avgFavoritesTop20: number; avgReviewsTop20: number; avgShopSalesTop20: number; digitalListingRatio: number; demandScore: number; competitionScore: number; opportunityScore: number; confidenceScore: number; }
export interface Listing { id: string; etsyListingId: string; shopId: string; url: string; firstSeenAt: string; lastSeenAt: string; }
export interface ListingSnapshot { id: string; etsyListingId: string; snapshotTime: string; keywordId: string; rankPosition: number; title: string; price: number; currency: string; favoriteCount: number; reviewCount: number; shopTotalSales: number; taxonomyId: string; listingType: ListingType; tags: string[]; imageCount: number; estimatedSales30d: number; estimatedRevenue30d: number; confidenceScore: number; }
export interface Shop { id: string; etsyShopId: string; shopName: string; url: string; firstSeenAt: string; lastSeenAt: string; }
export interface ShopSnapshot { id: string; etsyShopId: string; snapshotTime: string; activeListingCount: number; totalSales: number; reviewCount: number; avgRating: number; estimatedSales7d: number; estimatedSales30d: number; }

export interface ScoreBreakdown { demandScore:number; salesVelocityScore:number; competitionWeaknessScore:number; pricingPowerScore:number; trendMomentumScore:number; listingQualityGapScore:number; riskPenalty:number; opportunityScore:number; verdict: Verdict; }
export interface EstimateMeta { estimatedValue: string; confidence: ConfidenceLabel; explanation: string; dataFreshness: string; }
