$('.background', {
    "particles": {
        //シェイプの設定-------------
        "shape": {
            "type": "circle, 
            "stroke": {
                "width": num, //シェイプの線の太さ（なしの場合は0）
                "color": "#ffffff" //シェイプの線の色
            },
            /*"type":"polygon"の時の設定*/
            "polygon": {
                "nb_sides": num //角の数
            },
            /*"type":"image"の時の設定*/
            "image": {
                "src": "images/hoge.png", //パス
                "width": num, //幅
                "height": num //高さ
            }
        },
        "color": {
            "value": "ffffff" //シェイプの塗り
        },
        "size": {
            "value": num, //シェイプの大きさ
            "random": false, //大きさをランダムにするか
            "anim": {
                "enable": false, //大きさをアニメーションさせるか
                "speed": 100, //アニメーションスピード
                "size_min": num, //大きさの最小値
                "sync": true //全てのシェイプを同時にアニメーションさせるか
            }
        },
        "opacity": {
            "value": num, //シェイプの透明度（0 〜 1）
            "random": true, //透明度をランダムにするか
            "anim": {
                "enable": false, //透明度をアニメーションさせるか
                "speed": num, //アニメーションスピード
                "opacity_min": num, //透明度の最小値（0 〜 1）
                "sync": false //全てのシェイプを同時にアニメーションさせるか
            }
        },
        "number": {
            "value": num, //シェイプの数
            "density": {
                "enable": true or false, //シェイプの密集度を変更するか
                "value_area": num //シェイプの密集度
            }
        },
        //---------------------
        //シェイプ間の線の設定----------
        "line_linked": {
            "enable": true or false, //線の有無
            "distance": num, //線をつなぐシェイプの距離
            "color": "#ffffff", //線の色
            "opacity": num, //線の透明度（0 〜 1）
            "width": num //線の太さ
        },
        //------------------
        //動きの設定----------
        "move": {
            "speed": num, //シェイプの動くスピード
            "straight": true or false, //個々のシェイプの動きを止めるか
            "direction": "none,top,top-right,right,bottom-right,bottom,bottom-left,left,top-left", //エリア全体の動き
            "out_mode": "out,bounce" //エリア外に出たシェイプの動き
        }
        //------------------
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            //マウスオーバー時の処理----------
            "onhover": {
                "enable": true or false, //ホバーアクションの有無
                "mode": "grab,repulse,bubble" //マウスオーバー時に発動する動き
            },
            //------------------
            //クリック時の処理----------
            "onclick": {
                "enable": true or false, //クリックアクションの有無
                "mode": "grab,repulse,bubble,push,remove" //クリック時に発動する動き
            },
            //------------------

        },
        "modes": {
            //カーソルとシェイプの間に線が表示される----------
            "grab": {
                "distance": num, //カーソルからの反応距離
                "line_linked": {
                    "opacity": num //線の透明度（0 〜 1）
                }
            },
            //------------------
            //シェイプがカーソルから逃げる----------
            "repulse": {
                "distance": num //カーソルからの反応距離
            },
            //------------------
            //シェイプが膨らむ----------
            "bubble": {
                "distance": num, //カーソルからの反応距離
                "size": num, //シェイプの膨らむ大きさ
                "opacity": num, //膨らむシェイプの透明度（0 〜 1）
                "duration": num, //膨らむシェイプの持続時間(onclick時のみ)
                "speed": num //膨らむシェイプの速度(onclick時のみ)
            },
            //------------------
            //シェイプが増える----------
            "push": {
                "particles_nb": num //増えるシェイプの数
            },
            //------------------
            //シェイプが減る----------
            "remove": {
                "particles_nb": num //減るシェイプの数
            }
            //------------------
        }
    },
    "retina_detect": true or false, //Retina対応の有無
    "resize": true or false //canvasのサイズアジャストの有無
});
