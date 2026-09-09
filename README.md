# uma carta enfeitiçada — feliz aniversário, Ana Júlia 🕯️

Site mágico e romântico, com clima de pergaminho, velas e céu estrelado.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o link que aparecer no terminal (geralmente `http://localhost:5173`).

Para gerar a versão final (pasta `dist/`, pronta para hospedar em Vercel, Netlify, etc.):

```bash
npm run build
```

## O que editar (você só precisa mexer em 1 arquivo principal)

Tudo o que muda com frequência está em **`src/data/content.ts`**:

- `nomeDestinataria` — nome que aparece no topo e na carta
- `assinatura` — frase final, no rodapé e no fim da carta
- `cartaParagrafos` — o texto da carta, parágrafo por parágrafo
- `spotifyUrl` — link de playlist/faixa/álbum do Spotify (o site converte pra embed sozinho)
- `memorias` — a galeria de fotos/vídeos: `src` (caminho da imagem), `legenda` e `data` de cada quadro

### Trocando as fotos da galeria

1. Salve suas imagens em `src/assets/gallery/` (crie a pasta).
2. No topo de `src/data/content.ts`, importe cada imagem:
   ```ts
   import fotoPilastra from "@/assets/gallery/pilastra.jpg";
   ```
3. Use a variável importada no campo `src` do item correspondente em `memorias`.
4. Para vídeos, use `type: "video"` e um arquivo `.mp4` ou `.webm`.

### Trocando a música

Basta colar o link de "Compartilhar → Copiar link" do Spotify (faixa, álbum ou playlist) em `spotifyUrl`. A pessoa que visitar o site também pode colar outro link diretamente no campo da seção "poção musical" e trocar a música na hora — o disco gira enquanto toca e para quando pausa.

## Estrutura

```
src/
  App.tsx                 # junta todas as seções na ordem
  main.tsx                # ponto de entrada
  index.css               # tema (cores, fontes) e animações
  data/content.ts         # <-- edite aqui
  lib/spotify.ts          # conversor de link do Spotify pra embed
  components/
    Hero.tsx               # abertura com nome em destaque
    CartaEnfeiticada.tsx    # envelope com selo -> carta que se abre
    PocaoMusical.tsx        # player/disco do Spotify
    GaleriaMemorias.tsx     # galeria de fotos/vídeos em molduras
    Rodape.tsx               # assinatura final
    CeuEstrelado.tsx         # fundo de estrelas (decorativo)
    Vela.tsx                 # vela SVG animada
    PoeiraMagica.tsx         # partículas douradas subindo
```

Nenhum texto, imagem ou música protegida de terceiros é incluída diretamente — o
visual usa apenas formas, cores e fontes livres inspiradas no clima de contos de
magia (pergaminho, selo de cera, velas, céu estrelado), e a trilha sonora é
escolhida pelo próprio usuário via link do Spotify.
