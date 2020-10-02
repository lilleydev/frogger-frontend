console.log("hello");

document.addEventListener("DOMContentLoaded", (e) => {
  fetch("http://localhost:3000/posts")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      data.forEach((post) => renderPost(post));
    });
});

function renderPost(post) {
  const postContainer = document.getElementById("posts-container");
  const postEl = document.createElement("p");
  const postP = document.createElement("P");
  const postH2 = document.createElement("h2");

  postH2.innerText = `${post.title}`;
  postH2.id = `${post.id}`;
  postEl.innerText = `${post.content}`;
  postP.innerText = `${post.mood}`;
  postContainer.appendChild(postH2);
  postContainer.appendChild(postEl);
  postContainer.appendChild(postP);
}
