window.onload = function() {



    fetch("https://api.jsonbin.io/v3/b/635d7af565b57a31e6a66df8")  //"res/json/posts.json" - et lugeda lokaalsest failist;  "https://api.jsonbin.io/v3/b/635d7af565b57a31e6a66df8" - et lugeda internetist
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            // pane tähele kui saad jsoni nettist siis tuleb lisada .record et saada objektide listi muidu lihtsalt json.
            LoadPages(json.record);

        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })

}



function LoadPages(json) {
    for (let object of json) {

        // creating needed elements for the post
        let post = document.createElement("article")
        let header = document.createElement("div")
        let profile_picture = document.createElement("img")
        profile_picture.src = "res/images/me.png"
        profile_picture.alt = "profiil"
        let date = document.createElement("p")
        let likebutton = document.createElement("img")
        likebutton.src = "res/images/like_button.jpg"
        likebutton.alt = "like button"
        let body = document.createElement("p")

        // setting classes
        profile_picture.className = "icon"
        post.className = "post"
        header.className = "post_header"
        profile_picture.className = "icon"
        likebutton.className = "icon"


        //building post
        header.append(profile_picture, date)
        body.innerHTML = object.body
        post.append(header, body, likebutton)

        // if post contains image add that too
        if(object.image != null){
            let image = document.createElement("img")
            image.src = object.image;
            image.alt = "pilt"

            image.style.maxWidth = "60%";

            header.after(image)
        }


        //append post to page
        let main = document.getElementsByTagName("main")[0];
        //console.log(main)
        main.appendChild(post);
    }
}