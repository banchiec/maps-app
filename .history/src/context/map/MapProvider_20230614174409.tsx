import { Map } from "@maptiler/sdk"
import { MapContext } from "./MapContext"

export interface MapState {
	isMapReady: boolean
	map?: Map
}
const INITAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}
export const MapProvider = () => {
	return <MapContext.Provider value={{}}></MapContext.Provider>
}
