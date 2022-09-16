<template>
   <div> 
    <div>
        <h1>CONTACTS</h1>
        <router-link to="/"><p>home</p></router-link> / <p>contacts</p>
        <img src="" alt="">
    </div>

      
 
    <div class="body">
  <div class="box1">
        <h1>Nous joindre</h1>
        <p>Notre équipe se fera un plaisir de vous répondre.</p>
     </div>

<form >
    <div class="name">
        <input type="text" placeholder="prenom">
        <input type="text" placeholder="Nom">

      </div>
    <div class="textarea">
        
         <input type="textarea" placeholder="Raison de la visite">
         
      </div>

         <button>Envoyer maintenant</button>
        </form>  


        <div class="box1">
            <h1>CHU d'angre</h1>
               <p> 5169, rue Sherbrooke O
               Montréal, QC H4A 1T4</p>
               <p>Itinéraire vers la clinique
            </p>
           </div>
           <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.23970099708225!2d-3.958018522905616!3d5.401138005319126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1933d4b2186d5%3A0xf64a1036251b83a4!2sCentre%20Hospitalo-universitaire%20d%E2%80%99Angr%C3%A9!5e0!3m2!1sfr!2sci!4v1661617409931!5m2!1sfr!2sci" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

           </div>
        </div>
    </div>
</template>

<script>
export default {
      components:{
        ComponentAbout
      }
}
</script>

<style scoped>
    .body{
    background-color: #00035a!important;
    color: #ffff;
}
form{
    width: 50%;
    margin: 0 auto;
   
 }
 
.box1{
    text-align: center;
    padding-bottom: 35px;
}
.box1>p:nth-child(3){
    color:red
}

.name{
    display: flex;
    gap: 3%;
    padding-bottom: 30px;
    
 }
 .name>input{
    width: 100%;
    padding: 15px; 
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }

.textarea>input{
    width: 80%;
   padding: 10%;
   background-color: hsla(0,0%,100%,.2);
   border: none;
      
    }
    .textarea>p{
       font-size: 14px;
       
    }
    button{
       border: 2px solid red;
       background-color: #00035a;
       width: 20%;
       margin-left: 40%;
       padding: 17px;
       border-radius: 5px;
       margin-bottom: 35px;
       color:red;
       font-size: 15px;
    }
    .maps>iframe{
        width: 100%;
        height: 50vh;
    }
   


</style>