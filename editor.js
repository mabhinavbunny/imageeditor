var currentId=0;
var rotation=0;
var imagesCount = 0;
var angles={
    div1 : 45
};
function addText(){
    $("#imagediv").append(createTextInput());
}
function createTextInput(){
    let id = generateTextId();
    let data = '<div class="rotate" id="div'+currentId+'"><i onclick=textRotate("div'+currentId+'") class="fas fa-undo"></i><i class="fas fa-arrows-alt" onclick=move("div'+currentId+'")></i><textarea class="textcls"  id="'+currentId+'" >Please enter your data</textarea></div>';
   return data;
}
function move(id){
    let ele = "#"+id;
    $( ele ).draggable();   
}
function generateTextId(){
    currentId = currentId + 1;
    return currentId;
}
function textRotate(id){
    let ele = "#"+id;
    console.log(angles,id);
    if( angles.hasOwnProperty(id) ){
    angles[id] = angles[id]+45;
    }
    else
    angles[id] = 45;
    $(ele).rotate(angles[id]);
}
function addImages(){
    let html = "";
    for(let i=0;i<3;i++){
        html = html + "<img src='caredit"+i+".jpg' alt='Italian Trulli' onclick=addImage('caredit"+i+".jpg')>";
    }
    $("#imagesAdd").html(html);
}
function addImage(src){
    let html = "";
    imagesCount = imagesCount + 1;
    html = html + "<div id='editImageDiv"+imagesCount+"'><img src='"+src+"' class='addimage' alt='Italian Trulli'></div>";
    $("#imagediv").append(html);
    let imgID =  "#editImageDiv"+imagesCount;
    console.log(imgID);
    $(imgID).resizable();
    $( imgID ).draggable();   
}