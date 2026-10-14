import { NextResponse } from 'next/server';

// Lead delivery endpoint.
// Configure LEAD_WEBHOOK_URL (e.g. a CRM, Zapier/Make webhook, or your own database service)
// in the deployment environment. If it is missing, the endpoint refuses to pretend success.
export async function POST(request: Request) {
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json({ ok: false, error: 'Lead destination not configured' }, { status: 503 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.consent) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 422 });
  }

  try {
    const upstream = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: 'Upstream rejected' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Delivery failed' }, { status: 502 });
  }
}