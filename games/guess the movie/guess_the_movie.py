import winsound
##########INTRO##########
print ("Welcome to GUESS THE MOVIE!")
print ("The game is simple. A quote from a movie will play, then you will have to type what movie that quote is from.")
##########QUESTION 1##########
print ("Question 1")
winsound.PlaySound("howstuff.wav",winsound.SND_ASYNC)
movie1 = input("What movie is this quote from? ")
if movie1 == "Grease":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 2##########
print ("Question 2")
winsound.PlaySound("anangel.wav",winsound.SND_ASYNC)
movie2 = input("What movie is this quote from? ")
if movie2 == "Forest Gump":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 3##########
print ("Question 3")
winsound.PlaySound("style.wav",winsound.SND_ASYNC)
movie3 = input("What movie is this quote from? ")
if movie3 == "Toy Story":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 4##########
print ("Question 4")
winsound.PlaySound("likesmeformybody.wav",winsound.SND_ASYNC)
movie4 = input("What movie is this quote from? ")
if movie4 == "Cars":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 5##########
print ("Question 5")
winsound.PlaySound("anangel.wav",winsound.SND_ASYNC)
movie5 = input("What movie is this quote from? ")
if movie5 == "Forest Gump":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 6##########
print ("Question 6")
winsound.PlaySound("inconceivable.wav",winsound.SND_ASYNC)
movie6 = input("What movie is this quote from? ")
if movie6 == "Princess  Bride":
    print("CORRECT")
else:
    print("INCORRECT")
##########QUESTION 7##########
print ("Question 7")
winsound.PlaySound("world.wav",winsound.SND_ASYNC)
movie7 = input("What movie is this quote from? ")
if movie7 == "Titanic":
    print("CORRECT")
else:
    print("INCORRECT")
##########END##########
print ("YOU HAVE FINISHED THE GAME!! CONGRATS!!")
winsound.PlaySound("fireworks.wav",winsound.SND_ASYNC)