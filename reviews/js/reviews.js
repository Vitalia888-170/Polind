async function getComments() {
   let response = await fetch("https://jsonplaceholder.typicode.com/comments");
   let data = await response.json();
   let severalComment = data.slice(0, 30);
   severalComment.forEach(item => {
      createComment(item);
   });
}
getComments();

function createComment(comment) {
   let container = document.querySelector(".comments-container");
   let commentBlock = document.createElement("div");
   commentBlock.className = "comment-card";
   let name = document.createElement("h4");
   name.textContent = `${comment.name}`;
   let email = document.createElement("p");
   email.className = "email";
   email.textContent = `${comment.email}`;
   let body = document.createElement("p");
   body.className = "comment-body";
   body.textContent = `${comment.body}`;
   commentBlock.append(name);
   commentBlock.append(email);
   commentBlock.append(body);
   container.append(commentBlock);
}

