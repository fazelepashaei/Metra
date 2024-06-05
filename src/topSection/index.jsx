import styled, { keyframes }  from "styled-components"
const rotate = keyframes`
from {top:-100px;}
to {top: 1px;}
}
`;
const TopSectionCountainer = styled.div`
position:absolute;
// width:100%;
// height:100%;
 top:1%;
left:35%;
display:flex;
flex-direction:column;
align-item:center;
 z-index:99;
 animation: ${rotate} .5s linear ;
`;


const Logo=styled.span`
display:block
top:1%;
left:35%;
margin:0;
color:#fff;
font-weight:700;
font-size:34px;
text-align:center;
text-transform: uppercase;
transition-property: opacity
`;

const Slogan=styled.p`
// margin:0;
color:#c6bebe;
font-size:20px;
// margin-top:1em;
 max-with:50px;
position: relative;
text-align:center
`;
const Country=styled.span`

color:#fff;

font-size:24px;
 text-align:center;
 margin:40%


`;

// const Donateicon=styled.svg`
// cursor:pointer;
// transition:all 250ms ease-in-out;
// `;
export   function TopSection() {
 return(
    <div>
 <TopSectionCountainer >
 
    <Logo >the{<br/>}kushit{<br/>}kingdom</Logo>
    <Slogan>The Kushites extended their influence 
        over Nubia (an ancient{<br/>} 
        region mostly covering Sudan and Southern Egypt)
        for more {<br/>} than 3000 years.</Slogan>
        <Country>EGYPT{<br/>}SUDAN</Country>
 </TopSectionCountainer>
 
 </div>
)}
