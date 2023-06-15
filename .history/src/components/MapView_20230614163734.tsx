import { useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const mapDivRef = userRef(initialValue)
	if (isLoading) {
		return <Loading />
	}
	return <div>{userLocation?.join(",")}</div>
}
