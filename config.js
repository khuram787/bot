const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_03_02_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvZ2tQb1p6Nk5NYVBGbS8zTjN1Zk5tTWdmZ0Y2YTFYeVFpaXpBVDRDa29jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWWnhPdC1WVVNEeTUtQUViLVFxblhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4ODQ1NTFkLWYyY2UtNDc3Mi1hNTNmLTI4NWZhOTkyZWMzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICA1MixcbiAgICAgIDEyMSxcbiAgICAgIDE3NyxcbiAgICAgIDIzMixcbiAgICAgIDIyMixcbiAgICAgIDEsXG4gICAgICAyOCxcbiAgICAgIDI1MyxcbiAgICAgIDgzLFxuICAgICAgMjE4LFxuICAgICAgMjMwLFxuICAgICAgMTY4LFxuICAgICAgNjAsXG4gICAgICAxNTksXG4gICAgICA1MCxcbiAgICAgIDAsXG4gICAgICAzMyxcbiAgICAgIDE2NixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMTMzLFxuICAgICAgMzksXG4gICAgICAxOTQsXG4gICAgICAxMjAsXG4gICAgICAyNDUsXG4gICAgICAxODEsXG4gICAgICAyNTUsXG4gICAgICA2NCxcbiAgICAgIDEwMixcbiAgICAgIDE1OSxcbiAgICAgIDY2LFxuICAgICAgMTgsXG4gICAgICAzMixcbiAgICAgIDExLFxuICAgICAgOTUsXG4gICAgICAyMCxcbiAgICAgIDk5LFxuICAgICAgMTI2LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1R0Y3VkxXSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk1MzExNDExOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibm90aGluZ1wiLFxuICAgIFwibGlkXCI6IFwiMTk0NDU5NTA5NzYwMTIwOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XMzh1d0dFSW5yMDcwR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNEsra0lueXQ4dzRuWjlwT0doaFNuYmZla1JuRGNXVXplazVXSWZ0TlFpMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvSE1aSmZyMWFNTVJZM3FSb3NpeDVMOWtGNXdFZG93bWRPRStNVjNZL3R5NEJGaWJVVUdXdVhteUFRVWtLcU5mVWhZdVRnM0w1TzFKOUEwUlVrc3VDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6THEzMUdDc1dWTzZ6cjVaV3JLQWZSYVh4TVlFN2paV2Q4RW1tM1ZRZXhVS2U4WFcxYVN4Y2ZoRjdaWUV1emZGZTV0ZkN6NHVQd3FHbldpc242T3lpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTUzMTE0MTE6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk5MTI1ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEYU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURhTy5qc29uIjogIntcImtleURhdGFcIjpcImRnZmRiMFBKUE1id3VpNnE5WEtCVGxwYUEzU243MUFPcmJqUmZtakFXaG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzODk4MDA2OSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
