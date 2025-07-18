const emails = document.getElementById(`emails`)
const email10 = []
for (let i=0; i<10; i++){
axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
  email10.push(resp.data.response)
  emails.innerHTML += `<ul><li>${email10[i]}</li></ul>`
})
}