import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"
export const BtnMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext)
	const { userLocation } = useContext(PlacesContext)
	const onClick = () => {}
	return (
		<button
			className="btn btn-primary"
			onClick={onClick}
			style={{
				position: "fixed",
				top: "20px",
				right: "40px",
				zIndex: 999,
			}}
		>
			Mi Ubicación
		</button>
	)
}
