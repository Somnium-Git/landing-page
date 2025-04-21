'use client'
import Button from '@/components/Button/Button'
import Text from '@/components/Text/Text'

export default function Home() {

  const c = ()=>{
    alert('oi')
  }

  return (
    <div>
      <Button styleCommon={{width: "100px", height: "100px", backgroundColor:"pink"}} styleHover={{width: "100px", height: "100px", backgroundColor:"blue"}}>
        
      </Button>

    </div>
  )
}