# リンクの装飾

このリポジトリはドロップダウンメニュー（`select`要素）を使用して、白色の二重線の下にある白色のエリア（`iframe`要素内）に各ディレクトリ内にある`index.html`ファイルの内容が表示されるようにしています。

［**選択してください**］を押下し、どれかを選択して表示させてみてください。

表示された内容は上から順に以下の通りです。

- プレビュー画面（`section`要素）
    - textarea要素内に記述されたコードの結果が表示されてます。
- HTMLコード（`textarea`要素）
    - HTMLコードが記述されています。
- CSSコード（`textarea`要素）
    - CSSコードが記述されています。
- リセットボタン（`input`要素）
    - textarea要素内に記述されているコードの変更を初期値（読み込まれた最初の状態）に戻すためのボタンです。
<br><br>

## 共通設定

それぞれのファイルに共通して記述されているコードがあります。

### HTML

どのように変更されるのかを表示させるためのHTMLコードです。

```html
<h2>...</h2> <!-- "..."には"デフォルト"、"border-bottom一括指定プロパティ"、"リンクアイコン"、"ナビゲーションメニュー"と記述されています -->
```

p要素内にa要素を入れ子させた文章となります。**デフォルト**、**border-bottom一括指定プロパティ**、**リンクアイコン**で使用しています。

```html
<p>私が使っているサイトには<a href="#">Home</a>の他に<a href="#">Graphic</a>、<a href="#">Music</a>、<a href="#">Blog</a>、<a href="#">Contact</a>といったリンクがあります。</p>
```

### CSS

a要素内に他のテキストとの間隔を空けるために`padding: 0.1em;`を指定しています。

```css
p a {
    padding: 0.1em;
}
```

このCSSの設定は**border-bottom一括指定プロパティ**、**リンクアイコン**に限り、各ディレクトリ内にある`style.css`ファイルに記述しています。

アットルールを使用して画面の幅が`699px`以下の場合、textarea要素内に記述されているコードのフォントサイズを`120%`から`100%`へと変更しています。 

```css
@media screen and (max-width: 699px) {
    textarea {
        font-size: 100%;
    }
}
```

このCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。
<br><br>

## border-bottom一括指定プロパティ

### HTML

**border-bottom一括指定プロパティ**を表示させるためのHTMLコードです。

```html
<h2>border-bottom一括指定プロパティ</h2>

<p>私が使っているサイトには<a href="#">Home</a>の他に<a href="#">Graphic</a>、<a href="#">Music</a>、<a href="#">Blog</a>、<a href="#">Contact</a>といったリンクがあります。</p>
```

### CSS

border-bottom一括指定プロパティを使用すると、`g`、`j`、`p`などの文字が下線に被らないので読みやすくなりますが、行間が窮屈にならないように`line-height: 1.8;`を指定しています。

```css
p {
    line-height: 1.8;
}
```

`border-bottom`一括指定プロパティを使用する際は`outline: none;`、`text-decoration: none;`と記述してデフォルトの装飾がされないようにします。

```css
p a {
    outline: none;
    text-decoration: none;
}
```

`1px`の太さの下線を装飾していますが、a要素のデフォルト色である`青色`を継承させるために色の指定は省略しています。

```css
p a {
    border-bottom: 1px solid;
}
```
<br>

[ソースコードの参照ページへ](border-bottom/index.html "border-bottom/index.html")
<br><br>

## リンクアイコン

### HTML

**リンクアイコン**を表示させるためのHTMLコードです。

```html
<h2>リンクアイコン</h2>

<p>私が使っているサイトには<a href="#">Home</a>の他に<a href="#">Graphic</a>、<a href="#">Music</a>、<a href="#">Blog</a>、<a href="#">Contact</a>といったリンクがあります。</p>
```

### CSS

リンク先のアドレスに`link`が含まれているものすべてに、右端に`18px`の余白を空けた空間に[SVGで作成したアイコン](link-icon/icons/link-icon.png "link-icon/icons/link-icon.png")を繰り返さずにX軸を`100%`、Y軸を`50%`の位置に幅と高さともに`16px`の大きさで配置します。

```css
p a[href*="link"] {
    padding-right: 18px;
    background-image: url(icons/link-icon.png);
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 16px 16px;
}
```

なお、`background-image`プロパティ、`background-repeat`プロパティ、`background-position`プロパティ、`background-size`プロパティは`background`一括指定プロパティを使用して以下のように記述しています。

```css
p a {
    background: url(icons/link-icon.png) no-repeat 100% 50% / 16px 16px;
}
```
<br>

[ソースコードの参照ページへ](link-icon/index.html "link-icon/index.html")
<br><br>

## ナビゲーションメニュー

### HTML

**ナビゲーションメニュー**を表示させるためのHTMLコードです。

`nav`要素内に５つの`a`要素があり、それぞれにリンク先が記述されています。

```html
<h2>ナビゲーションメニュー</h2>

<nav>
    <a href="#">Home</a>
    <a href="link/graphic.html">Graphic</a>
    <a href="link/music.html">Music</a>
    <a href="link/blog.html">Blog</a>
    <a href="link/contact.html">Contact</a>
</nav>
```

### CSS

nav要素に`display: grid;`、`grid-template-columns: repeat(5, 1fr);`を指定して１行になるように配置ます。また、５つのa要素に対しnav要素全体の幅の中で`0.625%`ずつ間隔を空けます。

```css
nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.625%
}
```

nav要素内にあるa要素に対して`outline: none;`、`text-decoration: none;`と記述してデフォルトの装飾がされないようにします。

```css
nav a {
    outline: none;
    text-decoration: none;
}
```

`border`一括指定プロパティでnav要素内にある５つのa要素を黒色の直線で囲み、テキストが真ん中にくるように`text-align: center;`、`line-height: 3;`を指定します。

```css
nav a {
    border: 1px solid #000;
    text-align: center;
    line-height: 3;
}
```
<br>

[ソースコードの参照ページへ](navigation/index.html "navigation/index.html")
<br><br>

※ 日本時間 2024/12/27 に変更を加えました。
<br><br>

[完成ページへ](https://yscyber.github.io/link-decoration/ "https://yscyber.github.io/link-decoration/")
