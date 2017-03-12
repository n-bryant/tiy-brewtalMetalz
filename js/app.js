(function() {
  "use strict";

  // setting up musicApp as a Revealing Module
  const musicAppModule = function() {
    const bandList = document.querySelector('.list-bands');
    const albumList = document.querySelector('.list-albums');
    const photoContainer = document.querySelector('.photo-container');
    const delay = 1500; // used for setTimeout second parameter
    let bandHeadline = document.querySelector('.band-headline');
    let bandPhoto = document.querySelector('.band-photo');
    let bandOrigin = document.querySelector('.origin');

    // creating a namespace for our loading icon
    const loadingIcon = {
      show(targetContainer) {
        const icon = document.createElement('img');
        icon.src = './images/loading.png';
        icon.className = 'loading';

        // adds loading icon to page on whichever loading container we are targeting
        document.querySelector(`.${targetContainer}.loading-container`).appendChild(icon);

      },
      hide() {
        document.querySelector('.loading').className = 'is-hidden';
      }
    }

    // displays band details on click of band name
    function buildBandDetails(bandData) {
      // display band details
      bandHeadline.textContent = bandData.name;
      bandHeadline.classList.remove('is-hidden');
      photoContainer.classList.remove('is-hidden');
      bandPhoto.src = `./images/${bandData.image}`;
      bandOrigin.textContent = bandData.location;
    }

    function buildAlbumsList(albumsData) {
      albumList.innerHTML = '';
      loadingIcon.show('albums');

      // faking load time display
      setTimeout(() => {
        loadingIcon.hide();
        albumsData = albumsData.reverse();
        for (let index = 0; index < albumsData.length; index++) {
          let item = document.createElement('li');
          item.innerHTML = albumsData[index];
          albumList.appendChild(item);
        }
      }, delay);
    }

    // creates list items for each band name and appends them to bandList
    function buildBandList(bandListData) {
      loadingIcon.show('bands');

      // faking load time display
      setTimeout(() => {
        loadingIcon.hide();
        for (let index = 0; index < bandListData.length; index++) {
          let item = document.createElement('li');
          item.innerHTML = bandListData[index].name;
          bandList.appendChild(item);

          // show band picture and discography when we click the band name
          item.addEventListener('click', () => {
            buildBandDetails(bandListData[index]);

            // getData takes the two parameters of type and bandName
            getData('albums', bandListData[index].name);
          });
        }
      }, delay);
    }

    // consolidated function to gather the data we want to use
    function getData(type, bandName = null) {
      // if type is 'bands', file is 'music.json'
      // if type is not 'bands', file is 'albums.json'
      const file = type === 'bands' ? 'music.json' : 'albums.json';

      let http = new XMLHttpRequest();
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
          if (type === 'bands') {
            console.log(JSON.parse(http.response)); // getting data format
            const bandData = JSON.parse(http.response);
            buildBandList(bandData);
          } else {
            console.log(JSON.parse(http.response)); // gettind data format
            // grabbing the array of objects from albums.json
            // JSON.parse(http.response) returns an array so we can use the array[0] syntax to access the access at the 0th index
            const albumsData = JSON.parse(http.response)[0];
            for (let band in albumsData) {
              if (band === bandName) {
                const albumsList = albumsData[bandName].albums;
                buildAlbumsList(albumsList);
              }
            }
          }
        }
      }

      http.open('GET', `data/${file}`, true);
      http.send();
    }

    // revealing getData function
    return {
      getData: getData
    };
  };

  // setting bandApp to hold the value of musicAppModule
  const bandApp = musicAppModule();
  bandApp.getData('bands');
})();



// Method to get our data using two separate functions
// // gather the album data we want to use
// function getAlbums(bandName) {
//   let http = new XMLHttpRequest();
//   http.onreadystatechange = function() {
//     if (http.readyState === 4 && http.status === 200) {
//       // grabbing the array of objects from albums.json
//       // JSON.parse(http.response) returns an array so we can use the array[0] syntax
//       const albumsData = JSON.parse(http.response)[0];
//
//
//       // iterating over each key in albumsData
//       for (let item in albumsData) {
//         if (item === bandName) {
//           // grabbing the albums property of the bandName property of the albumsData object
//           const albumsList = albumsData[bandName].albums;
//           buildAlbumsList(albumsList);
//         }
//       }
//     }
//   }
//
//   http.open('GET', 'data/albums.json', true);
//   http.send();
// }
//
// // gather the band data we want to use
// function getData() {
//   // create new http request
//   const http = new XMLHttpRequest;
//   http.onreadystatechange = function() {
//     if (http.readyState === 4 && http.status === 200) {
//       // storing http response in variable and calling buildBandList to handle it
//       const data = JSON.parse(http.response);
//       buildBandList(data);
//     }
//   };
//
//   // initializing and sending request
//   http.open('GET', 'data/music.json', true);
//   http.send();
// }





// AJAX - Asynchronous JavaScript and XML
// JSON - JavaScript Object Notation
  // JSON key value pairs are written with double quotes
/*
  // JSON Example
  {
    "fruits": [
      {
        "type": "Apple"
      },
      {
        "type": "Pear"
      }
    ]
  }
*/

// use atom-live-server to not get error

// Ready States
// 0: Request Not Initialized
// 1: Request Has Been Set Up
// 2: Request Has Been Sent
// 3: Request is in Process
// 4: Request is Complete

// Status Codes
// 200: Okay
// 3xx: Redirects
// 4xx: Client Erros
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 5xx: Server Errors
// 500: Internal Server Error


// (function() {
//     "use strict";
//
//     // AJAX request syntax - XMLHttpRequest is a constructor
//     let http = new XMLHttpRequest();
//     let dogsObj = 'dogs';
//
//     // you can set actions based on the ready state of the request
//     http.onreadystatechange = function() {
//       if (http.readyState === 4 && http.status === 200) {
//         // request.response holds a string of the data
//         // convert into JSON with JSON.parse() to return it as an object
//         // console.log(JSON.parse(http.response));
//         dogsObj = JSON.parse(http.response);
//         console.log(dogsObj.dogs);
//
//       } else if (http.readyState === 4 && http.status >= 300) {
//         console.log('Whoops! Errors!');
//       }
//     }
//
//     // open method sets up a connection
//     // three parameters (method, url, async(true)/sync(false))
//     http.open('GET', './data/dogs.json', true);
//     http.send(); // makes the request
//
// })();
