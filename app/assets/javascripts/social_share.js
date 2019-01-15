window.fbAsyncInit = function() {
    FB.init({
        appId            : '625907507847748',
        status           : true,
        cookie           : true,
        version          : 'v2.10'
    });
    
    $(document).on("click", ".fb-share-image", function(e){
      e.preventDefault();
      var image = $(this).siblings('img').attr('src');
      let url = $(this).data('url')
      FB.ui(
        {
            method: 'feed',
            link: $(location).attr('href')
        },
        function (response) {

        }
      );
    })
  };
 
  (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));