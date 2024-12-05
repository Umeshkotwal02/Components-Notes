import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import "./App.css";

function App() {

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BCc9gSKVWx78lBUm3_6EoLsDqDArQkbFg6728qovzglSVvwoq194WqO5iYRhs7z9EC2tYEgXYfswtpy8_QfsyV8",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") { 
      alert("You denied for the notification");
    }
  }
  
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // Display notification or update UI
  });

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
    onMessage(messaging,(payload)=>{
      console.log("paload useeffect ::",payload)
    })
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;