## リンクの装飾

このリポジトリではJavaScriptでDOM操作を行っています。１つ目のtextarea要素にはHTMLのコードが、２つ目のtextarea要素にはCSSのコードがすでに入力されており、最上部にあるプレビュー画面（section要素）にその結果が出力されてます。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。

### デフォルト

a要素に他のテキストとの間隔を空けるために、`padding: 2px;`を指定していること以外はデフォルトの装飾となります。

```css
p a {
    padding: 2px;
}
```

### border-bottom一括指定プロパティ

border-bottom一括指定プロパティを使用すると、`g`、`j`、`p`などの文字が下線に被らないので読みやすくなりますが、行間が窮屈にならないように`line-height: 1.8;`を指定しています。

```css
p {
    line-height: 1.8;
}
```

border-bottom一括指定プロパティを使用する際は、`outline: none;`、`text-decoration: none;`と記述してデフォルトの装飾がされないようにします。

```css
p a {
    padding: 2px;
    outline: none;
    text-decoration: none;
    border-bottom: 1px solid;
}
```

### リンクアイコン

リンク先のアドレスに`link`が含まれているものすべてに、a要素内の右端に[SVGで作成したアイコン](link-icon/link-icon.svg "link-icon/link-icon.svg")を配置させています。

```css
p a[href*="link"] {
    padding-right: 18px;
    background: url(link-icon.svg) no-repeat 100% 50%;
    background-size: 16px 16px;
}
```

### ナビゲーションメニュー

nav要素に`display: grid;`、`grid-template-columns: repeat(5, 1fr);`を指定して１行になるように配置ます。また、５つのa要素に対しnav要素全体の幅の中で`0.625%`ずつ間隔を空けています。

```css
nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.625%
}
```

５つのa要素はborder一括指定プロパティで黒色の直線で囲み、テキストが真ん中にくるように、`text-align: center;`、`line-height: 3;`を指定しています。

```css
nav a {
    outline: none;
    text-decoration: none;
    border: 1px solid #000;
    text-align: center;
    line-height: 3;
}
```
<br>

※ 日本時間 2024/10/04 にリファクタリングしました。
<br><br>

[完成ページへ](https://yscyber.github.io/link-decoration/ "https://yscyber.github.io/link-decoration/")
