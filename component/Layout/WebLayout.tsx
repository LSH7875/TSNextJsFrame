import Styled from "styled-components"
import Menubar from "./menubar"
import Footer from "./footer"
// type Props = {
//     children?: JSX.Element
// };

const WebLayout : React.FC<{ children?:JSX.Element }>= ({ children }) => {
    return(
        <>
            <WebWrap>
                <Menubar/>
                    {/* <WebHeight> */}
                        {children}
                    {/* </WebHeight> */}
                {/* <Footer/> */}
            </WebWrap>
            
        </>
    )
}

export default WebLayout

const WebWrap = Styled.div`
    width : 100%;
    height: auto;
    overflow: hidden;
    background:white;
`

const WebHeight = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1vw;
    box-sizing: border-box; 
`