const repoDiv = document.querySelector("#repoDiv");
const gitRepoBtn = document.querySelector("#gitRepoBtn");
const gitAvatar = document.querySelector("#gitAvatar");
class Request {
  async getRequest(source) {
    let promise = await fetch(source);
    let data = await promise.json();
    return data;
  }
}
const req = new Request();
req
  .getRequest("https://api.github.com/users/salihbstg")
  .then((result) => {
    gitAvatar.setAttribute("src", result.avatar_url);
    gitRepoBtn.textContent = "Repo: " + result.public_repos;
  })
  .catch((err) => {
    console.log(err);
  });
req.getRequest("https://api.github.com/users/salihbstg/repos").then(result=>{
  result.forEach(element => {
    repoDiv.innerHTML+=`<div class="col-lg-3"><a href="${element.html_url}" target="_blank">${element.name}</a></div>`
  });
})
.catch(err=>{
  console.log(err);
});
