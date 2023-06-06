import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { View } from "react-native";
import { MapCallout } from "../components/map-callout.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapView({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewPort } = location;

  useEffect(() => {
    const northeastLat = viewPort.northeastLat;
    const southwestLat = viewPort.southwestLat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewPort]);

  return (
    <>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Map>
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
              }}
              coordinate={{
                longitude,
                latitude,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurants })
                }
              >
                <View>
                  <Text>hi there</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
