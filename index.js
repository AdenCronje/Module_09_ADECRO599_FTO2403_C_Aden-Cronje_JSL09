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
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`;
    document.getElementById("author").textContent = `By: Dodi Achmad`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {})
  .catch((err) => console.error(err));
