import json
sampleUser ={ "name": "Surabhi Gupta",
            "bio": "i like kid cudi",
            "email": "surabhi@sjsu.edu",
            "gamer": "yes gamer",
            "gender": "female",
            "hobby": "workout",
            "major": "yes major",
            "passwordOne": "2893jfewk",
            "smoke": "no smoker/drinker",
            "social": "homebody",
            "userMajor": "Engineering"
        }

#read file
with open('./people.json', 'r') as myfile:
  data = myfile.read()

obj = json.loads(data)
newobj = []
#print("name " + str(obj['user_details'][0]))
majorPref = (sampleUser['major'])
userMajor = (sampleUser['userMajor'])
if(majorPref == 'yes major'):
  for i in range (len(obj['user_details'])):
    if str(obj['user_details'][i]['userMajor']) == userMajor:
      # print(str(obj['user_details'][i]['userMajor']))
      # print(newobj)
      temp = obj['user_details'][i]
      newobj.append(temp)
      # print (newobj['user_details'][i])
print(newobj)
# print(str(obj['user_details'][2]['userMajor']))    
# print(len(obj['user_details']))
# print(obj)