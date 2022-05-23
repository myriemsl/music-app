import queen from "../Assets/queen.png";
import ettajames from "../Assets/ettajames.png";
import ninasimone from "../Assets/ninasimone.png";
import charlesaznavour from "../Assets/charlesaznavour.png";
import edithpiaf from "../Assets/edithpiaf.png";

import bohemianrhapsody from "../Audio/bohemianrhapsody.mp3"
import anotheronebitesthedust from "../Audio/anotheronebitesthedust.mp3"
import showmustgoon from "../Audio/showmustgoon.mp3"
import somethingsgotaholdonme from "../Audio/somethingsgotaholdonme.mp3"
import damnyoureyes from "../Audio/damnyoureyes.mp3"
import wishiknew from "../Audio/wishiknew.mp3"
import feelinggood from "../Audio/feelinggood.mp3"
import hierencore from "../Audio/hierencore.mp3"
import laboheme from "../Audio/laboheme.mp3"
import nonjenregretterien from "../Audio/nonjeneregretterien.mp3"
import padampadam from "../Audio/padampadam.mp3"


function data() {
    return [
      {
        name: "Bohemian Rhapsody ",
        cover: queen ,
        artist: "Queen",
        audio: bohemianrhapsody ,
        active: true,
      },
      {
        name: "Another one bites the dust",
        cover: queen ,
        artist: "Queen",
        audio: anotheronebitesthedust ,
        active: false,

      },
      {
        name: "Show must go on",
        cover: queen ,
        artist: "Queen",
        audio: showmustgoon ,
        active: false,
      }, 
      {
        name: "Something's Got A Hold On Me",
        cover: ettajames ,
        artist: "Etta James",
        audio: somethingsgotaholdonme ,
        active: false,
      },      
      {
        name: "Damn your eyes",
        cover: ettajames ,
        artist: "Etta James",
        audio: damnyoureyes ,
        active: false,
      },

      {
        name: "I Wish I Knew How It Would Feel to Be Free",
        cover: ninasimone ,
        artist: "Nina Simone",
        audio: wishiknew ,
        active: false,
      },
      {
        name: "Feeling Good",
        cover: ninasimone ,
        artist: "Nina Simone",
        audio: feelinggood ,
        active: false,
      },
    
      {
        name: "Hier encore",
        cover: charlesaznavour ,
        artist: "Charles Aznavour",
        audio: hierencore ,
        active: false,
      },
      {
        name: "La Boheme",
        cover: charlesaznavour ,
        artist: "Charles Aznavour",
        audio: laboheme ,
        active: false,
      },
      {
        name: "Non je ne regrette rien",
        cover: edithpiaf ,
        artist: "Edith Piaf",
        audio: nonjenregretterien ,
        active: false,
      },
      {
        name: "Padam Padam",
        cover: edithpiaf ,
        artist: "Edith Piaf",
        audio: padampadam ,
        active: false,
      },
    
    ];
  }
  
  export default data;
  