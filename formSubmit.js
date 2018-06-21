<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script>
(function($) {

    $.fn.enquiryFormSubmission = function(options ) {

         // Establish our default settings
        var settings = $.extend({
             name:'name',
             email:'email',
             message:'message',
             form:this,
             companyId:null
        }, options);

        this.find('input[type="submit"],button[type="submit"] ').click(function(event){
            event.preventDefault();
            console.log(settings);
            var formDataArray = $(settings.form).serialize();
            var dataSubmit = {
                  name :formDataArray[settings.name],
                  email :formDataArray[settings.email],
                  message :formDataArray[settings.message],
            };
            dataSubmit =JSON.parse(JSON.stringify(formDataArray));
            $.ajax({
                 type : 'POST',
                 url : 'http://127.0.0.1/anuragform.php',
                 data : dataSubmit
            });
        });
    }



}(jQuery));
</script>
<div class="container">
	<div class="row">

	<form  class="form-horizontal">
        <fieldset>

        <!-- Form Name -->
        <legend>Form Name</legend>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="name">Name</label>
          <div class="col-md-12">
          <input id="name" name="name" type="text" placeholder="Name" class="form-control input-md" value="anurag" required="">
          <span class="help-block">Name</span>
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="email">Email</label>
          <div class="col-md-12">
          <input id="email" name="email" type="text" placeholder="Email" class="form-control input-md"   value="anurag@zycus.com"  required="">
          <span class="help-block">Email</span>
          </div>
        </div>

        <!-- Textarea -->
        <div class="form-group">
          <label class="col-md-12 control-label" for="message">Message</label>
          <div class="col-md-12">
            <textarea class="form-control" id="message" name="message">Anurag Message</textarea>
          </div>
        </div>
        <!-- Button (Double) -->
        <div class="form-group">
          <label class="col-md-12 control-label" for="submit"></label>
          <div class="col-md-12">
            <button id="submit" name="submit" type="submit" class="btn btn-success">Submit</button>
            <button id="reset" name="reset" type="reset" class="btn btn-danger">Reset</button>
          </div>
        </div>

        </fieldset>
        </form>

	</div>
</div>
<script>
$( document ).ready(function() {
    $( 'form' ).enquiryFormSubmission({
        name:'name',
        email:'email',
        message:'message',
        companyId: 2500
    });
});
</script>
