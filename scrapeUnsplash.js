import https from 'https';

https.get('https://unsplash.com/s/photos/school-student', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Unsplash injects next.js state or similar JSON. We'll find all "id":"..." patterns.
    const regex = /"id":"([a-zA-Z0-9_-]{11})"/g;
    const matches = [...d.matchAll(regex)].map(m => m[1]);
    const uniqueIds = [...new Set(matches)];
    console.log("FOUND IDs:", uniqueIds.length);
    console.log(JSON.stringify(uniqueIds.slice(0, 45)));
  });
});
