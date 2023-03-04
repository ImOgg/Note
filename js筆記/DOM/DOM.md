# DOM筆記
```
setInterval(function名稱,時間)

clearInterval()
```

## dom obj
近代較少用這兩個
getElementsByClassName()
getElementsById()

### 使用方式一樣放css選擇器
querySlelctor() 只會抓到第一個滿足條件的項目
querySlelctorAll()


addEventListener
createElement

## Arrow Function
```
let sayHi=()=>{}
this在function裡是指這個function如果不在function裡是指window
```

```
foreach
ex:
let luckyNumbers=[7,15,66,91,10,13];
luckyNumbers.foreach(function checknum(n){
if(n>20){
    console.log(n);
}
});
```
### checknum可以不用取名字 像是下面這樣 稱為匿名函式
```
luckyNumbers.foreach(function(n){
if(n>20){
    console.log(n);
}
});
```
### 也可以用箭頭函式
```
luckyNumbers.foreach((n)=>{
if(n>20){
    console.log(n);
}
});
```
```
callback function 是指 在foreach裡 那些執行的東西
```
### 用querySlelctor可以用foreach 
```
很讚 這樣可以控制很多東西超讚 直接把getElementsByClassName() getElementsById() 這兩個的飯碗也搶來吃
```

