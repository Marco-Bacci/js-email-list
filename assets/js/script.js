const emails = document.getElementById(`emails`)

axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
  emails.innerText = resp.data.response
})