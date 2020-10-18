document.addEventListener("DOMContentLoaded", (e) => {
  fetch("http://localhost:3000/posts")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      data.forEach((post) => {
        const p = new Post (post)
        p.render();
      })
    });
});

BACKEND_URL = "http://localhost:3000"


addCreatePostListener();

function addCreatePostListener() {
  const postForm = document.getElementById("newPost");
  postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //debugger;
  const post = new Post({
      title: postForm.title.value,
      content: postForm.content.value,
      mood: postForm.mood.value,
      category: postForm.category.value
  });
    post.persist();  
  postForm.reset();
});
}