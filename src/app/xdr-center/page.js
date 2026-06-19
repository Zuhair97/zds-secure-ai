import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function XDRCenter() {

  const { data: risks } =
    await supabase.from("risk_engine").select("*");

  const { data: threats } =
    await supabase.from("threat_intelligence").select("*");

  const { data: predictions } =
    await supabase.from("predictive_defense").select("*");

  const { data: soc } =
    await supabase.from("ai_soc_events").select("*");

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        ZDS Secure AI XDR Center
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div className="border rounded p-4">
          <h2 className="font-bold">Risk Events</h2>
          <p>{risks?.length || 0}</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-bold">Threat Intel</h2>
          <p>{threats?.length || 0}</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-bold">Predictions</h2>
          <p>{predictions?.length || 0}</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-bold">SOC Events</h2>
          <p>{soc?.length || 0}</p>
        </div>

      </div>

    </div>
  );
}
