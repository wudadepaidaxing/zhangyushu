"use strict";var index=1;$(function(){$(".addBtn").click(function(){index+=1,$(".a1").html(index),$(".thing").html(index);var t=(+$(".artical span").html()*index).toFixed(2);$(".dollor span").html(t)}),$(".minBtn").click(function(){var t,n;--index<0?(index=0,$(".a1").html(index),$(".thing").html(index),t=(+$(".artical span").html()*index).toFixed(2),$(".dollor span").html(t)):($(".a1").html(index),$(".thing").html(index),n=(+$(".artical span").html()*index).toFixed(2),$(".dollor span").html(n))}),$(".btnOdd").click(function(){sessionStorage.setItem("wimg",$(".max").html()),sessionStorage.setItem("wtext",$(".artical h1").html()),sessionStorage.setItem("wsinglePrice",$(".artical span").html()),sessionStorage.setItem("wnumber",$(".a1").html()),sessionStorage.setItem("wsum",$(".dollor span").html())})});