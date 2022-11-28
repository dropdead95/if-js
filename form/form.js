// const form = document.getElementById('form');
const inputFile = document.querySelector('input[type="file"]');
const divEl = document.createElement('div');
const imgEl = document.createElement('img');
// const url = 'https://fe-student-api.herokuapp.com/api/file';

imgEl.setAttribute('src', '');
imgEl.setAttribute('alt', '');

document.body.appendChild(divEl);
divEl.classList.add('block');
imgEl.classList.add('image');
divEl.innerHTML = 'Add image';

divEl.addEventListener('click', () => {
  inputFile.click();
  divEl.innerHTML = '';
  divEl.append(imgEl);
});

inputFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    imgEl.setAttribute('src', e.target.result);
    imgEl.setAttribute('alt', file.name);
  });
  reader.readAsDataURL(file);
});
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//
//   const options = {
//     method: 'POST',
//     body: new FormData(form),
//   };
//
//   const res = await fetch(url, options)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//
//       return response.json();
//     })
//     .then((result) => result)
//     .catch((error) => console.log(error.message));
//   console.log(res);
// });
