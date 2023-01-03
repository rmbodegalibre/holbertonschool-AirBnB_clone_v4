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
});
