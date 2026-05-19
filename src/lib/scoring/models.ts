import { ConfidenceLabel, Verdict } from "@/lib/types/domain";

const clamp = (v:number,min=0,max=100)=>Math.max(min,Math.min(max,v));

export function computeDemandScore(input:{searchVolumeProxy:number; favoriteVelocity:number; reviewVelocity:number; shopSalesVelocity:number; externalTrend:number;}):number {
  return clamp(input.searchVolumeProxy*0.4 + input.favoriteVelocity*0.25 + input.reviewVelocity*0.15 + input.shopSalesVelocity*0.1 + input.externalTrend*0.1);
}

export function computeCompetitionWeaknessScore(input:{normalizedResultCount:number; avgTop20ReviewCount:number; avgTop20ShopSales:number; topShopConcentration:number; avgListingQualityScore:number;}):number {
  return clamp(100 - input.normalizedResultCount*0.3 - input.avgTop20ReviewCount*0.25 - input.avgTop20ShopSales*0.2 - input.topShopConcentration*0.15 - input.avgListingQualityScore*0.1);
}

export function computeOpportunityScore(input:{demandScore:number; salesVelocityScore:number; competitionWeaknessScore:number; pricingPowerScore:number; trendMomentumScore:number; listingQualityGapScore:number; trademarkRisk:number; oversaturationRisk:number; dominantCompetitorRisk:number; lowDataConfidenceRisk:number;}) {
  const base = input.demandScore*0.3 + input.salesVelocityScore*0.25 + input.competitionWeaknessScore*0.2 + input.pricingPowerScore*0.1 + input.trendMomentumScore*0.1 + input.listingQualityGapScore*0.05;
  const riskPenalty = input.trademarkRisk + input.oversaturationRisk + input.dominantCompetitorRisk + input.lowDataConfidenceRisk;
  const score = clamp(base - riskPenalty);
  const verdict: Verdict = score >= 70 ? "Build" : score >= 45 ? "Watch" : "Avoid";
  return { score, verdict, riskPenalty };
}

export function confidenceLabel(score:number): ConfidenceLabel { return score >= 75 ? "High" : score >= 45 ? "Medium" : "Low"; }
