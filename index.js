import { posts } from "./posts.js";

const oldagramPostsEl = document.getElementById("oldagram-posts");


for (let i = 0; i < posts.length; i++) {
    const post = `
        <section class="section-1">
            <div class="sub-container">
                <div class="post-header">
                <img class="avatar-icon" src=${posts[i].avatar} alt="post-creator-avatar">
                <div class="post-header-text">
                    <p><strong>${posts[i].name}</strong></p>
                    <p>${posts[i].location}</p>
                </div>
            </div>
            </div>
            <img class="post-img" src=${posts[i].post} alt="post-image">
        </section>

        <section class="section-2">
            <div class="sub-container">
                <div class="icons-below-post">
                    <img src="images/icon-heart.png" alt="likes-icon" onClick="addLikes()">
                    <img src="images/icon-comment.png" alt="comments-icon">
                    <img src="images/icon-dm.png" alt="send-message-icon">
                </div>
                <p><strong>${posts[i].likes} likes</strong></p>
                <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
            </div>
        </section>
    `;
    oldagramPostsEl.innerHTML += post;
};