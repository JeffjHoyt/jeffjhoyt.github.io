const createPost = (id, content, createdAt, score, user) => 
   `<br>
    <li class="individual-posts" data-post-id=${id}>
        <div class="individual-posts-display">
            <div class="likes">
                <div class="likesBar-section">
                    <div class="likesBarUp">

                    </div>
                    <div class="likesBarScore">

                    </div>
                    <div class="likesBarDown">

                    </div>
                </div>
            </div>
            <div class="top-post">

            </div>
            <div class="bottom-post">

            </div>
        </div>
    </li>
   `;

   const previousQuotes = () =>
   `
   <li
   `