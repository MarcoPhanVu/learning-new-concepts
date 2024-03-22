import os

# 'r' : open for reading (default)
# 'w' : open for writing, truncating the file first
# 'x' : open for exclusive creation, failing if the file already exists
# 'a' : open for writing, appending to the end of file if it exists
# '+' : open for updating (reading and writing)
print()
print()
print()
print()
print()
print(os.name)



def getCurrLoc():
    print("Current Directory: ", os.getcwd())


# Just wasted some time but I guess it's pretty worth it
# def upper_level(amount = 1):
#     os.chdir("\\".join(os.getcwd().split("\\")[0:len(os.getcwd().split("\\")) - amount]));
#     getCurrLoc()
# upper_level(2)

# os.chdir("./assets/imgs/")
getCurrLoc()

print(os.listdir())
# os.rename("battery.jpg", "notabattery.jiff")
# os.rename("notabattery.jiff", "battery.jpg")
print(os.listdir())

open("../afile.txt", "w")

print()
print()
print()
print()
print()