import { Map } from "@maptiler/sdk"

export interface MapState {
	isMapReady: boolean
	map?: Map
}
const INITAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}

interface MapContextProps {}
