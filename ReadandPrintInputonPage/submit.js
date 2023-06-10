function submit(){
    let input = document.getElementById('in');
    let list = document.getElementById('list');
    let li =document.createElement('li');
    
    li.innerHTML=input.value;
    list.append(li);
    input.value="";
    }