import winsound

arg = input("Who is lord: ")

if arg == "duck":
    winsound.PlaySound("lord.wav",winsound.SND_ASYNC)
else:
    print ("YOU ARE THE DEVIL!!!")
    winsound.PlaySound("dishonor.wav",winsound.SND_ASYNC)
