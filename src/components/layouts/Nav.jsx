import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Logo from '../../assets/logo.png'


const Nav = () => {
  return (
    <nav>
        <Container>
            <Flex>
                <div className="w-1/4">
                  <Image src={Logo}/>
                </div>
                <div className="w-1/2"></div>
                <div className="w-1/4"></div>
            </Flex>
        </Container>
    </nav>
    
    
  )
}

export default Nav