function search_categoria() {
  let input = document.getElementById('character').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('categoria');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}