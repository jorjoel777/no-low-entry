             if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
              }

              function successFunction(position) {
                  const lat = position.coords.latitude;
                  const lng = position.coords.longitude;
                  codeLatLng(lat, lng);
              }

              function errorFunction() {
                  console.log('Geocoder failed');
              }

              const geocoder = new google.maps.Geocoder();

              function codeLatLng(lat, lng) {
                  const latlng = new google.maps.LatLng(lat, lng);

                  geocoder.geocode({ latLng: latlng }, function (results, status) {
                      if (status === google.maps.GeocoderStatus.OK) {
                          console.log(results);
                          if (results[1]) {
                              let city = null;

                              // Find the city name
                              for (let i = 0; i < results[0].address_components.length; i++) {
                                  for (let b = 0; b < results[0].address_components[i].types.length; b++) {
                                      if (results[0].address_components[i].types[b] === "administrative_area_level_1") {
                                          city = results[0].address_components[i];
                                          break;
                                      }
                                  }
                                  if (city) {
                                      break;
                                  }
                              }
                              //alert(city.long_name);

                              if (city) {
                                  const city_long = city.long_name;
                                  console.log(city_long);
                                  if (
                                      city_long.includes("Andalucía") ||
                                      city_long.includes("Andalusia") ||
                                      city_long.includes("Andalucia") ||
                                      city_long.includes("Castilla la Mancha") ||
                                      city_long.includes("Castilla-La Mancha") ||
                                      city_long.includes("Castile-La Mancha") ||
                                      city_long.includes("Extremadura")
                                  ) {

                                      window.pagesense = window.pagesense || [];
                                      window.pagesense.push(["trackEvent", "low_entry"]);
                                      console.log('low entry');
                                  } else {
       
                                     var newdiv1 = "<style>.modal_ayuda { z-index: 99999;background-color: rgba(0, 0, 0, .63); display: none; position: absolute; top: 0%; bottom: 0%; left: 0%; right: 0%; } .container_ayuda { width: 480px; height: 404px; background-color: #fff; border: 1px solid #000; border-radius: 1px 24px 1px 1px; margin: auto; padding: 32px; } .div-block { flex-direction: column; justify-content: flex-start; display: flex; } .images_modal { align-items: flex-start; display: flex; } .image-11 { margin-left: auto; margin-right: 0px; } .image-14 { width: 24px; height: 24px; clear: right; margin-bottom: auto; margin-left: auto; position: relative; top: 0%; bottom: auto; left: auto; right: 0%; } .heading-8 { margin-top: 24px; font-size: 18px; line-height: 21px; display: block; } .paragraph-6 { margin-top: 24px; }.columns-9 { align-items: center; display: flex; }.w-row:before, .w-row:after { content: ' '; grid-area: 1 / 1 / 2 / 2; display: table; }.column-10 { flex-direction: column; justify-content: center; align-items: center; display: flex; }.link-block {     min-width: 200px; width: 100%; height: 50px; color: #fff; text-align: center; background-color: #000; border-radius: 46px; justify-content: center; align-items: center; font-family: Montserrat, sans-serif; font-size: 12px; text-decoration: none; display: flex; }</style><div class='modal_ayuda wf-section' style='display: flex;'><div class='container_ayuda'><div class='div-block'><div class='images_modal'><img src='https://uploads-ssl.webflow.com/64294b5cf540667f5e6fdef9/642b05db9f26c67bc9869e65_Group%201401.png' loading='lazy' alt='' class='image-11'><img src='https://uploads-ssl.webflow.com/64294b5cf540667f5e6fdef9/642b0d14b5ec4a2de1c4ac53_xclose.png' loading='lazy' data-w-id='fb304e76-d796-87ce-bcc5-84023e910c8f' alt='' class='image-14'></div><div><h2 class='heading-8'>Lo sentimos pero este producto no está disponible en tu zona</h2><p class='paragraph-6'>Tenemos el mejor precio para ti en adamo.es</p><div class='columns-9 w-row'><div class='column-10 w-col w-col-6' style='margin-left: auto; margin-right: auto'><a href='https://adamo.es' class='link-block chatear w-inline-block'><div>Ir al Inicio</div></a><div class='button'></div></div></div></div></div></div></div>";
                                   
                                     $( "body" ).append( newdiv1 );
                                                // redirect to google after 5 seconds
                                                        window.setTimeout(function() {
                                              window.location.href = 'https://adamo.es';
                                          }, 15000);
 

                                  }
                              } else {
                                  console.log('No city found');
                              }
                          } else {
                              console.log('No results found');
                          }
                      } else {
                          console.log('Geocoder failed due to: ' + status);
                      }
                  });
              }
