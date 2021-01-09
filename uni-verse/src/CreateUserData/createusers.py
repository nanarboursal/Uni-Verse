import json
data= {}
def inputUserData(data):
  nameKey = "name"
  nameVal = str(input("Enter the user name: "))
  data.update({nameKey:nameVal})
  bioKey = "bio"
  bioVal = str(input("Enter the user's bio: "))
  data.update({bioKey:bioVal})
  emailKey = "email"
  emailVal = str(input("Enter the user email: "))
  data.update({emailKey:emailVal})
  gamerKey = "gamer"
  gamerVal = str(input("Enter no gamer/yes gamer: "))
  data.update({gamerKey:gamerVal})
  genderKey = "gender"
  genderVal = str(input("Enter male/female: "))
  data.update({genderKey:genderVal})
  hobbyKey = "hobby"
  hobbyVal = str(input("Enter hobby arts, workout, outdoor adventures, music: "))
  data.update({hobbyKey:hobbyVal})
  majorKey = "major"
  majorVal = str(input("Enter preferecnce no major/yes major: "))
  data.update({majorKey:majorVal})
  passwordOneKey = "passwordOne"
  passwordOneVal = str(input("Enter password: "))
  data.update({passwordOneKey:passwordOneVal})
  smokeKey = "smoke"
  smokeVal = str(input("Enter no/yes smoker/drinker: "))
  data.update({smokeKey:smokeVal})
  socialKey = "social"
  socialVal = str(input("Enter outgoing/homebody: "))
  data.update({socialKey:socialVal})
  userMajorKey = "userMajor"
  userMajorVal = str(input("Enter userMajor: "))
  data.update({userMajorKey:userMajorVal})
  
  return data

def write_json(data, filename='people.json'):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)


with open('people.json') as jsonfile:
    data = json.load(jsonfile)
    temp = data['user_details']
    my_details = {}
    inputUserData(my_details)
    temp.append(my_details)

write_json(data)