      const now = new Date();
      const hour = now.getHours();

      if (hour < 12) {
        alert("🌞 Good Morning!");
      } else if (hour <= 18) {
        alert("🌤️ Good Afternoon!");
      } else if(hour<=21){
        alert("🌇 Good Evening!");
      }else{
        alert("🌙 Good Night!");
      }
