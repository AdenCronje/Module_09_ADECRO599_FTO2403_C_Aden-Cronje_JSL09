fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japanese-car"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById(
      "author name"
    ).textContent = `By: ${data.user.name}`;
  });
