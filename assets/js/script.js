const emails = document.getElementById(`emails`);
const array = []

for (let i = 0; i < 10; i++) {
  axios
    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((resp) => {
      const email = resp.data.response;
      emails.innerHTML += `<li>${email}</li>`;
      array.push(email)
    });
}
console.log(array)