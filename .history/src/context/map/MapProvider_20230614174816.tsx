import { Map } from "@maptiler/sdk"
import { MapContext } from "./MapContext"
import { useReducer } from "react"
import { MapReducer } from "./MapReducer"

export interface MapState {
	isMapReady: boolean
	map?: Map
}
const INITAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}
export const MapProvider = () => {
	const [state, setState] = useReducer(MapReducer, INITAL_STATE)
	return <MapContext.Provider value={{}}></MapContext.Provider>
}
