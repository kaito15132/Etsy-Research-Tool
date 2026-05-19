export const schemaPlaceholders = {
  keywords: ["id","keyword","normalizedKeyword","createdAt","lastCheckedAt"],
  keywordSnapshots: ["id","keywordId","snapshotTime","etsyResultCount","avgPriceTop20","medianPriceTop20","avgFavoritesTop20","avgReviewsTop20","avgShopSalesTop20","digitalListingRatio","demandScore","competitionScore","opportunityScore","confidenceScore"],
  listings: ["id","etsyListingId","shopId","url","firstSeenAt","lastSeenAt"],
  listingSnapshots: ["id","etsyListingId","snapshotTime","keywordId","rankPosition","title","price","currency","favoriteCount","reviewCount","shopTotalSales","taxonomyId","listingType","tags","imageCount","estimatedSales30d","estimatedRevenue30d","confidenceScore"],
  shops: ["id","etsyShopId","shopName","url","firstSeenAt","lastSeenAt"],
  shopSnapshots: ["id","etsyShopId","snapshotTime","activeListingCount","totalSales","reviewCount","avgRating","estimatedSales7d","estimatedSales30d"],
  researchProjects: ["id","userId","name","niche","createdAt"],
  savedOpportunities: ["id","userId","projectId","keywordId","etsyListingId","shopId","type","notes","status","createdAt"]
};
