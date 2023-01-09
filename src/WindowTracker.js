import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindoWidth] = React.useState(window.innerWidth)


    React.useEffect(()=> {
        window.addEventListener("resize", function() {
            setWindoWidth(window.innerWidth)
        })
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
