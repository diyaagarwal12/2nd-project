var album=[
    "https://img.indiefolio.com/1200x630/filters:format(webp):fill(transparent)/project/thumb/e8b2284c0f5250aa840b1f8b06cbdbb9.png",
    "https://png.pngtree.com/png-clipart/20201129/ourlarge/pngtree-hand-drawn-cartoon-father-playing-with-children-on-fathers-day-png-image_2438598.jpg",
    "https://us.123rf.com/450wm/tigatelu/tigatelu1904/tigatelu190400006/120324611-vector-illustration-of-cartoon-girl-kissing-her-mother-s-cheek.jpg?ver=6",
    "https://wallpaper.dog/large/20486769.jpg",
    "https://thumbs.dreamstime.com/b/indian-woman-face-avatar-cartoon-indian-woman-face-braid-profile-picture-avatar-cartoon-character-portrait-vector-150829448.jpg",
    "https://media.istockphoto.com/vectors/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-vector-id980239992?k=20&m=980239992&s=612x612&w=0&h=xAzgjGwK4PPI3k6ZMnPT-I-_BYjeIGwwIf-OgTYMZoc=",
    "https://i.pinimg.com/564x/b1/d3/21/b1d3213442c8d2e10fad0e0b39aadaed.jpg",
    "https://wallpaper.dog/large/20486753.jpg",
    "https://ak.picdn.net/shutterstock/videos/15930100/thumb/1.jpg",
    "https://thumbs.dreamstime.com/b/d-funny-character-cartoon-sympathetic-looking-business-man-dear-person-suit-glasses-tie-47992346.jpg",
    "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg",
    "https://wallpaperaccess.com/full/4588325.jpg",
    "https://us.123rf.com/450wm/ankomando/ankomando1601/ankomando160100175/51337458-thumbs-up-baby.jpg?ver=6",
    
  ]


  
  var names=[
    "My Grandmother, USHA AGARWAL",
    "My Father,SUMIT AGARWAL",
    "My Mother,KHUSHBU AGARWAL",
    "My Sibling,GANESHA AGARWAL",
    "My Aunt,SHRUTI AGARWAL",
    "My Uncle,AMIT AGARWAL",
    "My Cousin1,RANNY AGARWAL",
    "My Cousin2,AYAAN AGARWAL",
    "My Aunt2,PAYAL AGARWAL",
    "My Uncle2,MANISH AGARWAL",
    "My Cousin3,BHUMI AGARWAL",
    "My Cousin4,VANSHIKA AGARWAL",
    "My Cousin5,SHIVAY AGARWAL",
   
  ]
  var updateImage=[album];
   var updateName=[name];
  var i=0;
  function nextslide(){
    document.getElementById("font").innerHTML=updateName [i];
    document.getElementById("image").src=updateImage[i];
    if(i==13)
      i=0;
      i++;   
  }