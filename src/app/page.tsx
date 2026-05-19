import Link from "next/link";
import { getDashboardData } from "@/lib/services/research-services";

export default async function Home(){
  const cards = await getDashboardData();
  return <main className="p-8 space-y-6"><h1 className="text-3xl font-bold">Etsy Market Research Intelligence</h1><p className="text-sm text-slate-600">All sales/revenue values are estimates with confidence labels.</p><div className="grid md:grid-cols-3 gap-4">{cards.map((c:any)=><article key={c.snapshot.id} className="bg-white rounded-xl p-4 shadow"><h2 className="font-semibold">{c.snapshot.keywordId}</h2><p>Opportunity: {Math.round(c.snapshot.opportunityScore)} / 100</p><p>Verdict: <span className="font-medium">{c.verdict}</span></p><Link className="text-blue-600" href={`/keyword-explorer?keyword=${encodeURIComponent(c.snapshot.keywordId)}`}>Open keyword report</Link></article>)}</div><Link href="/keyword-explorer" className="text-blue-700">Go to Keyword Explorer →</Link></main>
}
