import { getKeywordReport } from "@/lib/services/research-services";

export default async function KeywordExplorer({searchParams}:{searchParams:{keyword?:string}}){
  const keyword = searchParams.keyword ?? "freelancer dashboard";
  const report = await getKeywordReport(keyword);
  if(!report) return <main className="p-8">No mock report found for “{keyword}”.</main>;
  return <main className="p-8 space-y-4"><h1 className="text-2xl font-bold">Keyword Explorer</h1><div className="bg-white rounded-xl p-4 shadow"><p><b>Keyword:</b> {keyword}</p><p><b>Etsy results:</b> {report.snapshot.etsyResultCount.toLocaleString()}</p><p><b>Demand:</b> {report.snapshot.demandScore}</p><p><b>Competition:</b> {report.snapshot.competitionScore}</p><p><b>Opportunity:</b> {report.snapshot.opportunityScore}</p><p><b>Confidence:</b> {report.confidenceLabel}</p><p><b>Verdict:</b> {report.verdict}</p><p className="text-xs text-slate-600">Estimated values only. Basis: {report.estimateBasis} Freshness: {report.dataFreshness}</p></div><section className="bg-white rounded-xl p-4 shadow"><h2 className="font-semibold mb-2">Top Listings (Mock)</h2><table className="w-full text-sm"><thead><tr className="text-left"><th>Title</th><th>Price</th><th>Favorites</th><th>Est. Sales 30d</th><th>Est. Revenue 30d</th></tr></thead><tbody>{report.listings.slice(0,10).map(l=><tr key={l.id}><td>{l.title}</td><td>${l.price}</td><td>{l.favoriteCount}</td><td>{l.estimatedSales30d} (est.)</td><td>${l.estimatedRevenue30d} (est.)</td></tr>)}</tbody></table></section></main>
}
