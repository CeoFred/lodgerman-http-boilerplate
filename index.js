/**
 * Boilerplate for lodgerman
 * @copyright lodgerman (c) 2019
 * @author ceofred
 * @license MIT
 * 
 * 
 */

const path = 'https://api.lodgerman.com'

//GET request
 $.ajax({
  url:`${path}`,
  method:'GET',
 }).done(response  => console.log(response)).fail(err => console.log(err))



 //GET request with query params

 let params = '23029ey2e8dxionx3d3';
 $.ajax({
  url:`${path}/${params}`,
  method:'GET'
 })
 data = {
  // store data this way
 }
 
 //POST request
$.ajax({
 url: `${path}`,
 method: 'POST',
 data:data
}).done(data => console.log(data)).fail(err => console.log(err))

