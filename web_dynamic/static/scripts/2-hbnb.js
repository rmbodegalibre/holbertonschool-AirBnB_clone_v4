$(document).ready(function () {
  const nameAmeinty = [];
  const idAmeinty = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      nameAmeinty.push($(this).attr('data-name'));
      idAmeinty.push($(this).attr('data-id'));
    } else {
      const nameIndex = nameAmeinty.indexOf($(this).attr('data-name'));
      const idIndex = idAmeinty.indexOf($(this).attr('data-id'));
      nameAmeinty.splice(nameIndex, 1);
      idAmeinty.splice(idIndex, 1);
    }
    $('.amenities h4').text(nameAmeinty.join(', '));
  });
  $(function () {
    $.get('http://localhost:5001/api/v1/status/', function (data, response) {
      if (response === 200 || data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  })
});
