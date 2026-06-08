import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const { threatId } = await request.json();
  const supabase = await createClient();

  // 1. Dauko bayanan barazanar daga database
  const { data: threat, error } = await supabase
    .from('threat_intelligence')
    .select('*')
    .eq('id', threatId)
    .single();

  if (error || !threat) return NextResponse.json({ error: 'Threat not found' }, { status: 404 });

  // 2. Nan za mu haɗa da AI (OpenAI/Anthropic)
  // A nan gaba za mu sa prompt din da zai ba da "Mitigation Plan"
  const mitigationPlan = `AI recommended action for ${threat.threat_type}: Implement rate limiting and block source IP ${threat.source}.`;

  return NextResponse.json({ 
    threat: threat.threat_type,
    recommendation: mitigationPlan 
  });
}
