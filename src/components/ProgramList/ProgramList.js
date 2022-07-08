import React from 'react'
import Program from './Program/Program'

const ProgramList = () => {

    let programList = [
                {name: 'Ind vs Aus',
                category: 'Sports',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi et distinctio fugit minus, molestiae,',
                time: '3PM'  
            },
                {name: 'BGMI',
                category: 'Infotainment',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi et distinctio fugit minus, molestiae,',
                time: '5PM'    
            },
                {name: 'Man vs Wild',
                category: 'Adventure',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi et distinctio fugit minus, molestiae,',
                time: '8PM'
             },
    ]


  return (
    <>
    <div className="row">
       <Program name={programList[0].name} desc={programList[0].desc} category ={programList[0].category} time={programList[0].time} /> 
       <Program name={programList[1].name} desc={programList[1].desc} category ={programList[1].category} time={programList[0].time}/>
       <Program name={programList[2].name} desc={programList[2].desc} category ={programList[2].category} time={programList[0].time}/> 
    </div>
    
    </>
  )
}

export default ProgramList