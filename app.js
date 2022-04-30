const password = document.getElementById('password');
const nameText = document.querySelector('.name');
const eye1_open = "M157.9 218.3C169.277 218.3 178.5 209.077 178.5 197.7C178.5 186.323 169.277 177.1 157.9 177.1C146.523 177.1 137.3 186.323 137.3 197.7C137.3 209.077 146.523 218.3 157.9 218.3Z";
const eye2_open = "M364.3 218.3C375.677 218.3 384.9 209.077 384.9 197.7C384.9 186.323 375.677 177.1 364.3 177.1C352.923 177.1 343.7 186.323 343.7 197.7C343.7 209.077 352.923 218.3 364.3 218.3Z" ;
const eye1_close = "M157.9 218.3C169.277 218.3 178.5 217.002 178.5 215.4C178.5 213.798 169.277 212.5 157.9 212.5C146.523 212.5 137.3 213.798 137.3 215.4C137.3 217.002 146.523 218.3 157.9 218.3Z";
const eye2_close = "M364.3 218.3C375.677 218.3 384.9 217.002 384.9 215.4C384.9 213.798 375.677 212.5 364.3 212.5C352.923 212.5 343.7 213.798 343.7 215.4C343.7 217.002 352.923 218.3 364.3 218.3Z";
const face1 =  "M368.5 325.7C368.5 351.1 359.7 374.5 344.9 392.9C325.2 417.4 295 427.3 261.2 427.3C201.9 427.3 161.7 384.9 161.7 325.6C161.7 291.7 169.5 261.6 194 241.9C212.4 227.1 235.8 218.3 261.2 218.3C320.4 218.3 368.5 266.4 368.5 325.7Z";
const face2 =  "M366.3 349.3C366.3 374.7 357.5 398.1 342.7 416.5C323 441 292.8 450.9 259 450.9C199.7 450.9 159.5 408.5 159.5 349.2C159.5 315.3 167.3 285.2 191.8 265.5C210.2 250.7 233.6 241.9 259 241.9C318.2 241.9 366.3 290 366.3 349.3Z";
const face_1 = "M277.6 416.5C218.3 416.5 170.2 368.4 170.2 309.1C170.2 283.7 179 260.3 193.8 241.9C169.3 261.6 153.7 291.8 153.7 325.6C153.7 384.9 201.8 433 261.1 433C295 433 325.1 417.3 344.8 392.9C326.4 407.6 303.1 416.5 277.6 416.5Z";
const face_2 = "M275.4 440.1C216.1 440.1 168 392 168 332.7C168 307.3 176.8 283.9 191.6 265.5C167.1 285.2 151.5 315.4 151.5 349.2C151.5 408.5 199.6 456.6 258.9 456.6C292.8 456.6 322.9 440.9 342.6 416.5C324.2 431.2 300.9 440.1 275.4 440.1Z";


let toggle = false;

password.addEventListener('focus',  () => {
   
      if (toggle == false) {
         bear();
      }
      return false;
});

nameText.addEventListener('focus', () => {
   bear_open();
});

const bear_open = () => {
   const timeline = anime.timeline({
      duration : 1000,
    });
    timeline.add({
      targets : ".eye1",
      d : [{value :  eye1_open }],
      translateX : -10 ,
      translateY : 5

    })
    .add({
      targets : ".eye2",
      d : [{value :  eye2_open }],
      translateX :  -10 ,
      translateY : 5

    },"-=1000")
    .add({
      targets : ".face",
      d : [{value :   face1}],
   },"-=900")
   .add({
      targets : ".face_",
      d : [{value :  face_1 }]
   },"-=970");
    
};
const bear = () => {
 
   const timeline = anime.timeline({
      duration : 1000,
    });
    timeline.add({
      targets : ".eye1",
      d : [{value : toggle ? eye1_open : eye1_close }],
      translateX :  0 ,
      translateY : 0
    })
    .add({
      targets : ".eye2",
      d : [{value : toggle ? eye2_open : eye2_close }],
      translateX :  0 ,
      translateY : 0
    },"-=1000")
    .add({
      targets : ".face",
      d : [{value :  toggle ? face1 : face2 }],
   },"-=900")
   .add({
      targets : ".face_",
      d : [{value :  toggle ? face_1 : face_2 }]
   },"-=970");
};



