async function getUriComponentDataInPage() {
  const elements = document.querySelectorAll('[data-uri]');
  
  for (const el of elements) {
    console.log(el.dataset.dataUri);
  }
}

{
  getUriComponentDataInPage();
}
