import https from 'https';

async function fetchIds() {
  const getIds = (query, page) => new Promise((resolve) => {
    const opts = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } };
    https.get('https://unsplash.com/napi/search/photos?query=' + query + '&per_page=30&page=' + page, opts, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results.map(r => r.id));
        } catch(e) { resolve([]); }
      });
    });
  });

  const ids1 = await getIds('classroom', 1);
  const ids2 = await getIds('study books', 1);
  
  const allIds = [...new Set([...ids1, ...ids2])].slice(0, 40);
  console.log(JSON.stringify(allIds));
}
fetchIds();
