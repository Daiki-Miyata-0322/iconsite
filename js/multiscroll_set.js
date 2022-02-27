$(document).ready(function() {
	$(function(){
		$('#multiscroll').multiscroll({
            //ここにオプションを記述する。オプションの種類や効果は自分で調べてみよう。
			sectionsColor: ['rgba(22,0,70,0.5)', 'rgba(21,0,80,0.5)', 'rgba(20,30,97,0.5)','rgba(19,40,110,0.5)', 'rgba(18,50,120,0.5)','rgba(17,60,130,0.5)', 'rgba(16,70,140,0.5)','#rgba(15,80,150,0.5)', 'rgba(14,90,160,0.5)','rgba(13,100,170,0.5)', 'rgba(12,110,185,0.5)','rgba(11,120,200,0.5)'],
            /* 
            「sectionsColor」は、プロパティに色コードを指定する事で
            各コンテンツに背景色をつけることができる。
            この場合は、
            上段の背景色が「#7BAABE」
            中段の背景色が「whitesmoke」
            下段の背景色が「#ff0000」
            */
            anchors: ['top','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','form'],
            menu: '#nav-tag', // メニューの親要素
            paddingTop: 100,
            loopBottom: true,
		});
	});
});