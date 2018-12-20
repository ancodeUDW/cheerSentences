# Cheerio-kernel: React-native/expo project for generating android apps that tells the users random sentences

This is a project created based in what I did the cheerio app for android:

* https://play.google.com/store/apps/details?id=com.blueheroes.cheerio
* https://github.com/ancodeUDW/cheerio

I wanted to create an app that could be "cloned" to do several designs. My problem with the cheerio git is that, it is 
too much integrated with its designs and resources, and I wanted to keep those out from the git project due them
being "optional".

In this project I aim to create an abstraction of the main program, and a way to load all the themes, sentences
and designs in an easy-fast way. Also, this way I can update just the kernel and all the apps that were done
with it could be updated without having to code them individually.

## Planning
### To Do:
* make a separation with the design, sentences and any specific id's or codes, with the app code itself
* add a way to save information in the cellphone, so the app remembers stadistics of the thigns the user has been using
* add a notification system that can be manage to alert the user with random sentences after some time. Might even
remember the percentage of sentences of each type to custom the sentences the user needs to see
* check the randomness of the sentences: if a sentence has pop up several times, let it has less chance to appear
in next sessions.
* Improve the animated image component so you can add more than 2 frames of animation 

### Other things for the future:
* the app let you input your own list that helps you remember it in the future
* maybe make a test to remember the list?
* backend for new sentences
* research if we can do other more appealing animations like when clicking the characters, stars or similar appears for a brief second


### Note:
* Even if I a more a pure react-native programmer, in this project I avoid using react-native (@0.56.0 at the moment of testing it)
 because it didn't work in Windows. I must check if react-native new versions work properly in windows now, although the project
 is already too advanced in Expo
 
 
ancode@gmail.com
