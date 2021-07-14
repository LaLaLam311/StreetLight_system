var mqtt_server = "broker.mqttdashboard.com";
// var mqtt_port = "1883";

mqtt_server = document.getElementById("mqtt_server").value;
mqtt_port = Number(document.getElementById("mqtt_port").value);
window.addEventListener('load', sub_mqtt_msg1);
window.addEventListener('load', sub_mqtt_msg2);

function send_mqtt_msg1() {
        client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
        client.connect({onSuccess:onConnect1});
        document.getElementById("pubmsg1").innerHTML = "Trying to connect...";    
    }
function onConnect1(){
        document.getElementById("pubmsg1").innerHTML = "New connection made...";
        var mqtt_destname1 = document.getElementById("mqtt_destname1").value;
        var mqtt_msg1o = document.getElementById("mqtt_msg1").value; 
        var mode = document.getElementById("mode").value
        var mqtt_msg1ob = {Id: "1.A", Data: mqtt_msg1o, Register : mode,};
        var mqtt_msg1 = JSON.stringify(mqtt_msg1ob);
    
        message1 = new Paho.MQTT.Message(mqtt_msg1);
        message1.qos = 1;
        message1.destinationName = mqtt_destname1;
        client.send(message1);
        document.getElementById("pubmsg1").innerHTML = "topic:" + mqtt_destname1 + " = " + mqtt_msg1 + " ...sent";
    } 
    // client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
    // client.onMessageArrived = onMessageArrived1;
    // client.connect({onSuccess:onConnect11});
    // document.getElementById("submsg1").innerHTML = "Trying to connect...";
    // setTimeout(sub_mqtt_msg1, "5000");
function sub_mqtt_msg1() {
        client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
        client.onMessageArrived = onMessageArrived1;
        client.connect({onSuccess:onConnect11});
        document.getElementById("submsg1").innerHTML = "Trying to connect...";
        setTimeout(sub_mqtt_msg1, "5000");
    }
function onConnect11() {
      document.getElementById("submsg1").innerHTML = "New connection made...";
      var mqtt_subname1 = document.getElementById("mqtt_subname1").value;  
      client.subscribe(mqtt_subname1);
      document.getElementById("submsg1").innerHTML = "Subscribing to topic: " + mqtt_subname1 + " ...";
    }
function onMessageArrived1(message1) {
      var result1 = message1.destinationName + " : " + message1.payloadString + "";
      var obj = JSON.parse(message1.payloadString);
      document.getElementById("sensor1").innerHTML = obj.Light;
      document.getElementById("ntp1").innerHTML = obj.NTP;
      document.getElementById("register1").innerHTML = obj.Register;
    }

function CheckButton_1(){
    client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
    client.connect({onSuccess:onConnect1b});
    document.getElementById("checkbutton1").innerHTML = "Trying to connect...";
    }
function onConnect1b(){
    document.getElementById("checkbutton1").innerHTML = "New connection made...";
    var mqtt_destname1 = document.getElementById("mqtt_destname1").value;
    var mode = document.getElementById("mode").value
    var mqtt_msg1ob = {Id: "1.A", Resend: 1, Register : mode };
    var mqtt_msg1 = JSON.stringify(mqtt_msg1ob);

    message1 = new Paho.MQTT.Message(mqtt_msg1);
    message1.destinationName = mqtt_destname1;
    client.send(message1);
    document.getElementById("pubmsg1").innerHTML = "topic:" + mqtt_destname1 + " = " + mqtt_msg1 + " ...sent";   
    }
function send_mqtt_msg2() {
    client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
    client.connect({onSuccess:onConnect2});
    document.getElementById("pubmsg2").innerHTML = "Trying to connect...";
    }
function onConnect2(){
    document.getElementById("pubmsg2").innerHTML = "New connection made...";
    var mqtt_destname2 = document.getElementById("mqtt_destname2").value;
    var mqtt_msg2o = document.getElementById("mqtt_msg2").value; 
    var mode = document.getElementById("mode").value;
    var mqtt_msg2ob = {Id: "1.B", Data: mqtt_msg2o, Register : mode};
    var mqtt_msg2 = JSON.stringify(mqtt_msg2ob);

    message2 = new Paho.MQTT.Message(mqtt_msg2);
    message2.destinationName = mqtt_destname2;
    client.send(message2);
    document.getElementById("pubmsg2").innerHTML = "topic:" + mqtt_destname2 + " = " + mqtt_msg2 + " ...sent";
    }
function sub_mqtt_msg2() {
    // Send an MQTT message
      client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
      client.onMessageArrived = onMessageArrived2;
      client.connect({onSuccess:onConnect22});
      document.getElementById("submsg2").innerHTML = "Trying to connect...";
      setTimeout(sub_mqtt_msg2, "5000");
    }
function onConnect22() {
    document.getElementById("submsg2").innerHTML = "New connection made...";
    var mqtt_subname2 = document.getElementById("mqtt_subname2").value;  
    client.subscribe(mqtt_subname2);
    document.getElementById("submsg2").innerHTML = "Subscribing to topic: " + mqtt_subname2 + " ...";
    }
function onMessageArrived2(message2) {
    var result2 = message2.destinationName + " : " + message2.payloadString + "";
    var obj2 = JSON.parse(message2.payloadString);
    document.getElementById("sensor2").innerHTML = obj2.Light;
    document.getElementById("ntp2").innerHTML = obj2.NTP;
    document.getElementById("register2").innerHTML = obj2.Register;
    }
function CheckButton_2(){
    client = new Paho.MQTT.Client(mqtt_server, mqtt_port,"");
    client.connect({onSuccess:onConnect2b});
    document.getElementById("checkbutton2").innerHTML = "Trying to connect...";
    }
function onConnect2b(){
    document.getElementById("checkbutton2").innerHTML = "New connection made...";
    var mqtt_destname2 = document.getElementById("mqtt_destname2").value;
    var mode = document.getElementById("mode").value
    var mqtt_msg2ob = {Id: "1.B", Resend: 1, Register: mode};
    var mqtt_msg2 = JSON.stringify(mqtt_msg2ob);

    message2 = new Paho.MQTT.Message(mqtt_msg2);
    message2.destinationName = mqtt_destname2;
    client.send(message2);
    document.getElementById("pubmsg2").innerHTML = "topic:" + mqtt_destname2 + " = " + mqtt_msg2 + " ...sent";   
    }