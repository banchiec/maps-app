export const BtnMyLocation = () => {
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
