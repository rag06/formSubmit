(function($) {

    $.fn.enquiryFormSubmission = function(options ) {

         // Establish our default settings
        var settings = $.extend({
             keys:['name','email','message'],
             form:this,
             url:'http://127.0.0.1/anuragform.php',
             companyId:null
        }, options);

        this.find('input[type="submit"],button[type="submit"] ').click(function(event){
            event.preventDefault();
            var formDataArray =[];
            formDataArray = $(settings.form).serializeArray();
            console.log(formDataArray);
            formDataArray.push({name:"keys",value:settings.keys});
            formDataArray.push({name:"companyId",value:settings.companyId});

            $.ajax({
                 type : 'POST',
                 url : settings.url,
                 dataType : 'json',
                 data :  JSON.stringify(formDataArray)
            });
        });
    }



}(jQuery));
