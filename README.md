This project had lots of features and have been successfully developed. I have implemented my approach for both _front-end_ and _back-end_. I tried to show different approach for same problem wherever possible. This theme is using two fonts one is **“Open Sans”** and Other is **“Meuse”** Both of them are **not free available** so decided to use _“opensans”_ indeed, which is different from “Open Sans”. I know it will have some impact to overall design but i tried to make its look and feel same as design. I hope you will like it.

#Front-End Approach
Theme is very flexible and robust. A lots of effort have been given in its structure and development. Different approaches has been taken to make its inner structure. When you look at its core you will find real beauty of it. Let me explain each and every part of this. Before that just look at the following line which will show the technology used in developing this.

_Technology used: Sass, Compass_

## File Structure
Let’s start with file structure. This file structure have all necessary files and directories to develop this theme. Following is the file structure.

_\-css/_  
_\-scss/_  
  _--base/_  
  _--Layout/_  
  _--module/_  
  _--partials/_  
  _--state/_  
  _--theme/_  
_-fonts/_  
_-images/_  
_-js/_  
_-templates/_  
_-config.rb_  
_-favion.ico_  
_-logo.png_  
_-opencharity.info_  
_-template.php_  

So this is the abstract to files structure. Let’s see briefly each folder

1. _Scss & Css_ - These directories have all scss and css Files respectively. The structure has been developed on “Smacss” based architecture.
2. _Fonts_ - This folder has Fontawesome Font Files.
3. _Js & images_ - As name suggests js libraries and images are in it.
4. _Template_ - This directory has general page layout that will be used as default by all other pages. 
5. All other file, are necessary for this theme.

## Base
All elements have been initially defined with default properties and html with font size of 16px. The common font-family is “OpenSans”.

## Layout
As of now i have only homepage so i am not able to design its layout for whole site. I tried to make as general and flexible so that it can be used in future easily. I took fixed layout approach and designed with five different breakpoints all breakpoints have their respective predefined width as you can see below. For Screen Size below 799px the width will have 100% screen width but will have 15px padding from left and right.

### Breakpoints
_iPhone:_             375px  (width: 100% with padding 15px)  
_Android Mobiles:_    639px  (width: 100% with padding 15px) (Special Case)  
_General Mobile:_     799px  (width: 720px)  
_Tablets:_ 	      1080px (width: 1000px)  
_Desktop:_            1280px ( width: 1200px)   

## Modules / Reusable Components

Opencharity page has some section in which similar components are being used. So i decided to make them as module in “module” Folder. In respect to “Scss” I have decided to make their mixin then can be called in module file. So following are the components that have been developed in mixin.

### Transparent Button (trans_button)
As you can see in header with name “Join Now”. This is very common and can be used over and over. So this has been taken in mixin. To get its details you can check mixin file. All Components in mixin have their documentation in comments just above them.

### Solid Color Button (solid_button) 
This is another most common and general button. This also has been taken in mixin. Its structure is same as “Register” in event Bar. Its details can be checked in mixin.

### Get Involved Section (get_involved)
This section has three block which all have same structure and design so this has been taken in mixin. Its details can be checked in mixin file.

### Our Mission 
This section also have blocks and can be converted into module. I have tried here to give another approach. I have created a file for this section and all its theming defined in this file as module. You can check our_mission.scss In this section all component have similar classes so i have developed by taking common class and write their css in them. If this section is not being used in another place so it is better to use a single file otherwise mixin will be good approach.

### Blogs
This section has also modular structure so can be written in mixin and seperate file. But this is a slider so i have consider it in state as it will get change on screen size. But can be put in module folder.

## Sections
It is worth mention here that i have taken a approach in which i have decided to attach each file with their respective block by this method If similar block is to be shown then all will have same file and in future if block gets removed it css will not render with page so this is basic and most important step to make your site protect with unnecessary files.

### Header 
This section has a background image which is configurable so i decided to make that happen i have to use js approach to apply user defined image. Thanks to Drupal Setting object by which i have applied background image.

### Get Involved and Our Mission Section
As i already explained their module approach that was only for one block but to arrange all blocks i have used flex properties to make them straight and in center.

### Our Members and Blogs Section
This section have slider which has been developed by slick library.

## Partials Directory
This directory have exclusive scss files that can only be used by scss files. They do not get converted into css. This directory has three files namely mixin, variables and importer. Mixin and Variables are very useful in architecture setup. I have created variables files with all variables that can be use in scss files. You can check in partials directory.

## Compass
This is very important while developing theme as it has many predefined mixins that can be directly included in your project.

# Backend Approach
From the backend side i tried to use different modules to make the site fast. Following is the list of modules that have been installed for this site.

1. Adminimal Theme (adminimal_theme)
2. Adminimal Toolbar (adminimal_admin_menu)
3. Ctools (ctools)
4. Views (views)
5. Date (date)
6. Link (link)
7. Field Collection (field_collection)
8. Social Media Links (social_media_links)
9. Bean (bean)
10. Context (context)
11. Ckeditor (ckeditor)
12. Datepicker (datepicker)
13. Empty Front Page (empty_front_page)
14. Devel (devel)
15. Jquery Update (jquery_update)
16. Nodequeue (nodequeue)

With the help of these modules i have created some content type which you can check with admin credentials. To check field structure of content type [Click Here](https://docs.google.com/document/d/1njK1U-XuTvhAbg48y-hrnfWsly4nRAGtrtTzr-6JlVw/edit#heading=h.80at22qjwm3c)

## Views
I have created blocks with the help of views for each section as it is very useful module and very important.

## Nodequeue
This module is generally useful when you have some of your choice nde to be shown. In blog section we can have two approaches
Show all blogs or certain number of blogs as soon as it gets published.
Only predefined of our choice blogs can be show with the help of nodequeue.

I have decided to go with 2nd option.
