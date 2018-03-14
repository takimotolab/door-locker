// ボタン要素をグループ化
var button = new createjs.Container();
stage.addChild(button);

// 座布団を作成
var bg = new createjs.Shape();
// 座布団のグラフィックを描く (省略)
button.addChild(bg);

// ラベルを作成
var label = new createjs.Text("Button", "24px sans-serif", "#563d7c");
// ラベルの配置場所を調整 (省略)
button.addChild(label);