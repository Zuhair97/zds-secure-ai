import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { threatId } = await req.json();
    const supabase = createClient();

    // 1. Fetch threat data
    const { data: threat, error } = await supabase
      .from('threat_intelligence')
      .select('*')
      .eq('id', threatId)
      .single();

    if (error || !threat) {
      return NextResponse.json({ error: 'Threat not found' }, { status: 404 });
    }

    // 2. Anan za mu saka logic na AI (Mock response for now)
    const analysis = `AI Analysis for ${threat.threat_type}: This appears to be a ${threat.severity} level threat. Immediate action recommended.`;

    return NextResponse.json({ recommendation: analysis });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
