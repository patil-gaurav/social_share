
$(document).on("click", ".post-detail", function(event) {
    $.ajax({
        url: $(this).data('url'),
        method: 'GET',
        data: {},
        success: function(data){
            $("#modal_container").html(data)
            $("#postDetail").modal()
            updatePageInformation()
        },
        error: function(error){
            $("#bet_errors").empty();
            $.each(error.responseJSON.stake_amount, function(index, value) {
                $("#bet_errors").append('<p> Stake amount '+ value +'</p>');
            })
        }
    });
})

function setMetaTags() {

}

function updatePageInformation() {
  let pageInfo = $("#post_detail_info").data('post-info')
  let host = window.location.host
  let webHost = "https://boiling-fortress-75740.herokuapp.com"
  if (pageInfo != undefined && pageInfo != '') {
    $("meta[property='og\\:url']").attr("content", webHost + "/posts/" + pageInfo['id']);
    $("meta[property='og\\:type']").attr("content", 'post');
    $("meta[property='og\\:title']").attr("content", pageInfo['content'].substring(0, 30));
    $("meta[property='og\\:description']").attr("content", pageInfo['content']);
    $("meta[property='og\\:image']").attr("content", webHost + pageInfo['image']['url']);
    $("meta[property='og\\:site_name']").attr("content", 'HowDoo');
  }
}