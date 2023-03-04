# node.js筆記

## 自己做module 

### 輸出
```
製作一個function 
輸出 module 可以不寫 因為很常使用到

```
```
function bye(name) {
    console.log("bye" + name);
}
// 輸出 
module.exports.bye = bye;

```
### 引入
```
使用require引入
就可以使用try1的function了
```
```
let try1= require("./try1");
let myname ="橙汁汗";
try1.bye(myname);
```

### 分類輸出引入

```
在類別的資料夾底下新增一個index.js
將輸出的檔案都引入index.js
最後 將app.js 引入新增的資料夾
```

## 使用別人的module 


