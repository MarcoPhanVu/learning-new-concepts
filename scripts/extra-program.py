import os
import re

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



# def getCurrLoc():
#     print("Current Directory: ", os.getcwd())


# # Just wasted some time but I guess it's pretty worth it
# # def upper_level(amount = 1):
# #     os.chdir("\\".join(os.getcwd().split("\\")[0:len(os.getcwd().split("\\")) - amount]));
# #     getCurrLoc()
# # upper_level(2)

# os.chdir("../../../Other/Self")
# getCurrLoc()

# print(os.getcwd() + "somethign")
# print()

# print("listdir= ", os.listdir())

# for fileName in os.listdir():
#     fileSource = os.getcwd() + "\\" + fileName
    

fileList =  ['.git', '.gitignore', '2022_12_05.txt', '2022_12_06.txt', '2022_12_08.txt', '2022_12_15.txt', '2022_12_16.txt', '2022_12_17.txt', '2022_12_18.txt', '2022_12_26.txt', '2022_12_31.txt', '2023_01_01.txt', '2023_01_02.txt', '2023_01_03.txt', '2023_01_04.txt', '2023_01_06.txt', '2023_01_11.txt', '2023_01_13.txt', '2023_01_14.txt', '2023_01_15.txt', '2023_01_16.txt', '2023_01_17.txt', '2023_01_18.txt', '2023_01_19.txt', '2023_01_20.txt', '2023_01_21.txt', '2023_01_22.txt', '2023_01_23.txt', '2023_01_24.txt', '2023_01_25.txt', '2023_01_26.txt', '2023_01_27.txt', '2023_01_28.txt', '2023_01_29.txt', '2023_01_30.txt', '2023_01_31.txt', '2023_02_01.txt', '2023_02_02.txt', '2023_02_03.txt', '2023_02_04.txt', '2023_02_05.txt', '2023_02_06.txt', '2023_02_07.txt', '2023_02_18.txt', '2023_02_19.txt', '2023_02_20.txt', '2023_02_25.txt', '2023_02_26.txt', '2023_03_04.txt', '2023_03_05.txt', '2023_03_06.txt', '2023_03_09.txt', '2023_03_10.txt', '2023_03_11.txt', '2023_03_14.txt', 'Little Log', 'shitlist.txt']


print()
print()
print()
print()
print()
