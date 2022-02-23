import styled from '@emotion/styled';

const Contenedor = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;

`
const Imagen = styled.img`
display: block;
width: 90px;
align-items: center;
margin-right: 3px

`
const Precio = styled.p`
font-size: 22px;
 span{
     font-weight: 700
 }

`
const Texto = styled.p`
 font-size: 18px;
 span{
     font-weight: 700
 }

`

const Resultado = ({resultado}) => {
   // console.log(resultado) // te trae todo el objeto
        const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE} = resultado;
  return (
    <Contenedor>
        <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            />
        <div>
        <Precio>El precio es de : <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del dia es de : <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del dia es de : <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 HS :<span>{ CHANGEPCT24HOUR}</span>  % </Texto>
        <Texto>Ultima actualizacion : <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado