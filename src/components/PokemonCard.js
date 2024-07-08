import React from 'react'

export const PokemonCard = ({img,title,classes,id}) => {
    const column = {
        display: 'inline-block',
        width: "25%",
        
    }
    const classColumn = {
        display: 'inline-block',
    }
    const image = {
        width: "360px",
        height: "360px",
        backgroundColor: "#DCDCDC"

      };
      const card = {

      }
      const idStyle = {
        color: "grey",
        paddingLeft: "15px"
      }
      const titleStyle = {
        paddingLeft: "15px"
      }
  return (
    <div style={column}>
        <div >
            
        <img style={image}
        src={img}
        />
        <h3 style={idStyle}>#{id}</h3>
        <h1 style={titleStyle}>{title}</h1>
        <div>
        {
        classes.map((cl, index)=>{
          const pokemonClassStyle= {
            background: cl.color,
             width:'100px', 
             textAlign: 'center',
             padding: '5px',
             marginLeft: "10%",
             borderRadius: "15%"
        }
        const pokemonColumn = {
          
          marginLeft: "5px",
          marginRight: "5px",
          display: 'inline-block',

        }
          return <div style={pokemonColumn}><p style={pokemonClassStyle}>{cl.title}</p></div>
        })
      }
        </div>
        </div>
    </div>
  )
}
