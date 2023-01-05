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

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $('SECTION.places').append(data.map(place => {
        return `  <div class="title_box">
                  <h2>${place.name}</h2>
                  <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                  <div class="max_guest">${place.max_guest} Guests</div>
                  <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                </div>
                <div class="description">
                  ${place.description}
                </div>`
      }));
    }
  });
});
