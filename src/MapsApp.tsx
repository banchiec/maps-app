import { MapProvider, PlacesProvider } from "./context"
import { HomeScreen } from "./screens/HomeScreen"
import "./styles.css"
import "@maptiler/sdk/dist/maptiler-sdk.css"

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<MapProvider>
				<HomeScreen />
			</MapProvider>
		</PlacesProvider>
	)
}
