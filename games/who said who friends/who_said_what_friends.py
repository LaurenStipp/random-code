import winsound
##########Intro##########
print ("Welcome to WHO SAID WHAT FRIENDS EDITION!")
print ("It's easy to play. Just type the name of which Friends character said the line given.")
##########Question 1##########
print ("Question 1:")

answer1 = input("Hey, how you doin'... ")

if answer1 == "Joey":
    winsound.PlaySound("howdoing.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 2##########
print ("Question 2:")

answer2 = input("I said share, not scare! ")

if answer2 == "Ross":
    winsound.PlaySound("notscare.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 3##########
print ("Question 3:")

answer3 = input("I think you've gone over to the bad place. ")

if answer3 == "Chandler":
    winsound.PlaySound("badplace.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 4##########
print ("Question 4:")

answer4 = input("NOOOOO! ")

if answer4 == "Monica":
    winsound.PlaySound("noo.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 5##########
print ("Question 5:")

answer5 = input("Ok, this is the most romantic disease I've ever had. ")

if answer5 == "Phoebe":
    winsound.PlaySound("disease.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 6##########
print ("Question 6:")

answer6 = input("It's just like a bloodbath in here today! ")

if answer6 == "Rachel":
    winsound.PlaySound("blodbath.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 7##########
print ("Question 7:")

answer7 = input("Dude, we are so gonna party! ")

if answer7 == "Ross":
    winsound.PlaySound("so_party.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 8##########
print ("Question 8:")

answer8 = input("Is it wrong that I was totally aroused by that? ")

if answer8 == "Chandler":
    winsound.PlaySound("aroused.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 9##########
print ("Question 9:")

answer9 = input("It's like a dirty math problem. ")

if answer9 == "Phoebe":
    winsound.PlaySound("dirtymth.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 10##########
print ("Question 10:")

answer10 = input("Pee into the wind! ")

if answer10 == "Joey":
    winsound.PlaySound("pee_wind.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 11##########
print ("Question 11:")

answer11 = input("Ok, see now, what I just heard, blah blah blah blah blah blah blah blah blah blah. ")

if answer11 == "Rachel":
    winsound.PlaySound("blahblah.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
dely = input("Press ENTER to continue")
##########Question 12##########
print ("Question 12:")

answer12 = input("Bite Me. ")

if answer12 == "Monica":
    winsound.PlaySound("bite_me.wav",winsound.SND_ASYNC)
else:
    winsound.PlaySound("buzzer.wav",winsound.SND_ASYNC)
##########END##########
print ("YOU HAVE FINISHED THE GAME!! CONGRATS!!")
winsound.PlaySound("fireworks.wav",winsound.SND_ASYNC)