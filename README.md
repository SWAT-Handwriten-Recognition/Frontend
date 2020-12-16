# Frontend <3

![React Logo](https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png)

## Table of content

1. [Summary](#summary)
2. [Folder Structure](#folder-structure)
3. [Technologies used in the project](#technologies-used-in-the-project)
4. [Components](#components)
5. [Pages description](#pages-description)
6. [Deploy](#deploy)
7. [How to install](#how-to-install)
    * [How to set it up?](#how-to-set-it-up)
    * [How to run it?](#how-to-run-it)
    * [How to test it?](#how-to-test-it)

---

## Summary

*Handwritten* is an online system that allows to the user verify that the signature that he/she enters into the system, by using a Siamese Convolutional Neural Network.

The user saves three different images from his/her signature, and then they are uploaded into a database. When the user has to certified a document or a file, he/she upload the document and then the system asks for a signature to prove the real user wants to certified, if the verification is above 90%, the system approves the signature, if not, an error message is shown.

[This process is described in Data Science Repository](https://github.com/SWAT-Handwritten-Recognition/DataScience#siamese-neural-networks-to-compare-two-signatures).

## Folder Structure

- public :eye: 
- src :file_folder: 
  - tests :arrows_counterclockwise: 
  - assets :baggage_claim: 
  - components :computer: 
  - pages :page_facing_up: 
  - utils :100: 

## Technologies used in the project

The present project use 100% REACT to be shown in the frontend.

![Logo](https://lh3.googleusercontent.com/proxy/owX_K0_PR2dsVFiJnaAG0u2CWdcKRaQXnk0nIONQwMHBEL9V5cVFdvyrAKngGkClvKR3AV337ubV-I36PnKjhEA3X0s_IGAmjfAM64UrTg)

REACT shows its face in this project and makes it look amazing, but it can not just mount an entire project like this by itself, therefore other libraries are needed to make it even more awesome, these libraries are described next.
* eslint
* disqus
* enzyme
* jest
* husky
* webpack
* babel

## Components

* App
* Features
* Header
* HomeAnimation

## Pages description

* Application
* Home
* Sign In
* Sign Up

## Deploy

We deploy our app in firebase fire, see deploy [here]().

## How to install

In your bash, or command prompt.
```
git clone git@github.com:Team-C5-News-Inc/Frontend.git
```
### How to set it up?
```javascript
npm i
```
### How to run it?
```javascript
npm run dev
```
### How to test it?
```javascript
npm t
```
