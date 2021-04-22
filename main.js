async function getUriComponentDataInPage() {
  const elements = document.querySelectorAll('[data-uri]');
  
  return await Promise.all([...elements].map(async el => {
      let text;

      try {
          const res = await fetch('https://' + el.dataset.uri, { headers: { accept: 'application/json' }});
          const data = await res.json();

          return { el, data };

      } catch (e) {
          console.log('ERROR:', e);
          return { el, data: {} }
      }

  }));
}

{
  getUriComponentDataInPage()
    .then(results => console.log(results));
}
