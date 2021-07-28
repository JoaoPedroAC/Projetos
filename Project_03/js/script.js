window.onload = function() {
    var map;
    // aqui veremos o mapa em ação
    function inicar() {
        var mapinha = {
            // center: new google.maps.LatLng(-20.33484260215795, -40.286800902557815),
            center: { lat: -20.360835856716488, lng: -40.30438062042114 },
            scrollwhell: false,
            zoom: 12,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
            mapTypeId: 'roadmap'
        }
        map = new google.maps.Map(document.getElementById('mapa'), mapinha);
    }
    // vai definir a marcação, conteudo; essas coisas
    function addMarker(lat, long, icon, content, click) {
        var latLng = { 'lat': lat, 'lng': long };
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon,
        });
        // vai definir as informações das msg ou oq vc quiser setar
        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        });
        if (click == true) {
            // quando clicar na marcação vai executar a msg
            google.maps.event.addListener(marker, 'click', function() {
                // vai fazr aparecer as coisas no mapa
                infoWindow.open(map, marker);
            });
        } else {
            infoWindow.open(map, marker);
        }



    }
    inicar();
    var conteudo = '<p style="color:black; font-size:13px; padding:10px 0;">Meu endereçooooo!!!!!!!</p>'
    addMarker(-20.368797181023847, -40.305544842233765, '', conteudo, true);
}