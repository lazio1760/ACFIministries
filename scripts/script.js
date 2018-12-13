// JavaScript Document

function sidebarLinkOver(name)
{
	document.getElementById(name).src = "./images/sidebarBulletOver.jpg";
}

function sidebarLinkOut(name)
{
	document.getElementById(name).src = "./images/sidebarBullet.jpg";	
}

function swapImage(file,name)
{
	document.getElementById(name).src = "./images/" + file;
}