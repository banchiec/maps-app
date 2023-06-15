import { useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const mapDivRef = useRef<HTMLDivElement>(null)
	if (isLoading) {
		return <Loading />
	}
	return (
		<div
			ref={mapDivRef}
			style={{
				backgroundColor: "red",
				height: "100vh",
				width: "100vw",
				position: "fixed",
				top: "0",
				left: "0",
			}}
		>
			{userLocation?.join(",")}
		</div>
	)
}
