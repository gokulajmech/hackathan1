

home();
function home(){
  const home=document.querySelector('.border');
  home.innerHTML=`<ul>
  <div class="header">
    <button class="bconfig" onclick="compose()"  >Compose</button>
     <button class="bconfig" id='inbox'>Inbox</button>
     <button class="bconfig" id='sent'>Sent </button>
     <button class="bconfig" id='draft'>Draft </button>
    <button class="bconfig" id='home' onclick="home()">Home </button>
  </div>
   
</ul>
<h1 class="welcome">you are welcome by gokul!!</h1>
`
}

function compose(){
  console.log("compose activate");
  const home=document.querySelector('.border');
  home.innerHTML=`<ul>
  <div class="header">
    <button class="bconfig" onclick="compose()"  >Compose</button>
     <button class="bconfig" id='inbox'>Inbox</button>
     <button class="bconfig" id='sent'>Sent </button>
     <button class="bconfig" id='draft'>Draft </button>
    <button class="bconfig" id='home' onclick="home()">Home </button>
  </div>
   
</ul>
<div class="compose">
  <label for="subject">Subject:</label>
<input class="subject" id="subject" type="text">
</div>
<div > 
  <textarea id="msg" class="compose" name="" id="" cols="90" rows="20"></textarea>
  <div class="compose">
    <label for="toAddress">To:</label>
    <input  required id="toAddress" type="email"   placeholder="EMAIL">
    <button class="bconfig" onclick="sendMail()">send</button>
  </div>
  
  </div>`
}

// function send(){
//   const subject=document.querySelector("#subject").value;
//   console.log(subject);
//   const msg=document.querySelector("#msg").value;
//   console.log(msg);
// }







// const nodemailer=require('nodemailer')
// const {google}=require('googleapis')

const CLIENT_ID='824388486642-vqj122kln3tcsc7d8ppe73elv983nd1j.apps.googleusercontent.com'
const CLEINT_SECRET='SGvWfNyKdpUGavYJY03pRZFg'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04Zr_b_Aga7s2CgYIARAAGAQSNwF-L9IrigYUDZJFPXfy1oGYXP-hEsrodHZR7BEml4CF_8-2AEw6_v6C5iEF6W143F_N1vDi1aU'
const oAuth2Client= new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});




async function sendMail()
{
    try{
      const subject=document.querySelector("#subject").value;
  console.log(subject);
  const msg=document.querySelector("#msg").value;
      console.log(msg);
      const toAddress=document.querySelector("#toAddress").value;
      console.log(toAddress);
      
  
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:'meblasty@gmail.com',
                clientID:CLIENT_ID,
                cleintSecret:CLEINT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:accessToken
            }
        });
    
        
      
        const mailDetails={
            from:'<meblasty@gmail.com>',
            to:subject,
            subject:msg,
            text:toAddress,
        };

        const result=await transport.sendMail(mailDetails);
        return result;
    }
    catch(error)
    {
        return error;
    }
}

// sendMail().then(result=>console.log(result));
//.catch(err=>console.log(err.message));