(function($) {

    $.fn.enquiryFormSubmission = function(options ) {

         // Establish our default settings
        var settings = $.extend({
             form:this,
             url:'http://127.0.0.1/anuragform.php',
             companyId:null,
             callback:null
        }, options);

        this.find('input[type="submit"],button[type="submit"] ').click(function(event){
            //event.preventDefault();
            var formDataArray =[];
            formDataArray = $(settings.form).serializeArray();
            formDataArray.push({name:"companyId",value:settings.companyId});

            $.ajax({
                 type : 'POST',
                 url : settings.url,
                 dataType : 'json',
                 data :  JSON.stringify(formDataArray)
            });
            if ($.isFunction(settings.callback) ){
              settings.callback.call();
            } else {
              settings.form.submit();
            }
        });
    }



}(jQuery));
