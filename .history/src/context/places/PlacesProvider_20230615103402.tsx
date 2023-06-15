import { useReducer, useEffect } from "react"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./PlacesReducer"
import { getUserLocation } from "../../helpers"
import searchApi from "../../apis/searchApi"

export interface PlacesState {
	isLoading: boolean
	userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
}
interface Props {
	children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

	useEffect(() => {
		getUserLocation().then((lngLat) => dispatch({ type: "setUserLocation", payload: lngLat }))
	}, [])
	const searchPlacesByTerm = async (query: string) => {
		if (query.length === 0) return []
		if( !state.userLocation ) return throw new Error ('No hay ubicación del usuario')
		const resp = await searchApi.get(`/${query}.json?key=${process.env.MAPTILER_KEY} `, {
			params: {
				proximity: state.userLocation?.join(',')			}
		})
		resp.data
	}
	return (
		<PlacesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</PlacesContext.Provider>
	)
}
