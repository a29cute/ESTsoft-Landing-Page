import config from '../../apikey.js';

const { API_KEY } = config;

function loadKakaoMapScript(callback) {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
    script.type="text/javascript"
    script.onload = callback;
    document.body.appendChild(script);
}

loadKakaoMapScript(() => {
    kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);
        let marker = null;
        const initialLevel = options.level;

        function setMapType(maptype) {
            const roadmapControl = document.getElementById('btnRoadmap');
            const skyviewControl = document.getElementById('btnSkyview');
            if (maptype === 'roadmap') {
                map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
                roadmapControl.className = 'selected_btn';
                skyviewControl.className = 'btn';
            } else {
                map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
                skyviewControl.className = 'selected_btn';
                roadmapControl.className = 'btn';
            }
        }

        function zoomIn() {
            map.setLevel(map.getLevel() - 1);
        }

        function zoomOut() {
            map.setLevel(map.getLevel() + 1);
        }

        function mapLevel() {
            map.setLevel(initialLevel);
        }

        function createMarker(latlng) {
            marker = new kakao.maps.Marker({
                position: latlng
            });
            marker.setMap(map);
        }

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            const latlng = mouseEvent.latLng;
            if (marker) {
                marker.setMap(null);
            }
            createMarker(latlng);
        });

        function markerRemove() {
            if (marker) {
                marker.setMap(null);
                marker = null;
            }
        }

        window.setMapType = setMapType;
        window.zoomIn = zoomIn;
        window.zoomOut = zoomOut;
        window.mapLevel = mapLevel;
        window.markerRemove = markerRemove;
    });
});
