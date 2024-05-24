export default function Cache() {
    return (
        <h1>SSR: Server Side Rendering</h1>
    )
  }
  
  export async function getServerData() {
    return {
      headers: {
        'Cache-Control': 'public, max-age=31536000, s-maxage=60, stale-while-revalidate=240, immutable',
      }
    }
  }