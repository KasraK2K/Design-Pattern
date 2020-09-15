// we can change fetch method because we used facade pattern

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", { userId });
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    })
  })
})

// function getFetch(url, params = {}) {
//   const queryString = Object.entries(params).map(param => {
//     return `${param[0]}=${param[1]}`
//   }).join("&");
//   return fetch(`${url}?${queryString}`, {
//     method: "GET",
//     header: { "Content-Type": "application/json" }
//   }).then(res => res.json());
// }

function getFetch(url, params = {}) {
  return axios({
    url,
    method: "GET",
    params
  }).then(res => res.data);
}