import { Map } from "@maptiler/sdk"
import { createContext } from "react"
interface MapContextProps {
	isMapReady: boolean
	map?: Map
	//methods
}

export const MapContext = createContext({} as MapContextProps)
