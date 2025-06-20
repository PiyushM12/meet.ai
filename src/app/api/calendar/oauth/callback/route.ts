import { google } from 'googleapis';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  if (!code) return NextResponse.redirect('/meetings?error=auth');

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REDIRECT_URI!
  );

  const { tokens } = await oauth2Client.getToken(code);

  // Store access token securely (in real apps, store in DB)
  (await
        // Store access token securely (in real apps, store in DB)
        cookies()).set('gcal_token', tokens.access_token!, {
    httpOnly: true,
    secure: true,
    path: '/',
  });

  return NextResponse.redirect('/meetings?status=connected');
};
