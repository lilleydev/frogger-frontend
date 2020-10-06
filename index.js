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
  const deleteBtn = document.createElement("button");

  postH2.innerText = `${post.title}`;
  postH2.id = `${post.id}`;
  postEl.innerText = `${post.content}`;
  postP.innerText = `${post.mood}`;
  deleteBtn.innerText = "delete";
  postContainer.appendChild(postH2);
  postContainer.appendChild(postEl);
  postContainer.appendChild(postP);
  postContainer.appendChild(deleteBtn);
}

class Post {
  constructor({ attributes: { title, content, mood } }) {
    (this.title = title), (this.content = content), (this.mood = mood);
  }

  persist() {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: {
          title: this.title,
          content: this.content,
          mood: this.mood,
          user: "1",
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        renderPost(data);
      });
  }

  // destroyPost() {
  //   fetch(`http://localhost:3000/posts/${post.id}`, {
  //     method: "DELETE",

  //     }).then(() => console.log(delete),

  // }
}

function submitPost(post) {
  post.persist();
}

const postForm = document.getElementById("newPost");
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // debugger;
  const post = new Post({
    attributes: {
      title: postForm.title.value,
      content: postForm.content.value,
      mood: postForm.mood.value,
    },
  });
  debugger;
  submitPost(post);
  postForm.reset();
});

// delete button
//edit button
