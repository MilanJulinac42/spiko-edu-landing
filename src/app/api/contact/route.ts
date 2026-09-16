import { Resend } from 'resend'

/**
 * Kontakt/„Zakaži konsultacije" forma → email na spikoedu@gmail.com preko Resend-a.
 *
 * ENV (server-side, NIKAD NEXT_PUBLIC):
 *   RESEND_API_KEY   — obavezan, iz Resend dashboarda
 *   CONTACT_TO_EMAIL — odredište (default spikoedu@gmail.com)
 *   RESEND_FROM      — pošiljalac sa verifikovanog domena (default kontakt@spikoedu.rs)
 */
export const runtime = 'nodejs'

const TO = process.env.CONTACT_TO_EMAIL || 'spikoedu@gmail.com'
const FROM = process.env.RESEND_FROM || 'Spiko Edu Sajt <kontakt@spikoedu.rs>'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))

    // Honeypot — bot popuni skriveno polje → tiho „uspeh", bez slanja.
    if (body.botcheck) return Response.json({ success: true })

    const ime = String(body.ime || '').trim()
    const email = String(body.email || '').trim()
    const telefon = String(body.telefon || '').trim()
    const jezik = String(body.jezik || '').trim()
    const poruka = String(body.poruka || '').trim()

    if (!ime || !email) {
      return Response.json({ success: false, error: 'Ime i email su obavezni.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY nije postavljen')
      return Response.json({ success: false, error: 'Email nije konfigurisan.' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const rows = [
      ['Ime i prezime', ime],
      ['Email', email],
      telefon && ['Telefon', telefon],
      jezik && ['Jezik', jezik],
    ].filter(Boolean) as [string, string][]

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1a2738;max-width:560px">
        <h2 style="margin:0 0 4px">Nova prijava sa sajta</h2>
        <p style="margin:0 0 16px;color:#667">spikoedu.rs — Zakaži besplatne konsultacije</p>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#667;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`,
            )
            .join('')}
        </table>
        ${
          poruka
            ? `<div style="margin-top:16px"><div style="color:#667;margin-bottom:4px">Poruka</div><div style="white-space:pre-wrap;padding:12px;background:#f7f8f5;border-radius:8px">${esc(poruka)}</div></div>`
            : ''
        }
        <p style="margin-top:20px;color:#889;font-size:13px">Odgovori direktno na ovaj mejl da odgovoriš polazniku.</p>
      </div>`

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email, // odgovor ide direktno polazniku
      subject: `Nova prijava sa sajta — ${ime}`,
      html,
    })

    if (error) {
      console.error('[contact] resend error', error)
      return Response.json({ success: false, error: 'Slanje nije uspelo.' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (e) {
    console.error('[contact] greška', e)
    return Response.json({ success: false, error: 'Greška servera.' }, { status: 500 })
  }
}
