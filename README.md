# Snaptik
Simple Downloader Vidio From Tiktok

## How To Run Script
* Download node js on termux or windows/linux
* Download Git
* Clone this repository
* npm install
* npm start

## How To Use Library
``` js 
const Snaptik = require('snaptik');

const snaptik = new Snaptik("https://vt.tiktok.com/ZSNXR8jka/");
snaptik.download().then(vidio => {
    console.log(vidio)
}).catch(error => {
    console.error('Error:', error);
});

```
## The Result Valid

``` js 
{
  status: 200,
  link_1: 'https://cdn.snaptik.app/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2FwaTE2LW5vcm1hbC1jLXVzZWFzdDFhLnRpa3Rva3YuY29tL2F3ZW1lL3YxL3BsYXkvP3ZpZGVvX2lkPXYwOTA0NGc0MDAwMGNrcmZ0aDdvZzY1bmQ2N3RxaG0wJmxpbmU9MCZpc19wbGF5X3VybD0xJnNvdXJjZT1QYWNrU291cmNlRW51bV9BV0VNRV9ERVRBSUwmZmlsZV9pZD05ODZlMTAwNGU5NDM0NWMxYWQ1ZmY0ZDliMDdhNzk4YSZpdGVtX2lkPTcyOTMyOTY5NzYwMDE1NTE2MjImc2lnbnYzPWRtbGtaVzlmYVdRN1ptbHNaVjlwWkR0cGRHVnRYMmxrTGprME5HWXpZVFkxTWpZMVpXWmpOV1l6WldZMk1HWXpNV1F3WldNM1l6WTAiLCJmaWxlbmFtZSI6IlNuYXB0aWsuYXBwXzcyOTMyOTY5NzYwMDE1NTE2MjIubXA0IiwiZXhwIjoxNzAxODczOTAwfQ.gE6K1gmH8wDf4hkYrfLZZ2UF1aJph4uRjmtglXcZlPo&dl=1',
  link_2: 'https://cdn.snaptik.app/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2FwaTE2LW5vcm1hbC1jLXVzZWFzdDFhLnRpa3Rva3YuY29tL2F3ZW1lL3YxL3BsYXkvP3ZpZGVvX2lkPXYwOTA0NGc0MDAwMGNrcmZ0aDdvZzY1bmQ2N3RxaG0wJmxpbmU9MCZpc19wbGF5X3VybD0xJnNvdXJjZT1QYWNrU291cmNlRW51bV9BV0VNRV9ERVRBSUwmZmlsZV9pZD05ODZlMTAwNGU5NDM0NWMxYWQ1ZmY0ZDliMDdhNzk4YSZpdGVtX2lkPTcyOTMyOTY5NzYwMDE1NTE2MjImc2lnbnYzPWRtbGtaVzlmYVdRN1ptbHNaVjlwWkR0cGRHVnRYMmxrTGprME5HWXpZVFkxTWpZMVpXWmpOV1l6WldZMk1HWXpNV1F3WldNM1l6WTAiLCJmaWxlbmFtZSI6IlNuYXB0aWsuYXBwXzcyOTMyOTY5NzYwMDE1NTE2MjIubXA0IiwiZXhwIjoxNzAxODczOTAwfQ.gE6K1gmH8wDf4hkYrfLZZ2UF1aJph4uRjmtglXcZlPo&dl=1',
  link_3: 'https://d.rapidcdn.app/d?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2FwaTE2LW5vcm1hbC1jLXVzZWFzdDFhLnRpa3Rva3YuY29tL2F3ZW1lL3YxL3BsYXkvP3ZpZGVvX2lkPXYwOTA0NGc0MDAwMGNrcmZ0aDdvZzY1bmQ2N3RxaG0wJmxpbmU9MCZpc19wbGF5X3VybD0xJnNvdXJjZT1QYWNrU291cmNlRW51bV9BV0VNRV9ERVRBSUwmZmlsZV9pZD05ODZlMTAwNGU5NDM0NWMxYWQ1ZmY0ZDliMDdhNzk4YSZpdGVtX2lkPTcyOTMyOTY5NzYwMDE1NTE2MjImc2lnbnYzPWRtbGtaVzlmYVdRN1ptbHNaVjlwWkR0cGRHVnRYMmxrTGprME5HWXpZVFkxTWpZMVpXWmpOV1l6WldZMk1HWXpNV1F3WldNM1l6WTAiLCJmaWxlbmFtZSI6IlNuYXB0aWsuYXBwXzcyOTMyOTY5NzYwMDE1NTE2MjIubXA0IiwiaGVhZGVycyI6eyJ1c2VyLWFnZW50IjoiVGVsZWdyYW1Cb3QgKGxpa2UgVHdpdHRlckJvdCkifX0.2qjfmclIUBB6MwMrnOjngVv1vGm5mleiYEnosVQQUqk&dl=1',
  metadata: {
    version: '1.0',
    type: 'video',
    title: 'sleep call janai  #freya #freyajkt48 #fansarea48 #jkt48newera #bang_do😁 #fyp ',
    author_url: 'https://www.tiktok.com/@bang_dooo1',
    author_name: 'ѵαℓ∂σ |𝐅',
    width: '100%',
    height: '100%',
    html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bang_dooo1/video/7293296976001551622" data-video-id="7293296976001551622" data-embed-from="oembed" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@bang_dooo1" href="https://www.tiktok.com/@bang_dooo1?refer=embed">@bang_dooo1</a> <p>sleep call janai  <a title="freya" target="_blank" href="https://www.tiktok.com/tag/freya?refer=embed">#freya</a> <a title="freyajkt48" target="_blank" href="https://www.tiktok.com/tag/freyajkt48?refer=embed">#freyajkt48</a> <a title="fansarea48" target="_blank" href="https://www.tiktok.com/tag/fansarea48?refer=embed">#fansarea48</a> <a title="jkt48newera" target="_blank" href="https://www.tiktok.com/tag/jkt48newera?refer=embed">#jkt48newera</a> <a title="bang_do😁" target="_blank" href="https://www.tiktok.com/tag/bang_do%F0%9F%98%81?refer=embed">#bang_do😁</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> </p> <a target="_blank" title="♬ DJ MASHUP INDIA X GUE MAH GITU BY NOPAL FVNKY - Dimas Sopan`🌀" href="https://www.tiktok.com/music/DJ-MASHUP-INDIA-X-GUE-MAH-GITU-BY-NOPAL-FVNKY-7290419369153727238?refer=embed">♬ DJ MASHUP INDIA X GUE MAH GITU BY NOPAL FVNKY - Dimas Sopan`🌀</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    thumbnail_width: 576,
    thumbnail_height: 1022,
    thumbnail_url: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oIHefL2jAv6GnGdjQYfFJpXeZlIR2UUkABEtIj?x-expires=1702040400&x-signature=0GYB3%2F8M5hEnZw%2BOACCJKkl%2BTHc%3D',
    provider_url: 'https://www.tiktok.com',
    provider_name: 'TikTok',
    author_unique_id: 'bang_dooo1',
    embed_product_id: '7293296976001551622',
    embed_type: 'video'
  }
}
```

## The Result Error

``` js 
{ status: 500, message: 'Unknwon link or vidio private.' }

```
