
  function func()
  {
    var n = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + n ;
    document.getElementById("start").innerHTML = "All the best ..<br>";
    document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp 😉 Player 1 will start ..<br>";
  }
    var res = 0;
    var count = 0;
    var button1 = document.getElementById("countButton1");
    var button2 = document.getElementById("countButton2");
    var button3 = document.getElementById("countButton3");
    button1.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S 👻 PLAYER 2 TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S😉 PLAYER 1 TURN ..<br>";
      }
      var n1 = document.getElementById("countButton1").value;
      var n = document.getElementById("myText").value;
      res= res +  Number(n1);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;

      if(val <=0){
        if(count%2!=0){
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🎊😉 PLAYER 1 Is WINNER !!..👏🎈🎉🎊😉";
        }
        else{
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🌹👻 PLAYER 2 Is WINNER !!..👏🎈🎉🌹👻";
        }
      }
    }

    button2.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S 👻 PLAYER 2 TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S😉 PLAYER 1 TURN ..<br>";
      }

      var n2 = document.getElementById("countButton2").value;
      var n = document.getElementById("myText").value;
      res= res +  Number(n2);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;
      if(val <=0 ){
        if(count%2==0){
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🎊😉 PLAYER 1 Is WINNER !!..👏🎈🎉🎊😉";
        }
        else{
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🌹👻 PLAYER 2 Is WINNER !!..👏🎈🎉🌹👻";
        }
      }
    }

    button3.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S 👻 PLAYER 2 TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S😉 PLAYER 1 TURN ..<br>";
      }
      var n3 = document.getElementById("countButton3").value;
      var n = document.getElementById("myText").value;
      res= res +  Number(n3);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;
      if(val <=0){
        if(count%2==0){
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🎊😉 PLAYER 1 Is WINNER !!..👏🎈🎉🎊😉";
        }
        else{
          document.getElementById("remaining").innerHTML = "";
          document.getElementById("player1").innerHTML = "👏🎈🎉🌹👻 PLAYER 2 Is WINNER !!..👏🎈🎉🌹👻";
        }
      }
    }
