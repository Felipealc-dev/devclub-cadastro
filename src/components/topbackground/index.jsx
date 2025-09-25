import { Background } from './styles'
import UsersImage from '../../assets/users.png';

function TopBackgound() {
    return (
        <Background>
            <img src={UsersImage} alt='imagens-usuario'/>
        </Background>
    )
}

export default TopBackgound