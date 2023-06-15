import { useReducer } from "react"
import * as maptilersdk from "@maptiler/sdk"
import { MapContext } from "./MapContext"
import { MapReducer } from "./MapReducer"

export interface MapState {
	isMapReady: boolean
	map?: maptilersdk.Map
}
const INITAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}
export const MapProvider = () => {
	const [state, setState] = useReducer(MapReducer, INITAL_STATE)
	return (
		<MapContext.Provider
			value={{
				...state,
			}}
		></MapContext.Provider>
	)
}
