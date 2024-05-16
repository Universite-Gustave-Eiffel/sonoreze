        var highlightLayer;
        /*Ouverture auto des pop-ups au survol
        function highlightFeature(e) {
            highlightLayer = e.target;
            highlightLayer.openPopup();
        }*/
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
        }


        // Définition des couches de fond
        // https://leaflet-extras.github.io/leaflet-providers/preview/

        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap',
            bounds: [[47.16928,-1.57601],[47.1998,-1.54057]],
        });

        var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            bounds: [[47.16928,-1.57601],[47.1998,-1.54057]],
            maxZoom: 20
        });

        var CartoDB_VoyagerOnlyLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            bounds: [[47.16928,-1.57601],[47.1998,-1.54057]],
            maxZoom: 20
        });

        var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            bounds: [[47.16928,-1.57601],[47.1998,-1.54057]],
            maxZoom: 20
        });

        var GeoportailFrance_orthos = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
            attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
            bounds: [[47.16928,-1.57601],[47.1998,-1.54057]],
            //bounds: [[-75, -180], [81, 180]],
            minZoom: 2,
            maxZoom: 19,
            apikey: 'choisirgeoportail',
            format: 'image/jpeg',
            style: 'normal'
        });

        var vide = L.tileLayer('', {
            attribution: '',
            bounds: [[-75, -180], [81, 180]],
            minZoom: 2,
            maxZoom: 19,
            apikey: '',
            format: 'image/jpeg',
            style: 'normal'
        });

        // Compilation de ces couches de base dans le groupe baseMaps
        var baseMaps = {
            "Vide": vide,
            "OpenStreetMap": osm,
            "Positron": CartoDB_Positron,
            //"Rues": CartoDB_VoyagerOnlyLabels,
            "Voyager": CartoDB_Voyager,
            "BD Ortho IGN": GeoportailFrance_orthos
        };


        var map = L.map('map', {
            zoomControl:true, 
            maxZoom:19, 
            minZoom:15,
            layers: [CartoDB_Positron]
        }).fitBounds([[47.17818,-1.57127],[47.19041,-1.55256]]);



        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://sonoreze.fr">SonoRezé</a>');
        
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        function removeEmptyRowsFromPopupContent(content, feature) {
         var tempDiv = document.createElement('div');
         tempDiv.innerHTML = content;
         var rows = tempDiv.querySelectorAll('tr');
         for (var i = 0; i < rows.length; i++) {
             var td = rows[i].querySelector('td.visible-with-data');
             var key = td ? td.id : '';
             if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                 rows[i].parentNode.removeChild(rows[i]);
             }
         }
         return tempDiv.innerHTML;
        }
        document.querySelector(".leaflet-popup-pane").addEventListener("load", function(event) {
          var tagName = event.target.tagName,
            popup = map._popup;
          // Also check if flag is already set.
          if (tagName === "IMG" && popup && !popup._updated) {
            popup._updated = true; // Set flag to prevent looping.
            popup.update();
          }
        }, true);
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }

        // ------------------------------------------------------------------
        // Couche de la végétation
/*
        function pop_vegetation_0(feature, layer) {
            layer.on({ 
            }); 
        }

        function style_vegetation_0_0() {
            return {
                pane: 'pane_vegetation_0',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,255,213,1.0)',
                interactive: false,
            }
        }
        map.createPane('pane_vegetation_0');
        map.getPane('pane_vegetation_0').style.zIndex = 400;
        map.getPane('pane_vegetation_0').style['mix-blend-mode'] = 'normal';
        var layer_vegetation_0 = new L.geoJson(json_vegetation_0, {
            attribution: '',
            interactive: false,
            dataVar: 'json_vegetation_0',
            layerName: 'layer_vegetation_0',
            pane: 'pane_vegetation_0',
            onEachFeature: pop_vegetation_0,
            style: style_vegetation_0_0,
        });
        bounds_group.addLayer(layer_vegetation_0);
        map.addLayer(layer_vegetation_0);
*/
        // ------------------------------------------------------------------      
        // Couche des routes
/*
        function pop_routes_1(feature, layer) {
            layer.on({
            });
        }

        function style_routes_1_0() {
            return {
                pane: 'pane_routes_1',
                opacity: 1,
                color: 'rgba(148,148,148,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 3.0,
                fillOpacity: 0,
                interactive: false,
            }
        }
        function style_routes_1_1() {
            return {
                pane: 'pane_routes_1',
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 3.0,
                fillOpacity: 0,
                interactive: false,
            }
        }
        map.createPane('pane_routes_1');
        map.getPane('pane_routes_1').style.zIndex = 401;
        map.getPane('pane_routes_1').style['mix-blend-mode'] = 'normal';
        var layer_routes_1 = new L.geoJson.multiStyle(json_routes_1, {
            attribution: '',
            interactive: false,
            dataVar: 'json_routes_1',
            layerName: 'layer_routes_1',
            pane: 'pane_routes_1',
            onEachFeature: pop_routes_1,
            styles: [style_routes_1_0,style_routes_1_1,]
        });
        bounds_group.addLayer(layer_routes_1);
        map.addLayer(layer_routes_1);
*/
        // ------------------------------------------------------------------
        // Couche du tram
        function pop_ligne_tram_2(feature, layer) {
            layer.on({
            });
        }

        function style_ligne_tram_2_0() {
            return {
                pane: 'pane_ligne_tram_2',
                opacity: 1,
                color: 'rgba(112,112,112,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 1.0,
                fillOpacity: 0,
                interactive: false,
            }
        }
        function style_ligne_tram_2_1() {
            return {
                pane: 'pane_ligne_tram_2',
                interactive: false,
            }
        }
        map.createPane('pane_ligne_tram_2');
        map.getPane('pane_ligne_tram_2').style.zIndex = 402;
        map.getPane('pane_ligne_tram_2').style['mix-blend-mode'] = 'normal';
        var layer_ligne_tram_2 = new L.geoJson.multiStyle(json_ligne_tram_2, {
            attribution: '',
            interactive: false,
            dataVar: 'json_ligne_tram_2',
            layerName: 'layer_ligne_tram_2',
            pane: 'pane_ligne_tram_2',
            onEachFeature: pop_ligne_tram_2,
            styles: [style_ligne_tram_2_0,]
        });
        bounds_group.addLayer(layer_ligne_tram_2);
        map.addLayer(layer_ligne_tram_2);

        // ------------------------------------------------------------------
        // Couche des bâtiments
/*
        function pop_batiments_3(feature, layer) {
            layer.on({                
            });  
        }

        function style_batiments_3_0() {
            return {
                pane: 'pane_batiments_3',
                opacity: 1,
                color: 'rgba(177,177,177,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,229,229,1.0)',
                interactive: false,
            }
        }
        map.createPane('pane_batiments_3');
        map.getPane('pane_batiments_3').style.zIndex = 403;
        map.getPane('pane_batiments_3').style['mix-blend-mode'] = 'normal';
        var layer_batiments_3 = new L.geoJson(json_batiments_3, {
            attribution: '',
            interactive: false,
            dataVar: 'json_batiments_3',
            layerName: 'layer_batiments_3',
            pane: 'pane_batiments_3',
            onEachFeature: pop_batiments_3,
            style: style_batiments_3_0,
        });
        bounds_group.addLayer(layer_batiments_3);
        map.addLayer(layer_batiments_3);
*/
        // ------------------------------------------------------------------
        // Couche de l'école
        function pop_ecole_3857_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 
            '<p align="center"><b>' + (feature.properties['NATURE'] !== null ? autolinker.link(feature.properties['NATURE'].toLocaleString()) : '') + '</b></p>\
            <img src="./carte_pauline_roland/vignettes/ecole.jpg" alt="Ecole Pauline Roland" width="300px" /><br>\
            ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        function style_ecole_3857_4_0() {
            return {
                pane: 'pane_ecole_3857_4',
                interactive: true,
                stroke: true, 
                fill: true,
                fillColor: 'white',
                fillOpacity: 1,
                weight: 2,
                color: 'rgba(121,121,121,1.0)',
                opacity: 1
            }
        }
        
        map.createPane('pane_ecole_3857_4');
        map.getPane('pane_ecole_3857_4').style.zIndex = 404;
        map.getPane('pane_ecole_3857_4').style['mix-blend-mode'] = 'normal';
        //var layer_ecole_3857_4 = new L.geoJson.multiStyle(json_ecole_3857_4, {
        var layer_ecole_3857_4 = new L.geoJson(json_ecole_3857_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_ecole_3857_4',
            layerName: 'layer_ecole_3857_4',
            pane: 'pane_ecole_3857_4',
            onEachFeature: pop_ecole_3857_4,
            style: style_ecole_3857_4_0,
        });
        bounds_group.addLayer(layer_ecole_3857_4);
        map.addLayer(layer_ecole_3857_4);


        // ------------------------------------------------------------------
        // Couche des balades sonores
        function pop_balade_sonore_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 
            '<img src="./carte_pauline_roland/vignettes/balade_sonore.svg" alt="Balade sonore" width=100% />\
            <p align="center">\
                <b>' + (feature.properties['titre'] !== null ? autolinker.link(feature.properties['Titre'].toLocaleString()) : '') + '</b><br>\
                Lieu : ' + (feature.properties['Lieu'] !== null ? autolinker.link(feature.properties['Lieu'].toLocaleString()) : '') + '<br>\
                Date : ' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '<br>\
                Heure : ' + (feature.properties['Heure'] !== null ? autolinker.link(feature.properties['Heure'].toLocaleString()) : '') + '<br>\
            </p>\
            <audio controls autoplay>\
                <source src="./carte_pauline_roland/' + (feature.properties['audio'] !== null ? autolinker.link(feature.properties['audio'].toLocaleString()) : '')+'\
                " type="audio/mpeg">\
                Your browser does not support the audio element.\
            </audio>\
            ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        var baladeSonIcon = L.icon({
            iconUrl: './carte_pauline_roland/markers/balade_sonore_5_cercle.svg',
            iconSize: [70, 70]
        });

        map.createPane('pane_balade_sonore_5');
        map.getPane('pane_balade_sonore_5').style.zIndex = 405;
        map.getPane('pane_balade_sonore_5').style['mix-blend-mode'] = 'normal';
        var layer_balade_sonore_5 = new L.geoJson.multiStyle(json_balade_sonore_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_balade_sonore_5',
            layerName: 'layer_balade_sonore_5',
            pane: 'pane_balade_sonore_5',
            onEachFeature: pop_balade_sonore_5,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                //return L.marker(latlng, style_balade_sonore_5_0(feature));
            },function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {icon: baladeSonIcon});
            },
        ]});
        bounds_group.addLayer(layer_balade_sonore_5);
        map.addLayer(layer_balade_sonore_5);


        // ------------------------------------------------------------------
        // Couche des balades commentées
        function pop_balade_commentee_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 
            '<img src="./carte_pauline_roland/vignettes/balade_commentee.svg" alt="Balade commentée" width=100% />\
            <p align="center">\
                <b>' + (feature.properties['titre'] !== null ? autolinker.link(feature.properties['Titre'].toLocaleString()) : '') + '</b><br>\
                Lieu : ' + (feature.properties['Lieu'] !== null ? autolinker.link(feature.properties['Lieu'].toLocaleString()) : '') + '<br>\
                Date : ' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '<br>\
                Heure : ' + (feature.properties['Heure'] !== null ? autolinker.link(feature.properties['Heure'].toLocaleString()) : '') + '<br>\
            </p>\
            <audio controls autoplay>\
                <source src="./carte_pauline_roland/'+(feature.properties['audio'] !== null ? autolinker.link(feature.properties['audio'].toLocaleString()) : '')+'\
                " type="audio/mpeg">\
                Your browser does not support the audio element.\
            </audio>\
            ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        var baladeComIcon = L.icon({
            iconUrl: './carte_pauline_roland/markers/balade_commentee_6_cercle.svg',
            iconSize: [70, 70]
        });

        map.createPane('pane_balade_commentee_6');
        map.getPane('pane_balade_commentee_6').style.zIndex = 406;
        map.getPane('pane_balade_commentee_6').style['mix-blend-mode'] = 'normal';
        var layer_balade_commentee_6 = new L.geoJson.multiStyle(json_balade_commentee_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_balade_commentee_6',
            layerName: 'layer_balade_commentee_6',
            pane: 'pane_balade_commentee_6',
            onEachFeature: pop_balade_commentee_6,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {icon: baladeComIcon});
            },
        ]});
        bounds_group.addLayer(layer_balade_commentee_6);
        map.addLayer(layer_balade_commentee_6);

        // ------------------------------------------------------------------
        // Couche des points d'ouie
        function pop_points_ouie_7(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 
            '<img src="./carte_pauline_roland/vignettes/point_ouie.svg" alt="Point ouïe" width=100% />\
            <p align="center">\
                <b>' + (feature.properties['titre'] !== null ? autolinker.link(feature.properties['Titre'].toLocaleString()) : '') + '</b><br>\
                Lieu : ' + (feature.properties['Lieu'] !== null ? autolinker.link(feature.properties['Lieu'].toLocaleString()) : '') + '<br>\
                Date : ' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '<br>\
                Heure : ' + (feature.properties['Heure'] !== null ? autolinker.link(feature.properties['Heure'].toLocaleString()) : '') + '<br>\
            </p>\
            <audio controls autoplay>\
                <source src="./carte_pauline_roland/' + (feature.properties['audio'] !== null ? autolinker.link(feature.properties['audio'].toLocaleString()) : '')+'\
                " type="audio/mpeg">\
                Your browser does not support the audio element.\
            </audio>\
            ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        var pointOuieIcon = L.icon({
            iconUrl: './carte_pauline_roland/markers/points_ouie_7_cercle.svg',
            iconSize: [70, 70]
        });

        map.createPane('pane_points_ouie_7');
        map.getPane('pane_points_ouie_7').style.zIndex = 407;
        map.getPane('pane_points_ouie_7').style['mix-blend-mode'] = 'normal';
        var layer_points_ouie_7 = new L.geoJson.multiStyle(json_points_ouie_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_points_ouie_7',
            layerName: 'layer_points_ouie_7',
            pane: 'pane_points_ouie_7',
            onEachFeature: pop_points_ouie_7,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {icon: pointOuieIcon});
            },
        ]});
        bounds_group.addLayer(layer_points_ouie_7);
        map.addLayer(layer_points_ouie_7);




        // ------------------------------------------------------------------
        // Couche des paysages sonores imaginaires
        function pop_son_imaginaire(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 
            '<img src="./carte_pauline_roland/vignettes/paysage_imaginaire.svg" alt="Paysage sonore imaginaire" width=100% />\
            <p align="center">\
                <b>' + (feature.properties['titre'] !== null ? autolinker.link(feature.properties['Titre'].toLocaleString()) : '') + '</b><br>\
                Lieu : ' + (feature.properties['Lieu'] !== null ? autolinker.link(feature.properties['Lieu'].toLocaleString()) : '') + '<br>\
                Date : ' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '<br>\
                Heure : ' + (feature.properties['Heure'] !== null ? autolinker.link(feature.properties['Heure'].toLocaleString()) : '') + '<br>\
            </p>\
            <audio controls autoplay>\
                <source src="./carte_pauline_roland/' + (feature.properties['audio'] !== null ? autolinker.link(feature.properties['audio'].toLocaleString()) : '')+'\
                " type="audio/mpeg">\
                Your browser does not support the audio element.\
            </audio>\
            ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        var baladeSonIcon = L.icon({
            iconUrl: './carte_pauline_roland/markers/paysage_imaginaire_cercle.svg',
            iconSize: [70, 70]
        });

        map.createPane('pane_son_imaginaire');
        map.getPane('pane_son_imaginaire').style.zIndex = 405;
        map.getPane('pane_son_imaginaire').style['mix-blend-mode'] = 'normal';
        var layer_son_imaginaire = new L.geoJson.multiStyle(json_son_imaginaire, {
            attribution: '',
            interactive: true,
            dataVar: 'json_son_imaginaire',
            layerName: 'layer_son_imaginaire',
            pane: 'pane_son_imaginaire',
            onEachFeature: pop_son_imaginaire,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                //return L.marker(latlng, style_balade_sonore_5_0(feature));
            },function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {icon: baladeSonIcon});
            },
        ]});
        bounds_group.addLayer(layer_son_imaginaire);
        map.addLayer(layer_son_imaginaire);


        // ------------------------------------------------------------------
        // Couche des arrêts de Tram
        function pop_arret_tram_8(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                //mouseover: highlightFeature,
            });
            var popupContent = 'Station de Tram "' + (feature.properties['Station'] !== null ? autolinker.link(feature.properties['Station'].toLocaleString()) : '') + '"\
                    ';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

/*
        function style_arret_tram_8_1() {
            return {
                pane: 'pane_arret_tram_8',
                icon: L.icon({
                    iconUrl: 'markers/arret_tram_8.png',
                    iconSize: [28, 28]
                    })
            }
        }
*/
        var tramIcon = L.icon({
            iconUrl: './carte_pauline_roland/markers/arret_tram_8.svg',
            iconSize: [10, 10]
        });


        map.createPane('pane_arret_tram_8');
        map.getPane('pane_arret_tram_8').style.zIndex = 408;
        map.getPane('pane_arret_tram_8').style['mix-blend-mode'] = 'normal';
        var layer_arret_tram_8 = new L.geoJson.multiStyle(json_arret_tram_8, {
        //var layer_arret_tram_8 = new L.geoJson(json_arret_tram_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_arret_tram_8',
            layerName: 'layer_arret_tram_8',
            pane: 'pane_arret_tram_8',
            onEachFeature: pop_arret_tram_8,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {icon: tramIcon});
                //return L.marker(latlng, style_arret_tram_8_1(feature));
            },
        ]});
        bounds_group.addLayer(layer_arret_tram_8);
        map.addLayer(layer_arret_tram_8);


        // ------------------------------------------------------------------
        // Définition du texte
        setBounds();

/*
        // --------------------------------------
        // Pour la végétation
        var i = 0;
        layer_vegetation_0.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['NOM'] !== null?String('<div style="color: #8f8f8f; font-size: 10pt; font-weight: bold; font-family: \'Liberation Sans\', sans-serif;">' + layer.feature.properties['NOM']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_vegetation_0'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        // --------------------------------------
        // Pour la route        

        var i = 0;
        layer_routes_1.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['NOM_BAN_G'] !== null?String('<div style="color: #8f8f8f; font-size: 10pt; font-weight: bold; font-family: \'Liberation Sans\', sans-serif;">' + layer.feature.properties['NOM_BAN_G']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_routes_1'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });


        resetLabels([layer_vegetation_0,layer_routes_1]);
        map.on("zoomend", function(){
            resetLabels([layer_vegetation_0,layer_routes_1]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_vegetation_0,layer_routes_1]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_vegetation_0,layer_routes_1]);
        });
*/

        // ------------------------------------------------------------------
        // Ajout du controleur de couche

var overlayMaps = {
    "Points d'ouie": layer_points_ouie_7,
    "Balade sonore": layer_balade_sonore_5,
    "Balade commentée": layer_balade_commentee_6,
    "Station de Tram": layer_arret_tram_8
};

        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);