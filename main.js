async function getUriComponentDataInPage() {
  const elements = document.querySelectorAll('[data-uri]');
  
  for (const el of elements) {
    console.log(el);
    console.log(el.dataset);
  }
}

{
  getUriComponentDataInPage();
}
