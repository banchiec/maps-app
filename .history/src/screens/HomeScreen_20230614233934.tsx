import { BtnMyLocation, ReactLogo } from "../components"
import { MapView } from "../components/MapView"

export const HomeScreen = () => {
	return (
		<div>
			<MapView />
			<BtnMyLocation />
			<ReactLogo />
		</div>
	)
}
