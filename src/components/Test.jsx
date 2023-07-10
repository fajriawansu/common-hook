import { useContext, useImperativeHandle } from "react"
import { ThemeContext, ThemeUpdateContext } from "../MyProvider";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Test({passedInRef, dark, cbFunction}) {

    const theme = useContext(ThemeContext);
    const handleTheme = useContext(ThemeUpdateContext);

    useImperativeHandle(passedInRef, () => ({
        testAh: () => console.log("useImperativeHandle")
    }))

  return (
    <div>
        TEST
        <div>
        <button onClick={() => handleTheme()}>access context {theme?.fullname}</button>
        {/* <button onClick={() => cbFunction(c => !c)}>{dark ? "DARK" : "LIGHT"}</button> */}
        </div>
    </div>
  )
}
