export function GET() {
  return new Response('google-site-verification: google4f5bc93da710df11.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}
