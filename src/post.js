class Post {
    constructor({title, content, mood, id, category}) {
      (this.title = title), (this.content = content), (this.mood = mood), (this.id = id), (this.category = category);
      this.div = document.createElement('div');
      this.div.className = 'post';
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
          category: this.category,
          user: "1",
          },
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
            this.id = data.id;
            this.div.setAttribute('id', `${this.id}`)
            // debugger;
          this.render();
        });
    }

  render() {
    const postContainer = document.getElementById("posts-container");
    const postContent = document.createElement("p");
    const postMood = document.createElement("P");
    const postCategory = document.createElement("P");
    const postH2 = document.createElement("h2");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", this.delete)
    postH2.innerText = `${this.title}`;
    postCategory.innerText = `${this.category}`;
    deleteBtn.id = `${this.id}`;
    postContent.innerText = `${this.content}`;
    postMood.innerText = `${this.mood}`;
    deleteBtn.innerText = "delete";
    
    // this.div.setAttribute('id', `${this.id}`

    postContainer.appendChild(this.div)
    this.div.appendChild(postH2);
    this.div.appendChild(postCategory);
    this.div.appendChild(postContent);
    this.div.appendChild(postMood);
    this.div.appendChild(deleteBtn);
    }

    delete() {
        // debugger;
      fetch(`${BACKEND_URL}/posts/${this.id}`, {
          method: "DELETE",
      })
      .then(r => r.json())
      .then(data => {
            document.getElementById(`${data}`).remove();
      })
    }


  }