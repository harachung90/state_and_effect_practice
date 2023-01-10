import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindoWidth] = React.useState(window.innerWidth)


    React.useEffect(()=> {
        function watchWidth() {
            setWindoWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
