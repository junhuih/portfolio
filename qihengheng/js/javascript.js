function toggleLike() {
    var like = document.getElementById("like");
    like.src = "../images/like-after.jpeg";
    var like_count = document.getElementById("like_count");
    like_count.textContent = (parseInt(like_count.innerHTML) + 1);
}