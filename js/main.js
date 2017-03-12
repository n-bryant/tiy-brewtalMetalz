// /* READY STATES
//
// 0 - Request Not Initialized
// 1 - Request Has Been Set Up
// 2 - Request Has Been Sent
// 3 - Request is in Process
// 4 - Request is Complete
//
// */
//
// {
//     "dogs": [{
//             "name": "Abbie",
//             "breed": "Whippet"
//         },
//         {
//             "name": "Ragnar",
//             "breed": "Norwegian Elkhound"
//         }
//     ]
// }
//
//
// window.onload = function() {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=4b48f97ef815191ab2de223796ad2b23",
//         "method": "GET",
//         "headers": {
//             "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         },
//         "processData": false,
//         "data": "{}"
//     };
//
//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });
//     // http://jsonapi.org/
//
//     /** JAVASCRIPT METHOD */
//     // var http = new XMLHttpRequest();
//     // // Supported in all modern browsers, CanIUse reference
//     //
//     // http.onreadystatechange = function() {
//     //   if (http.readyState === 4 && http.status === 200) {
//     //     // JavaScript String
//     //     // console.log(http.response);
//     //
//     //     // Parse as json
//     //     console.log(JSON.parse(http.response));
//     //   }
//     // };
//     //
//     // // .open() method just sets up the request for us
//     // // Tells JS the type of request we want to make, where we want to get the data from and if it should be async or not
//     // // true = async
//     // http.open('GET', 'data/movies.json', true);
//     //
//     // // Send says I've prepared the request, now let's send it on its way to go get our data
//     // // .send() is our raven from GoT
//     // http.send();
//     //
//     // // Async testing
//     // console.log('Test');
//
//
//
//     /** JQUERY METHOD */
//     // $.get('data/movies.json', function(data) {
//     //   console.log(data);
//     // });
//     // console.log('Test');
//
//
//
//     /** CALLBACKS */
//     // Callbacks are a function that are provided as a parameter to any other method
//     // Typically inline but don't always have to be
//     // var callback = function(fruit) {
//     //     console.log(fruit);
//     // };
//     //
//     // var fruits = ['apple', 'banana', 'pear'];
//     // fruits.forEach(callback);
//     // console.log('Done');
//
//     // Asynchronous is start now, finish later
//     // $.get('data/movies.json', function(data) {
//     //   console.log(data);
//     // });
//     // console.log('test');
//
//
//     /* CALLBACK HELL */
//     // $.ajax({
//     //     type: 'GET',
//     //     url: 'data/movies.json',
//     //     success: function(results) {
//     //         console.log(results);
//     //
//     //         $.ajax({
//     //             type: 'GET',
//     //             url: 'data/tweets.json',
//     //             success: function(results) {
//     //                 console.log(results);
//     //
//     //                 $.ajax({
//     //                     type: 'GET',
//     //                     url: 'data/dogs.json',
//     //                     success: function(results) {
//     //                         console.log(results);
//     //                     },
//     //                     error: function(jqXHR, textStatus, error) {
//     //                         console.log(jqXHR, textStatus, error);
//     //                     }
//     //                 });
//     //             },
//     //             error: function(jqXHR, textStatus, error) {
//     //                 console.log(jqXHR, textStatus, error);
//     //             }
//     //         });
//     //     },
//     //     error: function(jqXHR, textStatus, error) {
//     //         console.log(jqXHR, textStatus, error);
//     //     }
//     // });
//
//     // function handleError(jqXHR, errorStatus, error) {
//     //     console.log(error);
//     // }
//     //
//     // function callbackMovies(results) {
//     //     console.log(results);
//     //
//     //     $.ajax({
//     //         type: 'GET',
//     //         url: 'data/tweets.json',
//     //         success: callbackTweets,
//     //         error: handleError
//     //     });
//     // }
//     //
//     // function callbackTweets(results) {
//     //     console.log(results);
//     //
//     //     $.ajax({
//     //         type: 'GET',
//     //         url: 'data/dogs.json',
//     //         success: function(results) {
//     //             console.log(results);
//     //         },
//     //         error: handleError
//     //     });
//     // }
//     //
//     // $.ajax({
//     //     type: 'GET',
//     //     url: 'data/movies.json',
//     //     success: callbackMovies,
//     //     error: handleError
//     // });
//
//     /* PROMISES - JAVASCRIPT*/
//     // Anything within the promise interface has the .then and .catch methods available to it
//     // .onload, .onerror methods
//     // resolve == success | .then() applies
//     // reject == error | .catch() applies
//
//     // function get(url) {
//     //   return new Promise(function(resolve, reject) {
//     //     var http = new XMLHttpRequest();
//     //     http.open('GET', url, true);
//     //     http.onload = function() {
//     //       if (http.status === 200) {
//     //         resolve(JSON.parse(http.response));
//     //       } else {
//     //         reject(http.statusText);
//     //       }
//     //     };
//     //     http.onerror = function() {
//     //       reject(http.statusText);
//     //     };
//     //     http.send();
//     //   });
//     // }
//     //
//     // var promise = get('data/movies.json');
//     // promise.then(function(movies) {
//     //   console.log(movies);
//     //   return get('data/dogs.json');
//     // }).then(function(dogs) {
//     //   console.log(dogs);
//     //   return get('data/tweets.json');
//     // }).then(function(tweets) {
//     //   console.log(tweets);
//     // }).catch(function(error) {
//     //   console.log(error);
//     // });
//
//
//     /* PROMISES - JQUERY */
//     // $.get('data/movies.json').then(function(movies) {
//     //   console.log(movies);
//     //   return $.get('data/tweets.json');
//     // }).then(function(tweets) {
//     //   console.log(tweets);
//     //   return $.get('data/dogs.json');
//     // }).then(function(dogs) {
//     //   console.log(dogs);
//     // }).catch(function(error) {
//     //   console.log(error);
//     // });
// };
//
//
//
// // 0: Request Not Initialized
// // 1: Request Has Been Set Up
// // 2: Request Has Been Sent
// // 3: Request is in Process
// // 4: Request is Complete
//
// // 200: Okay
// // 3xx: Redirects
// // 4xx: Client Errors
// // 400: Bad Request
// // 401: Unauthorized
// // 403: Forbidden
// // 404: Not Found
// // 5xx: Server Errors
// // 500: Internal Server Error
//
// /* JAVASCRIPT XMLHttpRequest() */
// // var http = new XMLHttpRequest();
// // http.onreadystatechange = function() {
// //     if (http.readyState === 4 && http.status === 200) {
// //         console.log(JSON.parse(http.response));
// //
// //     } else if (http.readyState === 4 && http.status >= 300) {
// //         console.log(http.statusText);
// //     }
// // };
// // http.open('GET', 'data/dogs.json', true);
// // http.send();
//
// /* jQuery $.get Method */
// // var dogs;
// // $.get('data/dogs.json', function(data) {
// //   dogs = data;
// //   console.log(dogs);
// // });
// // console.log('Testing Async');
//
// /* jQuery $.ajax() Method */
// // function handleError(errorObject, textStatus, error) {
// //   console.log(errorObject, textStatus, error);
// // }
// //
// // function dogsCallback(dogs) {
// //   console.log(dogs);
// //
// //   $.ajax({
// //       type: 'GET',
// //       url: 'https://raw.githubusercontent.com/yuschick/31-nights-of-horror-2016/master/movies.json',
// //       header: 'application/json',
// //       success: moviesCallback,
// //       error: handleError
// //   });
// // }
// //
// // function moviesCallback(movies) {
// //   console.log(JSON.parse(movies));
// //
// //   $.ajax({
// //       type: 'GET',
// //       url: 'data/fruits.json',
// //       header: 'application/json',
// //       success: function(fruits) {
// //           console.log(fruits);
// //       },
// //       error: handleError
// //   });
// // }
// //
// // $.ajax({
// //     type: 'GET',
// //     url: 'data/dogs.json',
// //     headers: 'application/json',
// //     success: dogsCallback,
// //     error: handleError,
// //     complete: function() {
// //         // console.log('Completed Request');
// //     }
// // });
//
// function get(url) {
//     return new Promise(function(resolve, reject) {
//         var http = new XMLHttpRequest();
//         http.open('GET', url, true);
//         http.onload = function() {
//             if (http.status === 200) {
//                 resolve(JSON.parse(http.response));
//             } else {
//                 reject(http.statusText);
//             }
//         };
//         http.onerror = function() {
//             reject(http.statusText);
//         };
//         http.send();
//     });
// }
// var longUrl = 'https://raw.githubusercontent.com/yuschick/31-nights-of-horror-2016/master/movies.json';
// // var promise = get('data/dogs.json');
// // console.log(promise);
//
// get('data/dogs.json').then(function(dogs) {
//     console.log(dogs);
//     return get(longUrl);
// }).then(function(movies) {
//     console.log(movies);
//     return get('data/fruits.json');
// }).then(function(fruits) {
//     console.log(fruits);
//     console.log("All done :)");
// }).catch(function(error) {
//     console.log(error);
// });
