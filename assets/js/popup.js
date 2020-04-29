$(document).ready(function(){  
      if(localStorage.getItem('popState') != 'shown'){
        $("#myModal").delay(5000).fadeIn();
        localStorage.setItem('popState','shown')
    }
   $('#myModal').modal('show');
    });