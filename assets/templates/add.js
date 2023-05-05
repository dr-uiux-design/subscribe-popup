  function AjaxFormRequest(result_id,form_id,url) {
                jQuery.ajax({
                    url:     url, //Адрес подгружаемой страницы
                    type:     "POST", //Тип запроса
                    dataType: "html", //Тип данных
                    data: jQuery("#"+form_id).serialize(), 
                    success: function(response) { //Если все нормально
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) { //Если ошибка
                document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
                }
             });
}

//label_filter        
$(document).ready(function() {

    $(".cart-item__select").on('change', 'select', function() {
      var sortBy = $("#country").val();
      // do whatever with the value
      //console.log(sortBy);
      $('.ch_hide').hide();
      $('#co_'+sortBy+'_1').show();
      $('#co_'+sortBy+'_2').show();
      $('#co_'+sortBy+'_3').show();
    });    

    $('.label_filter_main').on('click', function(){
        var id = $(this).data('id');
        $('#'+id+'_div input').prop('checked', false);
        $('#'+id+'_div #'+id+'_l').prop('checked', true);
    });
    $('.label_filter').on('click', function(){
        var id = $(this).data('id');
        //$('#'+id+'_div input').prop('checked', false);
        $('#'+id+'_div #'+id+'_l').prop('checked', false);
    });
    //card-bottom__text
    
    
    $('#clo').on('click', function(){
        $('#pre-order').hide();
    });
    $('[name="delivery"]').change(function() {

        var name = $(this).data('name');
        var price = $(this).data('price');
        var va = $(this).data('va');
        var value = $(this).data('value');

        var priceall = $(this).data('priceall');
        $('#gr').html(name);
        $('#delivery_cost').val(price);
        $('#delivery').val(value);
        $('#delivery_to_report').val(va);

        $('#grw').html(price+' £');
        $('#priceall').html(priceall+' £');
    });


});

function close(){
    $('#pre-order').hide();
    console.log('11');
}