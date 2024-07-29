import React from 'react';
/*
function TextComponent() {
  return <p>Hello!</p>; // Use <p> for paragraph text
}
function TextComponent1(){
    return <p> jin haha</p>
} */


function Wrapper() {
  return (
  /*  <div>
      <CardWrapper innerComponent={<TextComponent />} />
       <CardWrapper innerComponent={<TextComponent1 />} />
    </div>  */
    <div>
        <CardWrapper> <p>
          hekk
        </p>
            hello therec
        </CardWrapper>
        <CardWrapper>
          <div>
            hekko
          </div>
        </CardWrapper>
    </div>
  );
}
function CardWrapper({ inner }) {
  return  <div style={{ border: '2px solid black', padding: 10 }}>
      {inner}
    </div>
}


//export default Wrapper;
 