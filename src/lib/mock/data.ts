import { Keyword, KeywordSnapshot, ListingSnapshot, ShopSnapshot } from "@/lib/types/domain";

const now = new Date().toISOString();
export const keywords: Keyword[] = ["freelancer dashboard","client tracker","business tracker","HVAC checklist","Google Sheets budget planner","contractor invoice template","social media content planner","virtual assistant client tracker","project management spreadsheet","small business KPI dashboard"].map((k,i)=>({id:`kw_${i+1}`,keyword:k,normalizedKeyword:k.toLowerCase(),createdAt:now,lastCheckedAt:now}));

export const keywordSnapshots: KeywordSnapshot[] = keywords.map((k,i)=>({id:`kws_${i+1}`,keywordId:k.id,snapshotTime:now,etsyResultCount:2000+i*1200,avgPriceTop20:18+i,medianPriceTop20:15+i,avgFavoritesTop20:140-i*3,avgReviewsTop20:90+i*2,avgShopSalesTop20:3400+i*50,digitalListingRatio:0.72,demandScore:60+i%4*7,competitionScore:42+i%5*5,opportunityScore:55+i%3*9,confidenceScore:68-i%3*5}));

export const listingSnapshots: ListingSnapshot[] = Array.from({length:20}).map((_,i)=>({id:`ls_${i+1}`,etsyListingId:`etsy_${i+1}`,snapshotTime:now,keywordId:keywords[i%keywords.length].id,rankPosition:i+1,title:`${keywords[i%keywords.length].keyword} Template Pack ${i+1}`,price:12+(i%6)*4,currency:"USD",favoriteCount:80+i*10,reviewCount:30+i*8,shopTotalSales:1500+i*250,taxonomyId:"digital_template",listingType:"Digital",tags:["template","business","tracker"],imageCount:6,estimatedSales30d:14+i,estimatedRevenue30d:(14+i)*(12+(i%6)*4),confidenceScore:55+(i%5)*8}));

export const shopSnapshots: ShopSnapshot[] = Array.from({length:8}).map((_,i)=>({id:`ss_${i+1}`,etsyShopId:`shop_${i+1}`,snapshotTime:now,activeListingCount:35+i*8,totalSales:2000+i*1300,reviewCount:260+i*85,avgRating:4.7,estimatedSales7d:20+i*3,estimatedSales30d:85+i*9}));
