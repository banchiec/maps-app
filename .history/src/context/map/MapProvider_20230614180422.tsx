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

interface Props {
	children: JSX.Element | JSX.Element[]
}
export const MapProvider = ({ children }) => {
	const [state, setState] = useReducer(MapReducer, INITAL_STATE)
	return (
		<MapContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}
