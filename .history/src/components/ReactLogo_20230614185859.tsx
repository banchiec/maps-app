import reactLogo from "../logo.svg"
export const ReactLogo = () => {
	return (
		<img
			src={reactLogo}
			alt="calendar Logo"
			style={{
				position: "fixed",
				bottom: "20px",
				right: "20px",
				width: "20px",
			}}
		/>
	)
}
