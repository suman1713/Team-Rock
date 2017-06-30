<script>
var user,comp, rand_num;

    //COMPUTER CHOICE
    rand_num=Math.floor((Math.random() * 30) + 1);
    console.log(rand_num);
    if(rand_num<=10){
      comp="rock";
    }else if (rand_num<=20) {
      comp="paper";
    }else if (rand_num<=30){
      comp="scissors";
    }
    console.log(comp);

<script>