$(document).ready(function(){
  $("#searchBtn").on('click',  foo => {
    event.preventDefault();
    // console.log("Submit");

    if($("#searchBtn").attr("disabled") === "disabled"){
      console.log("Search button is disabled");
    }
    else{
      $('#cardsContainer').empty();
      $('.errorAlert').css('display', 'none')
      api.requestNutritions()
    }
  });

  $(document).on('submit', "#searchForm",  foo => {
    event.preventDefault();
    console.log("Submit");

    if($("#searchBtn").attr("disabled") === "disabled"){
      console.log("Search button is disabled");
    }
    else{
      $('#cardsContainer').empty();
      $('.errorAlert').css('display', 'none')
      api.requestNutritions()
    }
  });

  $('li a').on('click', function(){
    $(this).addClass('active')
  })
}
