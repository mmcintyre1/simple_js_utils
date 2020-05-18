const fetch = require("node-fetch");

const base_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'

let id = '19393038'
let db = 'pubmed'

const data = { username: 'example' }
fetch(`${base_url}esummary.fcgi?db=${db}&id=${id}&retmode=json`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
