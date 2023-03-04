# gitnote

## 基本功能

<table>
 
  <tbody>
    <tr>
      <td>pwd</td>
      <td>顯示工作的資料夾</td>
    </tr>
    <tr>
      <td>cd</td>
      <td>改變所在的資料夾</td>
    </tr>
     <tr>
      <td>ls</td>
      <td>顯示所有項目</td>
    </tr>
     <tr>
      <td>mkdir</td>
      <td>新增資料夾</td>
    </tr>
     <tr>
      <td>cd</td>
      <td>退回上一個層級</td>
    </tr>
     <tr>
      <td>code 資料夾</td>
      <td>開啟資料夾</td>
    </tr>
     <tr>
      <td>git init</td>
      <td>初始化設定</td>
    </tr>
     <tr>
      <td>touch 檔案名稱</td>
      <td>新增檔案</td>
    </tr>
  </tbody>
 
</table>

## 設定名稱與email，確認是誰在搞

<table>
 <tbody>
    <tr>
      <td>git log</td>
      <td>可以看commit次數</td>  
    </tr>
 <tr>
     <td>git rm --cached "index.html"</td>
      <td>在commit前移除暫存 </td>
    </tr>
    <tr>
     <td>git status </td>
      <td>確認目前資料夾的狀態 </td>
    </tr>
      <tr>
     <td>git status </td>
      <td>確認目前資料夾的狀態 </td>
    </tr>
</tbody>
</table>

### 設定用戶名與信箱透過查看編寫者的用戶名與信箱
```
git config --global user.name "Chen GG"
git config --global user.email "123@gmail.com"
git config --list
```

### 上傳至雲端

<table>
 <tbody>
    <tr>
      <td>git add 檔案名稱</td>
      <td>上傳單一檔案</td>  
    </tr>
 <tr>
     <td>git add .</td>
      <td>上傳全部檔案</td>
    </tr>
    <tr>
     <td>git commit -m "add codes"</td>
      <td>提交並且備註</td>
    </tr>
</tbody>
</table>

```
若修改後 還沒有commit 又做修改需再做一次add
```
### 新增例外檔案
```
可以在資料夾新增 .gitignor 在裡面打不想上傳到雲端的 譬如筆記 全部打在裡面
git commit -m "備註"
```
### 分支

```
記得先cd 到資料夾再做以下動作
新增分支
轉換到分支
```
<table>
 <tbody>
    <tr>
      <td>git branch 分支名稱</td>
      <td>新增分支</td>  
    </tr>
 <tr>
     <td>git checkout 分支名稱</td>
      <td>轉換到分支</td>
    </tr>
</tbody>
</table>

### merge
```
注意 1. 有多個branch一定要先add commit 2. 有可能有衝突 要去vscode做選擇 然後 add. commit
要合併前 
要先把所有的東西都丟上去 
所以要先 git add .
git commit -m "備註"
轉回我們主線 git checkout master
把我們的分支並近來 git merge login
```

### push的方式
```
1. 先到github 新增一個repository
2. 然後到bash
3. cd desktop 
4. git clone repository的網址
5. cd project
6. git add .
7. git commit -m "備註"
8. git push repository的網址
```

### pull的方式
```
1.創建一個資料夾  
2.進到資料夾裡 
3.初始化資料夾  git init資料夾 
4.pull 網址   git pull 網址
```

