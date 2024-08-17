import React, { useEffect, useRef, useState } from 'react'

const InfoBox = () => {
    const paragraphRef = useRef(null)
    const [expand,setExpand] = useState(false)  
    const [truncatedPara,setTruncatedPara] =useState("")

    useEffect(()=>{
        if(!expand)
            setTruncatedPara(paragraphRef.current.innerHTML.slice(0,200) + '...')
    },[expand,paragraphRef])
  return (
    <div className='w-[1300px] flex flex-col justify-center items-center gap-4'>
          <h1 className='text-center font-semibold text-lg'>My Pooja Box - A One-stop Festive Decor & Gifting Shop</h1>
          <div>
                
             <p ref={paragraphRef} className={`${expand ? "block" : "hidden"} `}>
                Being a one-stop pooja samagri online store in India, My Pooja Box bridges the gap between devotees and devotion. We have sorted all your devotional needs by putting forth a wide assortment of products by making it easier for you buy pooja items online. Hindu religion is a potpourri of traditions and ceremonies. Each religious occasion demands for special items as per the rituals. The concept of My Pooja Box revolves around bringing every required product on a single platform. We help you buy pooja items online in India. Decorative pooja thalis, dhoop, hawan samagri, <a href="https://www.mypoojabox.in/collections/god-idols-murti">god’s idols</a>
                " etc., we have a wide line-up of products to choose from. The idols and thalis will give you a glimpse of incredible Indian craftsmanship. Don’t worry if you need a pooja mandir for home to install the figurines of Gods and Goddesses. My Pooja Box has a wide variety of temples in brass and wooden materials and other pooja samagri store as well. Our range also includes "
     <a href="https://www.mypoojabox.in/collections/home-decor">home decor gift items</a>
                " oozing with traditional charm and modern aesthetics. Beautiful tea light scented candles, lanterns, wall hangings, showpieces, and more, choose from a wide list! Those looking for feng shui products also need not go anywhere else. Our assorted collection brings you laughing buddha figurines, tortoise statues, coin trees, owl figurines, and more in just a few clicks. We even possess all your Christmas and Christmas tree decorations, that you require to get with the festive vibes! So, buy havan samagri dhoop, puja store online right from the comfort of your couch to fulfil your religious needs."
                <br></br>" Worshipping your deity with pure pooja items online offers eternal peace and joy. Hymn the name of your revered god is main path to spirituality. Pooja is an integral a part of Hindu culture and throughout the year, we tend to celebrate the pooja of various Hindu gods and goddesses. It is the only way to connect yourself to your inner soul and at the same time connect yourself to the god and gurus. It entails the use of various numbers of materials. Varied spiritual and religious accessories embellish the mind with clean thoughts. Several foremost vital Pooja items online embody god and god idols, diyas, garland, mukut, sculptures, camphor, puja thali, chandan, haldi, kumkum, bell, and many others. "
                <br></br>
     "The other religious or puja items like Rudrakshas, Panchpatra, Saligrama, dry fruits, and flower help make feel spiritually. Akshat is unbroken rice grains that are offered to god so as to achieve wealth and prosperity. They are offered to the deities while chanting. Bhasma or vibhuthi protects the user from health problem and evil by purifying him or her. "
     <br></br>
     "Pooja samagri online shopping of incense sticks facilitate to create ambiance for spiritual forces in and around us. Ever since time immortal, incense has been accustomed kindle moods. The divine fragrance that are pervaded by dhoop incense sticks calm the mind and carry the spirits and enlivens the environment. "
                </p> 
            { (!expand && truncatedPara) &&
                <p className='text-start'>{truncatedPara}</p>
            }
        </div>
<button onClick={() => setExpand(prev => !prev)} className='text-center text-[#E85992] text-sm font-medium'>{expand ? "READ LESS" : "READ MORE"}</button>
        </div>
  )
}

export default InfoBox