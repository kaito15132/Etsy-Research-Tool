import { MockEtsyDataAdapter } from "@/lib/adapters/mock-etsy-data-adapter";
import { computeOpportunityScore, confidenceLabel } from "@/lib/scoring/models";

const adapter = new MockEtsyDataAdapter();

export async function getKeywordReport(keyword:string){
  const snapshot = await adapter.getKeywordSnapshot(keyword);
  const listings = await adapter.searchListingsByKeyword(keyword);
  if(!snapshot) return null;
  const opportunity = computeOpportunityScore({demandScore:snapshot.demandScore,salesVelocityScore:66,competitionWeaknessScore:100-snapshot.competitionScore,pricingPowerScore:58,trendMomentumScore:62,listingQualityGapScore:54,trademarkRisk:2,oversaturationRisk:4,dominantCompetitorRisk:4,lowDataConfidenceRisk:3});
  return { snapshot, listings, verdict: opportunity.verdict, confidenceLabel: confidenceLabel(snapshot.confidenceScore), estimateBasis: "Estimate based on mock snapshot deltas, rank visibility, and engagement velocities.", dataFreshness: snapshot.snapshotTime };
}

export async function getDashboardData(){
  const keywords = ["freelancer dashboard","client tracker","HVAC checklist"];
  const reports = await Promise.all(keywords.map(getKeywordReport));
  return reports.filter(Boolean);
}
