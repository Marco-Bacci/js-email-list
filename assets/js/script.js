const emails = document.getElementById(`emails`);

// creo funzione che mi svolge fetch di 10 emails
const getEmailList = () => {
  for (let i = 0; i < 10; i++) {
    axios
      .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
      .then((resp) => {
        const email = resp.data.response;
        emails.innerHTML += `<li>${email}</li>`;
        
      });
  }
};

getEmailList();

// richiamo il refresh button dal dom
const refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {
  emails.innerHTML = '';
  getEmailList()
  
});
