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
export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(MapReducer, INITAL_STATE)
	const setMap = (map: maptilersdk.Map) => {
		new maptilersdk.Marker({
			color: "#61DAFB",
		})
			.setLngLat(map.getCenter())
			.addTo(map)
		dispatch({ type: "setMap", payload: map })
	}

	return (
		<MapContext.Provider
			value={{
				...state,
				setMap,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}
