import https from 'https';

const query = encodeURIComponent("school student classroom book");
const url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=" + query + "&gsrnamespace=6&gsrlimit=40&prop=imageinfo&iiprop=url&format=json";

https.get(url, { headers: { 'User-Agent': 'NodeBot/1.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const json = JSON.parse(d);
    const pages = json.query.pages;
    let urls = Object.values(pages).map(p => p.imageinfo[0].url).filter(u => u.toLowerCase().endsWith('.jpg'));
    console.log(JSON.stringify(urls));
  });
});
