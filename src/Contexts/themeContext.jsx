import createContext from "../lib/Context";

/* function themeContext({value}){
    return createContext(value)
} */
const themeContext=createContext({
    theme:'light',
})
export default themeContext;