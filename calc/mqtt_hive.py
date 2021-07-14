# import json
# from django.shortcuts import render
# from django.http import HttpResponse

# # import Destination from Model :)
# import paho.mqtt.client as mqtt
# from typing import NewType
# # link :https://docs.python.org/3/library/typing.html
# global name 
# global sensors
# UserId = NewType('UserId', int)
# some_id1 = UserId(55)
# some_id2 = UserId(45)
# some_id = some_id1 + some_id2
# x = '{"src":1,"dest":0,"datalora":{"light":82}}'
# # The callback for when the client receives a CONNACK response from the server.
# def on_connect(client, userdata, flags, rc):
#     if rc == 0:
#         print("Connected successfully")
#     else:
#         print("Connect returned result code: " + str(rc))
# # The callback for when a PUBLISH message is received from the server.
# def on_message(request, userdata, msg):
#     #    print("Received message: " + msg.topic + " -> " + msg.payload.decode("utf-8"))
#     name = msg.payload.decode("utf-8") 
#     print(name)
# # create the client
# client = mqtt.Client()
# client.on_connect = on_connect
# client.on_message = on_message

# def sub(request, name):
#     y = json.loads(name)
#     sensors = y["src"]
#     print(sensors)
#     return render(request, 'index11.html', {'sensors' : sensors})

# # client.tls_set(tls_version=mqtt.ssl.PROTOCOL_TLS)

# # set username and password
# client.username_pw_set("Lalalam", "Tonytonychopper123")
# # connect to HiveMQ Cloud on port 8883
# client.connect("broker.mqttdashboard.com", 1883)
# # client.loop_start()
# # subscribe to the topic "my/test/topic"
# client.subscribe("lora1/measures")
# # publish "Hello" to the topic "my/test/topic"
# client.publish("lora1/commands", "bitch")
# # client.loop_stop()

# # Blocking call that processes network traffic, dispatches callbacks and handles reconnecting.
# client.loop_forever()