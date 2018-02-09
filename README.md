# WeatherApp

This is an assignment I got. The goal was to learn the basics of Docker and Docker-compose

# Manual

To get this to work you need an API key from [here](https://openweathermap.org/) and you need to add it in to an .env file

# Personal log:

- npm installs in both backens and frontend
- remember to kill and restart nodes after changes
- created api key at weatherApp
- ? = shortened if (and ":" after it is else)
- => = "lambda" is a shortened function
- Reading docker docs: not the most noob friendly material
- fighting with compose, docs are hard to understand
- almost got docker-compose build to work, errors about the yml file, so we are getting there
- if i use compose, do I need the Dockerfile as well? I have many questions and not a lot of answers
- Yes, I need both of them
- Created Dockerfiles and added the build commands
- IT IS ALIVE! well sort of; after actually understanding stuff in this handy [tutorial](http://www.summa.com/blog/docker-for-developers-composing-multi-container-networks) I learned what was needed in the Dockerfile in order to get the this to build
- It seems that in order to actually show anything on the browser you need to define a port where it actually sends it! (ain't that something)
- Houston we have a liftoff! The mandatory part is finished
- With my mighty friends: Visual Code plugins Prettier and ESlint I defeated the evil lint errors.

# My final thoughts:

This Docker business was all new to me. I had heard about it from my friends who decided to specialize in the Infra side (as I chose the programming). The documentation was aimed at people who have had some experience with this stuff, so it was quite hard to understand what all of the example Dockerfiles and docker-compose.yml files were about, also almost all of the examples and tutorials were using python and that confused me a bit.

I am really proud of myself for picking up the bare basics of Docker and Docker compose this fast. I know I have just scratched the surface of this topic but it is a start. This was a great way to test my capabilities as a programmer <3
