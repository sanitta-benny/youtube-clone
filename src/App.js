
import './App.css';

function App() {
  return (
 
  <div className='main' style={{width:"100%",display:"flex",flexWrap:"wrap"}}>

<nav class="navbar navbar-expand-lg bg-dark" style={{display:"flex",flexWrap:"wrap",zIndex:"1",position:'fixed',width:"100%"}}>
  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%"}} class="container-fluid">

<div style={{display:"flex",flexWrap:'wrap'}}>
          <div id='btn0' >  <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{height:"40px",width:"40px",border:"transparent"}}><i  class="fa-solid fa-bars fa-lg" style={{color: "#0d0d0d"}}></i></button></div>
            <button type="button"  style={{border:"transparent",display:"flex",backgroundColor:'transparent'}}><img src='https://cdn-icons-png.flaticon.com/256/1384/1384060.png'style={{height:"40px",width:'40px',marginLeft:"10px"}}/></button>
            <p style={{height:'auto',width:"auto"}}><b style={{fontSize:'20px',color:"white"}}>    YouTube</b></p>
</div>
    
        <form class="bg-dark" style={{display:"flex",flexWrap:"wrap",width:"35%"}}>
    <div style={{width:'100%'}}  class="input-group">
     
      <input  type="text" style={{width:"80%",height:"40px",border:"3px,0px,0px,0px",border:"black", borderRadius:"40px,0px,40px,0px",color:"white"}} class="form-control bg-dark" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" defaultValue={"search"}/>
      <span style={{border:"black"}}   class="input-group-text bg-dark" id="basic-addon1"><img src='https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png'style={{height:"20px",width:"20px"}}/></span>

     <div id='btn0' style={{height:"35px",width:'35px',borderRadius:"100%"}}>  <button style={{border:"transparent",height:"35px",width:"35px",borderRadius:"100%",backgroundColor:"transparent"}} type="button" ><i class="fa-solid fa-microphone" style={{color: "white"}}></i></button></div>
    </div>
  </form>
  <div style={{display:"flex",flexWrap:'wrap'}} class="btn-group" role="group" aria-label="Basic example">
<div id='btn0' style={{height:"40px",width:"40px",borderRadius:'100%'}}>  <button id='btn0' style={{border:"transparent",height:"40px",width:"40px",borderRadius:"100%",backgroundColor:"transparent"}} type="button" ><i id='btn0'  class="fa-solid fa-video fa-lg" style={{color: "white"}}></i></button></div>
<div id='btn0' style={{height:"40px",width:'40px',borderRadius:"100%"}}>  <button style={{border:"transparent",height:"40px",width:"40px",borderRadius:"100%",backgroundColor:"transparent"}} type="button" ><i class="fa-regular fa-bell fa-lg" style={{color: "white"}}></i></button></div>
<button  style={{border:"transparent",height:"45px",width:"45px",borderRadius:"100%",backgroundColor:"transparent"}} type="button" ><img src="https://yt3.ggpht.com/ytc/APkrFKZngBlYoUeDVp87TCiaRDRkvdvsXjJ0FMXHxapmqoVPOPl-jLyx65gcuwocGhjk=s88-c-k-c0x00ffffff-no-rj" style={{height:"25px",width:"25px",borderRadius:"100%"}} alt="" /></button>
</div>
 
   
    
  
    
   
  </div>
</nav>
<div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",width:"100%"}}>
<div id='btn1' style={{marginTop:"40px",width:"4%",marginTop:"100px",backgroundColor:"black"}}>
    <div style={{backgroundColor:"black",width:"4%"}}>
    <div style={{textAlign:"center"}}>
        <div> <i class="fa-solid fa-house " style={{color: "white"}}></i></div>
        <div style={{color:"white"}}>Home</div>
    </div>
    <div style={{textAlign:"center"}}>
        <div style={{height:"25px",marginTop:"-20px"}}><img src='https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15253.png' style={{height:"25px",width:"25px"}}/></div>
  
  
        <div> <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-white-icon.png' style={{height:'25px',width:"25px"}}/></div>
        <div style={{color:"white"}}>Shorts</div>
    </div>
   
     
  
<div style={{textAlign:"center"}}>
        <div> <img src='https://www.citypng.com/public/uploads/preview/hd-white-youtube-yt-logo-symbol-icon-png-11637043675gcvxg522qx.png'style={{height:"25px",width:"25px"}}/></div>
        <div style={{color:"white"}}>Subscriptions</div>
</div>
   
    
    
    <div style={{textAlign:"center"}}>
        <div><img src='https://www.citypng.com/public/uploads/preview/hd-white-youtube-yt-logo-symbol-icon-png-11637043675gcvxg522qx.png ' style={{height:"25px",width:'25px'}}/></div>
        <div style={{color:"white"}}>You</div>
    </div>

     


    
    </div>
    
  </div>


  <div style={{marginTop:"10px",width:"90%"}}>
<div className='btn1' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",marginTop:"70px",width:"90%", zIndex:'1',position:"fixed "}}>
  <button  type="button" className="btn btn-dark btn1">All</button>
  <button   type="button" className="btn btn-secondary btn1"><b>Music</b></button>
  <button  type="button" class="btn btn-secondary btn1"><b>Tamil Cinema</b></button>
  <button type="button" class="btn btn-secondary btn1"><b>Javascript</b></button>
  <button   type="button" class="btn btn-secondary btn1"><b>News</b></button>
  
  <button type="button" class="btn btn-secondary btn1"><b>Tamil cinema drama</b></button>
  <button   type="button" class="btn btn-secondary btn1"><b>Watched</b></button>
  <button type="button" class="btn btn-secondary btn1"><b>News</b></button>
  <button type="button" class="btn btn-secondary btn1"><b>English movies</b></button>
   <button   type="button" class="btn btn-secondary btn1"><b>Malayalam Movies</b></button>

</div>


<div style={{marginTop:"20px",justifyContent:"space-evenly",display:"flex",flexWrap:"wrap",marginTop:"100px",width:"100%"}}>
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/LlvBzyy-558" title="React Hooks Course - All React Hooks Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"  src="https://www.youtube.com/embed/-4fyyyQjsz8" title="How to Improve Performance in React with Code Splitting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250" src="https://www.youtube.com/embed/0riHps91AzE" title="Learn React JS with Project in 2 Hours  | React Tutorial for Beginners | React Project Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  
<iframe  width="300" style={{marginTop:"30px",borderRadius:"25px"}} height="250" src="https://www.youtube.com/embed/DAl3dbTnAgw" title="This will change flutter development forever | Dhiwise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/S2GfjaTbJa4" title="Programming Is NOT Enough | Add these 7 skills…" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250" src="https://www.youtube.com/embed/BkzYfW1H8LI" title="FASTEST Way to Learn Coding and ACTUALLY Get a Job" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/vVCakfUchVI" title="How to Introduce Yourself In English (Like a Native Speaker!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  
<iframe style={{marginTop:'30PX',borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/DaweP1MTOgs" title="React js Todo App Malayalam | Part 1 | വെബ് ഡെവലപ്മെന്റ് | malayalam tutorials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</div>
<div style={{marginTop:"35px",marginLeft:"15px",display:"flex",flexWrap:'wrap',justifyContent:'space-evenly'}}><h5><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png'style={{height:"30px",width:"30px"}}/>  <b style={{color:'white'}}>Shorts</b></h5></div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"30px"}}>

<iframe  width="230" height="480" src="https://www.youtube.com/embed/J_5zLDLVCsk" title="Fastest Way to Learn React in 2023 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="230" height="480" src="https://www.youtube.com/embed/-IPKPZerQbo" title="React.js best Practices in 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="230" height="480" src="https://www.youtube.com/embed/BNaPTkadnao" title="This Is Why React Prints All Console Logs Twice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="230" height="480" src="https://www.youtube.com/embed/hw-c1vUMkRA" title="Failing in React JS Interview ? Interview guide | #shorts @NishaSingla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="230" height="480" src="https://www.youtube.com/embed/m1_ppy3HOEU" title="How to learn ReactJS in 30 Days 👩‍💻 #technology #programming #software #react #career" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"40px"}}> <button style={{color:"black",borderRadius:"25px",border:"1px solid gray"}}  type="button" class="btn btn-secondary"><b style={{paddingLeft:"60px",paddingRight:"60px"}}>Show more</b></button></div>

<div style={{marginTop:"20px",justifyContent:"space-evenly",display:"flex",flexWrap:"wrap",marginTop:"100px"}}>
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/LlvBzyy-558" title="React Hooks Course - All React Hooks Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"  src="https://www.youtube.com/embed/-4fyyyQjsz8" title="How to Improve Performance in React with Code Splitting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250" src="https://www.youtube.com/embed/0riHps91AzE" title="Learn React JS with Project in 2 Hours  | React Tutorial for Beginners | React Project Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  
<iframe  width="300" style={{marginTop:"30px",borderRadius:"25px"}} height="250" src="https://www.youtube.com/embed/DAl3dbTnAgw" title="This will change flutter development forever | Dhiwise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/S2GfjaTbJa4" title="Programming Is NOT Enough | Add these 7 skills…" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  
<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250" src="https://www.youtube.com/embed/BkzYfW1H8LI" title="FASTEST Way to Learn Coding and ACTUALLY Get a Job" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{marginTop:"30px",borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/vVCakfUchVI" title="How to Introduce Yourself In English (Like a Native Speaker!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  
<iframe style={{marginTop:'30PX',borderRadius:"25px"}} width="300" height="250"src="https://www.youtube.com/embed/DaweP1MTOgs" title="React js Todo App Malayalam | Part 1 | വെബ് ഡെവലപ്മെന്റ് | malayalam tutorials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</div>
</div>



</div>






{/* offcanvas */}
<div style={{width:"300px"}} class="offcanvas offcanvas-start bg-dark" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div>
    <div  style={{color:"white",display:"flex",flexDirection:"column"}}>
      <button class="btn btn-dark" ><i class="fa-solid fa-house " style={{color: "white"}}></i> Home</button>
      <button  class="btn btn-dark"><img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-white-icon.png' style={{height:"25px",width:"25px"}}/> Shorts</button>
      <button  class="btn btn-dark"> <img src='https://img.icons8.com/?size=64&id=47866&format=png' style={{height:'25px',width:"25px"}}/>  Subscriptions</button>
      <button  class="btn btn-dark"><b>  You  <i class="fa-solid fa-chevron-right" style={{color: "white"}}></i></b></button>
      <button  class="btn btn-dark"><i class="fa-regular fa-user" style={{color: "white"}}></i>  Your channel</button>
      <button  class="btn btn-dark"><i class="fa-solid fa-clock-rotate-left fa-lg" style={{color: "white"}}></i>  History</button>
      <button  class="btn btn-dark"> <img src='https://img.icons8.com/?size=24&id=Zfau2zYMEVLb&format=gif'/>  Your videos</button>
      <button  class="btn btn-dark"><i class="fa-regular fa-clock" style={{color: "white"}}></i>  Watch Later</button>
      <button  class="btn btn-dark"><i class="fa-solid fa-chevron-down" style={{color: "white"}}></i>  Show more</button>
      <button  class="btn btn-dark"><b>Subscriptions</b></button>
      <button  class="btn btn-dark"><img src='https://play-lh.googleusercontent.com/k0A88RrzsPqX1D75am5_bOJ3M2Y0R0fXi7gu4BfgmS2GkuUNvFnSLMmCaLBK0BhQ9Es ' style={{height:"25px",width:'25px'}}/>  Manorama News</button>
      <button  class="btn btn-dark"><img src='https://zeelwebsite.s3.amazonaws.com/zeetele/wp-content/uploads/2018/12/Zee-Channel-Logo_Zee-Keralam-HD_280-X-200.jpg'style={{height:"25px",width:"25px"}}/>  Zee keralam</button>
      <button  class="btn btn-dark"><img src='https://yt3.googleusercontent.com/sUX8tknOgZ56mv6jyViM8xQK-Txm2vBBnUjkAlruIhJHQDUtVvzfcOyqtWPkGlxzoyfzw0drqKs=s176-c-k-c0x00ffffff-no-rj-mo'style={{height:'25px',width:"25px"}}/>  Ginger Media</button>
      <button  class="btn btn-dark"><img src='https://file-uploads.teachablecdn.com/40dce6a0c9e94390b88ab7a8376abae1/e0adfd181e324fb5b83aad70cad97dda'style={{height:"25px",width:"25px"}}/>  JavaScript Mastery</button>
    <button  class="btn btn-dark"><img src='https://yt3.googleusercontent.com/ytc/APkrFKYeZ__hsHh8c7ZeJB5c8h1NbAhLAfL0E9Tx1rU2vg=s900-c-k-c0x00ffffff-no-rj'style={{height:'25px',width:"25px"}}/>  Pearle Maaney</button>
      <button  class="btn btn-dark"><img src='https://upload.wikimedia.org/wikipedia/en/d/d7/StarPlus_Logo.png' style={{height:"25px",width:"25px"}}/>  StarPlus</button>
      <button  class="btn btn-dark"><img src='https://cdn.worldvectorlogo.com/logos/movieworld.svg' style={{height:"25px",width:"25px"}}/>  Movie World</button>
      <button  class="btn btn-dark"><img src='https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/45/f0/d8/45f0d8fd-b828-5ad9-d90a-dccc8d0c4148/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' style={{height:'25px',width:"25px"}}/>  English Mithra</button>
      <button  class="btn btn-dark"><b>Explore</b></button>
      <button  class="btn btn-dark"><img src='https://cdn-icons-png.flaticon.com/512/1946/1946485.png'style={{height:"25px",width:"25px"}}/>  Trending</button>
      <button  class="btn btn-dark"><i class="fa-solid fa-bag-shopping" style={{color: "white"}}></i>  Shoping</button>
      <button  class="btn btn-dark"><i class="fa-solid fa-music" style={{color: "white"}}></i>  Music</button>
      <button  class="btn btn-dark"><i class="fa-solid fa-clapperboard" style={{color: "white"}}></i>  Films</button>
      <button  class="btn btn-dark"><img src='https://static.thenounproject.com/png/2146857-200.png'  style={{height:"25px",width:"25px"}}/>  Live</button>
      <button  class="btn btn-dark"><img src='https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-game-control-line-icon-vector-png-image_1904129.jpg' style={{height:"25px",width:"25px"}}/>  Gaming</button>
      <button><img src='https://cdn.iconscout.com/icon/free/png-256/free-news-1661516-1410317.png' style={{height:"25px",width:"25px"}}/>  News</button>
      <button  class="btn btn-dark"> <img src='https://cdn-icons-png.flaticon.com/512/3891/3891808.png'style={{height:"25px",width:"25px"}}/> Sport</button>
      <button  class="btn btn-dark"><b>More from YouTube</b></button>
      <button  class="btn btn-dark"><i class="fa-brands fa-youtube" style={{color: "white"}}></i> YouTube Premium</button>
      <button  class="btn btn-dark"><img src='https://static.vecteezy.com/system/resources/previews/017/396/826/original/youtube-studio-icons-free-png.png'style={{height:"25px",width:"25px"}}/> YouTube Studio</button>
      <button  class="btn btn-dark"><img src='https://static.vecteezy.com/system/resources/previews/017/395/384/original/youtube-music-icon-free-png.png'style={{height:"25px",width:"25px"}}/>  YouTube Music</button>
      <button  class="btn btn-dark"><img src='https://static.vecteezy.com/system/resources/previews/017/396/821/non_2x/youtube-kids-google-apps-logo-free-png.png'style={{height:"25px",width:"25px"}}/>  YouTube Kids</button>
      <button  class="btn btn-dark"><img src='https://cdn-icons-png.flaticon.com/512/126/126472.png'style={{height:"20px",width:"20px"}}/>  Settings</button>
      <button class="btn btn-dark" ><img src='https://cdn-icons-png.flaticon.com/512/455/455582.png'style={{height:"20px",width:"20px"}}/>  Report history</button>
      <button  class="btn btn-dark"><img src='https://cdn.icon-icons.com/icons2/602/PNG/512/Help_icon-icons.com_55891.png'style={{height:"25px",width:"25px"}}/>  Help</button>
      <button  class="btn btn-dark"><img src='https://static.thenounproject.com/png/4808951-200.png'style={{height:"25px",width:"25px"}}/>  Send feedback</button>
     


    
    </div>
    
  </div>
  </div>
</div>

    </div>

   
  );
}

export default App;
