(function() {
    "use strict";

    const musicApp = (function() {
        const bandList = document.querySelector('.list-bands');
        const albumList = document.querySelector('.list-albums');
        const photoContainer = document.querySelector('.photo-container');
        const loadingContainerList = document.querySelector('.bands.loading-container');
        const loadingContainerDetails = document.querySelector('.albums.loading-container');
        const delay = 1500;
        let bandNameHeadline = document.querySelector('.band-headline');
        let bandPhoto = document.querySelector('.band-photo');
        let bandOrigin = document.querySelector('.origin');

        const loading = {
            show(target) {
                const icon = document.createElement('img');
                icon.src = "./images/loading.png";
                icon.className = 'loading';
                document.querySelector(`.${target}.loading-container`).appendChild(icon);
            },
            hide() {
                const icon = document.querySelector('.loading');
                icon.className = 'is-hidden';
            }
        };

        function buildBandDetails(data) {
            albumList.innerHTML = '';

            bandNameHeadline.textContent = data.name;
            bandNameHeadline.classList.remove('is-hidden');
            photoContainer.classList.remove('is-hidden');
            bandPhoto.src = `./images/${data.image}`;
            bandOrigin.textContent = data.location;
        }

        function buildAlbumsList(data) {
            data = data.reverse();
            setTimeout(() => {
                for (let index = 0; index < data.length; index++) {
                    let item = document.createElement('li');
                    item.innerHTML = data[index];
                    albumList.appendChild(item);
                }
                loading.hide();
            }, delay);
        }

        function buildBandList(data) {
            loading.show('bands');
            setTimeout(() => {
                for (let index = 0; index < data.length; index++) {
                    let item = document.createElement('li');
                    item.innerHTML = data[index].name;
                    bandList.appendChild(item);

                    item.addEventListener('click', () => {
                        buildBandDetails(data[index]);
                        getData('albums', data[index].name);
                        loading.show('albums');
                    });
                }
                loading.hide();
            }, delay);
        }

        function getData(type, band = null) {
            const file = type === 'bands' ? 'music.json' : 'albums.json';
            let http = new XMLHttpRequest();
            http.onreadystatechange = function() {
                if (http.readyState === 4 && http.status === 200) {
                    if (type === 'bands') {
                        const data = JSON.parse(http.response);
                        buildBandList(data);
                    } else {
                        const data = JSON.parse(http.response)[0];
                        for (let item in data) {
                            if (item === band) {
                                buildAlbumsList(data[band].albums);
                            }
                        }
                    }
                }
            }
            http.open('GET', `data/${file}`, true);
            http.send();
        }

        return {
            getData: getData
        };
    })();

    musicApp.getData('bands');
})();
