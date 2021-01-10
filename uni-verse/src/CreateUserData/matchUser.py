import json
sampleUser ={ "name": "Sarah Singh",
            "bio": "I listen to 90s music.",
            "email": "sarah@sjsu.edu",
            "gamer": "no gamer",
            "gender": "female",
            "hobby": "outdoor adventures",
            "major": "yes major",
            "passwordOne": "123456",
            "smoke": "yes smoker/drinker",
            "social": "outgoing",
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
      temp = obj['user_details'][i]
      newobj.append(temp)

matches = []
score = 0
for i in range (len(newobj)):
  if newobj[i]['gamer'] == sampleUser['gamer']:
    score = score + 1
  if newobj[i]['gender'] == sampleUser['gender']:
    score = score + 1
  if newobj[i]['hobby'] == sampleUser['hobby']:
    score = score + 1
  if newobj[i]['smoke'] == sampleUser['smoke']:
    score = score + 1
  if newobj[i]['social'] == sampleUser['social']:
    score = score + 1
  if score > 3:
    matches.append(newobj[i])
print(matches)


def write_json(data, filename='matches.json'):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

with open('matches.json') as jsonfile:
    data = json.load(jsonfile)
    temp = data['matchList']
    temp.append(matches)
write_json(data)
