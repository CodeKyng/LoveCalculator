function calculate() {
      var yourName = prompt("What is Your Name?");
      var theirName = prompt("What is your Crush Name?");

      var randomNumber = Math.random() * 100;
      var ans = Math.round(randomNumber);

      if (ans <= 20){
        var message = "You are not compatible!";
      }
      else if (ans <= 50){
        var message = "You can be friends!";
      }
      else if (ans <= 70){
        var message ="You are compatible!";
      }
      else {
        var message = "You are meant for each other!";
      }

      document.getElementById("answer").textContent = message;
    }


    function flamesCalc() {
      var str1 = prompt("What is Your Name?");
      var str2 = prompt("What is your Crush Name?");

      if (!str1 || !str2) {
        document.getElementById("flames").textContent = "Please enter both names.";
        return;
      }

      // Normalize: remove spaces and make lowercase so comparisons are sensible
      var arr1 = str1.replace(/\s+/g, '').toLowerCase().split('');
      var arr2 = str2.replace(/\s+/g, '').toLowerCase().split('');

      for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
          // Remove matching character from both arrays
          arr1[i] = null;          // mark as cancelled
          arr2[index] = null;      // mark as cancelled
        }
      }

      // Filter out cancelled characters and join back
      const remainingStr1 = arr1.filter(c => c !== null).join('');
      const remainingStr2 = arr2.filter(c => c !== null).join('');

      var count = remainingStr1.length + remainingStr2.length;

      var message;
      switch (count % 6) {
        case 0:
          message = "You are soulmates!";
          break;
        case 1:
          message = "You are Friends";
          break;
        case 2:
          message = "You are Lovers";
          break;
        case 3:
          message = "You are Affectionate";
          break;
        case 4:
          message = "You are Married";
          break;
        default:
          message = "You are enemies!";
      }
      document.getElementById("flames").textContent = message;
    }
