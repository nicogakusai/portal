let festinfo = new Array();
let festCount = 6;
let festNo = Math.floor(Math.random()*festCount);
let utaArrays = new Array();
let utaArray = new Array();

festinfo[0] = "tsukimi.csv";
festinfo[1] = "hanami.csv";
festinfo[2] = "syuen.csv";
festinfo[3]= "kaikou.csv";    //ここに歌のcsvのファイル名を入力していく。
festinfo[4] = "shinshun.csv";
festinfo[5] = "shijin.csv";
festinfo[6] = "";

utaArray = loadFile(festinfo[festNo]);

document.write("<a class=\"uta_link\" href=\"./uta.html?fest=" + utaArray[6] + "&illust=" + utaArray[0] + "_" + utaArray[9] + "\">")
document.write("<div class=\"top_uta_group\">")
document.write("<p class=\"uta_l1\">" + utaArray[2] + "</p>");
document.write("<p class=\"uta_l2\">" + utaArray[3] + "</p>");
document.write("<p class=\"uta_user\">" + utaArray[4] + "</p>");
document.write("</div></a>")


function loadFile(filename){
    let fileData = new XMLHttpRequest();
    let resultArray = new Array();
    let utaCount = 0;
    let utaNo = 0;
    let prevIllustNo = "";
    let utaCountInIllust = 0;

    if(filename.length!=0){
        let filePath = "./uta/" + filename;

        fileData.open("get", filePath, false);
        fileData.send(null);

        let lines = fileData.responseText.replace(/""/g,"【ダブルクォート2個】").replace(/"/g,"").replace(/【ダブルクォート2個】/g,'"').split("\n");

        for(let i=0; i<lines.length; i++){
            let tmp = lines[i].split(",");
            if(tmp.length != 1){
                if(prevIllustNo == tmp[0]){
                    utaCountInIllust++;
                } else{
                    prevIllustNo = tmp[0];
                    utaCountInIllust = 1;
                }
                tmp.push(String(utaCountInIllust));
                resultArray.push(tmp);
                utaCount = utaCount + 1;
            }
        }
        utaNo = Math.floor(Math.random()*utaCount);


    }
    return resultArray[utaNo];
}
