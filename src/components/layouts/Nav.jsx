import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Logo from '../../assets/logo.png'
import Menu from "../Menu"
import Button from "../Button"


const Nav = () => {
  return (
    <nav>
        <Container>
            <Flex>
                <div className="w-1/4">
                  <Image src={Logo}/>
                </div>
                <div className="w-1/2">
                  <Flex className="justify-between">
                    <Menu text="Men"/>
                    <Menu text="Women"/>
                    <Menu text="Kids"/>
                    <Menu text="Collections"/>
                    <Menu text="Trands"/>
                  </Flex>
                </div>
                <div className="w-1/4">
                  <Flex className="justify-end gap-3">
                    <Button text="Login" className="px-[27px] py-[5px] border-[#FFD687] hover:border-[#FDBB57] duration-500 border-2 shadow-xl hover:bg-[#FDBB57]"/>
                    <Button text="SignUp" className="px-[27px] py-[5px] border-[#FFD687] hover;border-[#FDBB57] duration-500 border-2 shadow-xl hover:bg-[#FDBB57]"/>
                  </Flex>
                </div>
            </Flex>
        </Container>
    </nav>
    
    
  )
}

export default Nav