import Image from 'next/image';
import Link from 'next/link';
import Logo from '../imagenes/happyFace.png'


function Header(){

    return(
    <>
        <header>
            <div id ="header">
                <Image src={Logo} alt ="logo" width ={100} height ={100}/><h1>Pagina de Prueba</h1>
            </div><br/>
            <div id ="nav">
                <nav>
                    <ul>
                        <li><Link href ='/'>Inicio</Link></li>
                        <li><Link href ='/sobrenosotros'>Sobre Nosotros</Link></li>
                        <li><Link href ='/catalogo'>Catalogo</Link></li>
                        <li><Link href ='/contacto'>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);

}

export default Header