/**
 * Converte um link comum do Spotify (compartilhamento) em uma URL
 * de embed válida, para tocar direto dentro da página.
 *
 * Aceita: track, playlist, album, artist, episode, show.
 * Retorna null se a URL não for reconhecida.
 */
export function toSpotifyEmbedUrl(rawUrl: string): string | null {
  if (!rawUrl) return null;

  try {
    const url = new URL(rawUrl.trim());
    if (!url.hostname.includes("spotify.com")) return null;

    // já é um link de embed
    if (url.pathname.startsWith("/embed/")) {
      return `https://open.spotify.com${url.pathname}${url.search ? url.search + "&" : "?"}theme=0`;
    }

    // formato normal: /track/{id}, /playlist/{id}, /album/{id}...
    const match = url.pathname.match(
      /\/(track|playlist|album|artist|episode|show)\/([a-zA-Z0-9]+)/
    );
    if (!match) return null;

    const [, type, id] = match;
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
  } catch {
    return null;
  }
}
