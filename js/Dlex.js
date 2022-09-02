$(document).ready(function() {
    var Dom = '<"tableTop"lf><"respoTable overflow-auto block w-full"rt><"tableBottom"ip>'
    $('.display').DataTable( {
        "dom": Dom,
        paging:  false,
        "lengthChange": false,
        "paging": false,
        "bInfo": false,
        searching: false, 
    } );
} );
$(document).ready(function() {
    $(".filterBtn").click(function () {
        $(".filterBtn").removeClass("active");
         
            $(this).addClass("active");   
        });
    });
    
$('#exampleModalCenter').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


function toggleClass(id) {
  var element = document.querySelector(id);
  element.classList.toggle("d-none");
}